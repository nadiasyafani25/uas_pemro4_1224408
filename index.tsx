import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { useRouter } from 'expo-router';
import { saveNote } from '../storage/noteStorage';

export default function Home() {
  const [text, setText] = useState('');
  const router = useRouter();

  const save = async () => {
    if (!text) return;

    await saveNote({
      id: Date.now().toString(),
      text,
      date: new Date().toLocaleDateString(),
    });

    setText('');
    router.push('/notes');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📝 NaNote</Text>
      <Text style={styles.subtitle}>Tulis catatan harianmu</Text>

      <TextInput
        style={styles.input}
        placeholder="Hari ini aku merasa..."
        multiline
        value={text}
        onChangeText={setText}
      />

      <TouchableOpacity style={styles.button} onPress={save}>
        <Text style={styles.buttonText}>Simpan & Lihat Catatan</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 5,
  },
  subtitle: {
    color: '#475569',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    height: 150,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#1e3a8a',
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
