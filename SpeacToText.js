// components/SpeechToText.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import Voice from '@react-native-voice/voice';

const SpeechToText = ({ onSpeechRecognized }) => {
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');

  useEffect(() => {
    Voice.onSpeechRecognized = (e) => {
      console.log('Speech recognized:', e);
      onSpeechRecognized && onSpeechRecognized(e.value[0]);
    };

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, [onSpeechRecognized]);

  const startSpeechToText = async () => {
    try {
      await Voice.start('en-US');
      setIsListening(true);
    } catch (error) {
      console.error('Error starting speech-to-text:', error);
    }
  };

  const stopSpeechToText = async () => {
    try {
      await Voice.stop();
    } catch (error) {
      console.error('Error stopping speech-to-text:', error);
    }
  };

  return (
    <View>
      <Text>Speech to Text Example</Text>
      <Button
        title={isListening ? 'Stop Listening' : 'Start Listening'}
        onPress={isListening ? stopSpeechToText : startSpeechToText}
      />
      <Text>Recognized Text: {recognizedText}</Text>
    </View>
  );
};

export default SpeechToText;
