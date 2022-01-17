import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from "react";

export default function UseLocal(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = AsyncStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (e) {
            return initialValue
        }
    })

    const setValue = value => {
        try {
            setStoredValue(value)
            AsyncStorage.setItem(key, JSON.stringify(value))
        } catch (e) {
            console.error(e)
        }
    }
    return [storedValue, setValue]
}