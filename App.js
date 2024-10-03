import { View } from 'react-native';
import { TaskProvider } from './src/context/TaskContext';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <View>
      <TaskProvider>
        <HomeScreen />
      </TaskProvider>
    </View>
  );
}
