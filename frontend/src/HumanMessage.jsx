// src/HumanMessage.js
import React from 'react';
import './Message.css';

const HumanMessage = ({ text }) => {
  return (
    <div className="message human">
      {text}
    </div>
  );
};

export default HumanMessage;
