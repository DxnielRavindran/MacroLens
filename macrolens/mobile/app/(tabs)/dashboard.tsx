import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MacroCard, { MOCK_ANALYSIS } from '@/components/MacroCard';

export default function HomeScreen() {
  const [tapped, setTapped] = useState(false);
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🍕</Text>
      <Text style={styles.title}>Hello MacroLens</Text>
      <Text style={styles.counter}>Meals logged: {counter}</Text>
      <TouchableOpacity style={styles.button} onPress={() => { setTapped(!tapped); setCounter(counter + 1); }}>
        <Text style={styles.buttonText}>{tapped ? 'Tracking started!' : 'Track my macros'}</Text>
      </TouchableOpacity>
      <MacroCard analysis={MOCK_ANALYSIS} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    gap: 12,
  },
  emoji: {
    fontSize: 64,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  button: {
    marginTop: 16,
    backgroundColor: '#FF6B35',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  counter: {
    fontSize: 18,
    color: '#888',
  }
});