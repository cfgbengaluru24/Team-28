import { useEffect, useState } from "react";

let recognition = null;
if ('webkitSpeechRecognition' in window){
    recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.lang = 'eng';
}

console.log(recognition.onresult)

const useSpeechRecognition = () => {
    const [text, setText] = useState("")
    const [isListening,setListening] = useState(false)

    useEffect(() => {
        if (!recognition)
            return {
                text: null,
                isListening: null,
                startListening: null,
                stopListening: null,
                hasRecogSupport : false
            }
        recognition.onresult = (event ) => {
            console.log("onresult event: ",event);
            setText(event.results[0][0].transcript)
            // setInput(event.results[0][0].transcript)
            console.log(event)
            recognition.stop();
            setListening(false);
            // handleSend();
        }
    },[])

    const startListening = () => {
        setText("");
        setListening(true);
        recognition.start();
    }
    const stopListening = () => {
        setListening(false);
        // setText(event.results[0][0].transcript)
        // console.log(event);
        recognition.stop();
    }
    
    return {
        text,
        isListening,
        startListening,
        stopListening,
        hasRecogSupport : recognition !== null,
        setListening
    }
}



export default useSpeechRecognition;