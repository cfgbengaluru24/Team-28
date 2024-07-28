// src/Chatbot.js
import React, { useEffect, useState } from 'react';
import HumanMessage from './HumanMessage.jsx';
import AiMessage from './AiMessage.jsx';
import './Chatbot.css';
import useSpeechRecognition from './hooks/useSpeechRecognition.js';
import {dataArray} from "./data.js"
import { useNavigate } from 'react-router-dom';

console.log(dataArray)
const props = {}

let n = dataArray.length;
const Chatbot = () => {

  const [index,setIndex] = useState(1)
  const [messages, setMessages] = useState([{ text: `Please enter ${dataArray[0]}`, sender: 'ai' }]);
  const [input, setInput] = useState('');
  const [dis,setDis] = useState(false)
  const mappingArray = messages.map((msg, index) => (
    msg.sender === 'human' ? 
    <HumanMessage key={index} text={msg.text} /> : 
    <AiMessage key={index} text={msg.text} />
  ))
  console.log(props)
  const navigate = useNavigate();
  


  const handleSend = () => {
      
      if (!input.trim()) return;
      
      console.log("hello")
    const newMessage = { text: input, sender: 'human' };
    setMessages([...messages, newMessage]);
    props[dataArray[index-1]] = input; 
    setInput('');
    setIndex((index) => index+1)

    // Simulating AI response
    if (index < n){
        const aiResponse = { text: `Please enter ${dataArray[index]}`, sender: 'ai' };
        setMessages((prevMessages) => [...prevMessages, aiResponse]);
    }
    else{
        setDis(true);
        navigate("/healthDetails",{state: props})
    }
  };
  const Listen = () => {
    if (isListening){
        stopListening();
        setListening(false);
    }
    else{
        setListening(true);
        startListening();
        console.log("Started")
    }
  }
  const {text, startListening, stopListening, isListening, hasRecogSupport,setListening} = useSpeechRecognition();
  useEffect(() => {
    setInput(text);
    // handleSend();
  },[text]);

  return (
    <div className="chatbot">
      <div className="chatbox">
        {mappingArray}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          disabled={dis}
        />
        <button onClick={handleSend} disabled={dis}>Send</button>
        {hasRecogSupport && <button onClick={Listen} disabled={dis}>Record</button>}
      </div>
      {isListening && <p>Browser is listening</p>}
      {/* {text && text } */}
    </div>
  );
};

export default Chatbot;
