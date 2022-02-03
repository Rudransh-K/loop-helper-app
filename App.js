import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/singleTask';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.listTitle}>
          Today's Tasks
        </Text>
        <View style={styles.taskItems}>
          <Task text="Zeroth Task" />
          <Task text="First Task" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#219F94',

  },
  taskWrapper: {
    paddingTop: 40,
    paddingLeft: 22,
  },
  listTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#F2F5C8',
    paddingTop: 10
  },
  taskItems: {
    paddingTop: 30,
    paddingLeft: 5,
    paddingRight: 27
  },

});
