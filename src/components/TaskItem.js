import { Button, Text, View } from "react-native";

export default function TaskItem({ task, onRemove }) {
    return (
        <View>
            <Text>
                {task.title}
            </Text>
            <Button title="Remove Task" onPress={() => onRemove(task.id)} />
        </View>
    )
}