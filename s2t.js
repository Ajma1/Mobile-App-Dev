import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Permissions from 'react-native-permissions';
import Voice from '@react-native-voice/voice';

export default function SpeechToText() {
  const [isListening, setIsListening] = useState(false);
  const [results, setResults] = useState('');

  const requestMicrophonePermissions = async () => {
    const granted = await Permissions.request(Permissions.PERMISSIONS.RECORD_AUDIO);
    if (granted === Permissions.RESULTS.GRANTED) {
      Voice.start('en-US').then(() => setIsListening(true)).catch(error => console.error(error));
    } else {
      console.warn('Microphone permission denied');
    }
  };

  useEffect(() => {
    requestMicrophonePermissions();

    Voice.onSpeechStart = () => setIsListening(true);
    Voice.onSpeechEnd = () => setIsListening(false);
    Voice.onSpeechResults = (e) => {
      if (e.value) {
        setResults(prevResults => prevResults + ' ' + e.value[0]);
      }
    };

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{isListening ? 'Listening...' : results}</Text>
      <Button
        title={isListening ? 'Stop' : 'Start'}
        onPress={isListening ? Voice.stop : requestMicrophonePermissions}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});
