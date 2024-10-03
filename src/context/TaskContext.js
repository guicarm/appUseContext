import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [task, setTask] = useState([])

    useEffect(() => {
        const loadTaskData = async () => {
            const storedTask = await AsyncStorage.getItem("@task")
            if (storedTask) setTask(JSON.parse(storedTask))
        }
        loadTaskData()
    }, [])
}