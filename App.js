import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, Keyboard } from 'react-native';
import { useState } from 'react';
import Task from './components/singleTask';

export default function App() {

  let completedItems = [];
  const [taskEnter, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const handleTaskEntry = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, taskEnter])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems]
    completedItems.push(itemsCopy[index])
    itemsCopy.splice(index, 1)
    setTaskItems(itemsCopy)
    }
  
  

  
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.listTitle}>
          Sahayak
        </Text>
        <View style={styles.taskItems}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>

              )
            })
          }
        </View>
      </View>
      <KeyboardAvoidingView
        behaviour={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}>
        <TextInput style={styles.textInput} placeholder={"Type your task"} value={taskEnter} onChangeText={text => setTask(text)} />

        <TouchableOpacity onPress={handleTaskEntry}>
          <View style={styles.addWrapper}>
            <Text style={styles.addSign}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
  writeTaskWrapper: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    bottom: 30,
    width: '100%'
  },
  textInput: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    width: 250,
    backgroundColor: '#F2F5C8',
    borderRadius: 15,
    borderColor: '#E8E8A6',
    borderWidth: 1,
  },
  addWrapper: {
    height: 55,
    width: 55,
    backgroundColor: '#F2F5C8',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#E8E8A6',
    borderWidth: 1,
  },
  addSign: {
    fontSize: 19
  }


});
