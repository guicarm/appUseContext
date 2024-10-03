import { useContext, useState } from "react";
import { Button, FlatList, TextInput, View } from "react-native";
import TaskItem from "../components/TaskItem";
import { TaskContext } from "../context/TaskContext";

export default function HomeScreen() {
    const [task, setTask] = useState()
    const { tasks, addTask, removeTask } = useContext(TaskContext)

    const handleSubmit = () => {
        const newTask = {
            id: Math.random(),
            title: task,
            completed: false
        }
        setTask("")
        addTask(newTask)
    }

    return (
        <View>
            <TextInput placeholder="Add Task" value={task} onChangeText={setTask} />
            <Button title="Add Task" onPress={handleSubmit} />
            <FlatList
                data={tasks}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <TaskItem task={item} onRemove={removeTask} />
                )}
            />
        </View>
    )
}