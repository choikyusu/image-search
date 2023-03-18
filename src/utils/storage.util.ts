export function getValueFromLocalStorage<T>(key: string, type?: string): T {
  switch (type) {
    case 'array': {
      const value = window.localStorage.getItem(key) || '[]';
      return JSON.parse(value) as T;
    }
    default: {
      const value = window.localStorage.getItem(key) || '';
      return value as T;
    }
  }
}

export function setValueToLocalStorage(key: string, value: string) {
  window.localStorage.setItem(key, value);
}
