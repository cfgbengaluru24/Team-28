// src/AiMessage.js
import React from 'react';
import './Message.css';

const AiMessage = ({ text }) => {
  return (
    <div className="message ai">
      {text}
    </div>
  );
};

export default AiMessage;
