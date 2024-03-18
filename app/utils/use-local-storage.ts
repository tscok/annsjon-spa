type Get<T> = () => T | null
type Set = (value: string) => void

export function useLocalStorage<T>(key: string): [Get<T>, Set] {
  const get: Get<T> = () => window.localStorage.getItem(key) as T | null
  const set: Set = (value: string) => window.localStorage.setItem(key, value)
  return [get, set]
}
