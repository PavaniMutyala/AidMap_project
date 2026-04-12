import { FiTrendingUp, FiTrendingDown } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export default function StatsCard({ icon, value, label, trend, trendDir, color, delay = 0 }) {
  const colorMap = {
    blue: { bg: 'rgba(59,130,246,0.15)', fg: '#3b82f6' },
    orange: { bg: 'rgba(249,115,22,0.15)', fg: '#f97316' },
    green: { bg: 'rgba(16,185,129,0.15)', fg: '#10b981' },
    red: { bg: 'rgba(239,68,68,0.15)', fg: '#ef4444' },
    cyan: { bg: 'rgba(6,182,212,0.15)', fg: '#06b6d4' },
    purple: { bg: 'rgba(124,58,237,0.15)', fg: '#7c3aed' },
  };
  const c = colorMap[color] || colorMap.blue;

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let numericValue = isNaN(value) ? parseInt(String(value).replace(/[^0-9]/g, ''), 10) : parseInt(value, 10);

    if (isNaN(numericValue) || numericValue === null) {
      setDisplayValue(value);
      return;
    }

    let start = 0;
    const duration = 1500;
    const interval = 16;
    const step = numericValue / (duration / interval);

    let timer;
    const startAnimation = () => {
      if (numericValue === 0) {
        setDisplayValue(0);
        return;
      }
      timer = setInterval(() => {
        start += step;
        if (start >= numericValue) {
          setDisplayValue(numericValue);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.ceil(start));
        }
      }, interval);
    };

    const delayTimer = setTimeout(startAnimation, delay * 1000);

    return () => {
      clearTimeout(delayTimer);
      clearInterval(timer);
    };
  }, [value, delay]);

  const finalValue = (typeof value === 'string' && typeof displayValue === 'number' && !isNaN(parseInt(value)))
    ? value.replace(/\d+/, displayValue)
    : displayValue;

  return (
    <div className="stat-card" style={{ animationDelay: `${delay}s` }}>
      <div className="stat-icon" style={{ background: c.bg, color: c.fg }}>
        {icon}
      </div>
      <div className="stat-info">
        <h3 style={{ color: c.fg }}>{finalValue}</h3>
        <p>{label}</p>
        {trend && (
          <span className={`stat-trend ${trendDir}`}>
            {trendDir === 'up' ? <FiTrendingUp /> : <FiTrendingDown />} {trend}
          </span>
        )}
      </div>
    </div>
  );
}
