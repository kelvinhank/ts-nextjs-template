// Save data to local storage
export function savetoStorage(key: string, data: any): void {
  if (typeof window !== 'undefined' && window.localStorage) {
    const serializedData = JSON.stringify(data);
    localStorage?.setItem(key, serializedData);
  }
}

// Retrieve data from local storage
export function getDataStorage<T>(key: string): T | null {
  if (typeof window !== 'undefined' && window.localStorage) {
    const serializedData = localStorage.getItem(key);
    if (serializedData) {
      return JSON.parse(serializedData) as T;
    }
  }
  return null;
}

// Remove data from local storage
export function removeDataStorage(key: string): void {
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.removeItem(key);
  }
}
