import {MMKV} from 'react-native-mmkv';

// Inisialisasi storage
const storage = new MMKV();

export const LocalStorage = {
  setItem: (key: string, value: any) => {
    const stringValue =
      typeof value === 'string' ? value : JSON.stringify(value);
    storage.set(key, stringValue);
  },

  getItem: <T = any,>(key: string): T | null => {
    const value = storage.getString(key);
    if (!value) return null;

    try {
      return JSON.parse(value) as T;
    } catch {
      return value as unknown as T;
    }
  },

  removeItem: (key: string) => {
    storage.delete(key);
  },

  clearAll: () => {
    storage.clearAll();
  },
};
