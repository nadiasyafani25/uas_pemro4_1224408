import AsyncStorage from '@react-native-async-storage/async-storage';
import { Note } from '../types/Note';

const KEY = 'NANOTE_DATA';

export async function saveNote(note: Note) {
  const old = await AsyncStorage.getItem(KEY);
  const data = old ? JSON.parse(old) : [];
  data.push(note);
  await AsyncStorage.setItem(KEY, JSON.stringify(data));
}

export async function getNotes(): Promise<Note[]> {
  const data = await AsyncStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
}
