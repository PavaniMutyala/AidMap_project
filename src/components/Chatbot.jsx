import { useState, useRef, useEffect } from 'react';
import { FiMessageCircle, FiX, FiSend } from 'react-icons/fi';
import { chatbotResponses } from '../data/demoData';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hi! 👋 I'm the AidMap Assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const messagesEnd = useRef(null);

  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const findResponse = (query) => {
    const q = query.toLowerCase();
    for (const [key, value] of Object.entries(chatbotResponses)) {
      if (key === 'default') continue;
      const keywords = key.split(' ');
      const matchCount = keywords.filter(k => q.includes(k)).length;
      if (matchCount >= 2 || q.includes(key)) return value;
    }
    // Partial matches
    if (q.includes('help') || q.includes('request')) return chatbotResponses['how to request help'];
    if (q.includes('volunteer') || q.includes('join')) return chatbotResponses['how volunteers can join'];
    if (q.includes('ngo') || q.includes('coordinate') || q.includes('organization')) return chatbotResponses['how ngos coordinate'];
    if (q.includes('what') && q.includes('aidmap')) return chatbotResponses['what is aidmap'];
    if (q.includes('emergency') || q.includes('urgent')) return chatbotResponses['emergency'];
    return chatbotResponses['default'];
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setInput('');

    setTimeout(() => {
      const response = findResponse(userMsg);
      setMessages(prev => [...prev, { sender: 'bot', text: response }]);
    }, 600);
  };

  const quickAsk = (question) => {
    setMessages(prev => [...prev, { sender: 'user', text: question }]);
    setTimeout(() => {
      const response = findResponse(question);
      setMessages(prev => [...prev, { sender: 'bot', text: response }]);
    }, 600);
  };

  return (
    <>
      <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)} id="chatbot-toggle">
        {isOpen ? <FiX /> : <FiMessageCircle />}
      </button>

      {isOpen && (
        <div className="chatbot-window" id="chatbot-window">
          <div className="chatbot-header">
            <div>
              <h4>🤖 AidMap Assistant</h4>
              <span className="bot-status">● Online – AI Powered</span>
            </div>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-msg ${msg.sender}`}>
                {msg.text}
                {i === 0 && (
                  <div className="chat-quick-btns">
                    <button className="chat-quick-btn" onClick={() => quickAsk('How to request help?')}>
                      Request Help
                    </button>
                    <button className="chat-quick-btn" onClick={() => quickAsk('How volunteers can join?')}>
                      Join as Volunteer
                    </button>
                    <button className="chat-quick-btn" onClick={() => quickAsk('How NGOs coordinate?')}>
                      NGO Support
                    </button>
                    <button className="chat-quick-btn" onClick={() => quickAsk('What is AidMap?')}>
                      About AidMap
                    </button>
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEnd} />
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              id="chatbot-input-field"
            />
            <button onClick={sendMessage}><FiSend /></button>
          </div>
        </div>
      )}
    </>
  );
}
