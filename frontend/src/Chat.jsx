// src/App.js
import React from 'react';
import Chatbot from './Chatbot.jsx';
import './Chat.css';

function Chat() {
  return (
    <div className="Chat">
      <header className="Chat-header">
        <h1>Simple Chatbot</h1>
      </header>
      <main>
        <Chatbot />
      </main>
    </div>
  );
}

export default Chat;
