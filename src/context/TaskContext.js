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

    const addTask = async (task) => {
        const newTasks = [...tasks, task]
        setTask(newTasks)
        await AsyncStorage.setItem("@task", JSON.stringify(newTasks))
    }

    const removeTask = async (id) => {
        const updatedTasks = task.filter(task => task.id !== id)
        setTask(updatedTasks)
        await AsyncStorage.setItem("@task", JSON.stringify(updatedTasks))
    }

    return (
        <TaskContext.Provider value={{ task, addTask, removeTask }}>
            {children}
        </TaskContext.Provider>
    )
}