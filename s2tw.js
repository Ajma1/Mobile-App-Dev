import React, { useState } from 'react';

export default function SpeechToTextWeb() {

  const SpeechToTextWeb = () => {
    const [recognizedText, setRecognizedText] = useState('');
  
    const startSpeechToText = () => {
      const recognition = new window.webkitSpeechRecognition();
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setRecognizedText(transcript);
      };
  
      recognition.start();
    };
  
    return (
      <div>
        <h1>Speech to Text Example (Web)</h1>
        <button onClick={startSpeechToText}>Start Listening</button>
        <p>Recognized Text: {recognizedText}</p>
      </div>
    );
  };
  
}
