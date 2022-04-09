import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, Keyboard } from 'react-native';
import { useState } from 'react';
import Task from '../components/singleTask';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/core'
import React from 'react'
const Stack = createNativeStackNavigator();

const SahayakList =()=> {
  let completedItems = [];
  const [sahayakEnter, setSahayak] = useState();
  const [sahayakList, setSahayakList] = useState([]);
  const handleTaskEntry = () => {
    Keyboard.dismiss();
    setSahayakList([...sahayakList, sahayakEnter])
    setSahayak(null);
  }

  const completeTask = (index) => {
        
    }
    const navigation = useNavigation()

    // const handleSignOut = () => {
    //   auth
    //     .signOut()
    //     .then(() => {
    //       navigation.replace("Login")
    //     })
    //     .catch(error => alert(error.message))
    // }
    return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.listTitle}>
          Sahayak List
        </Text>
      {/* <TouchableOpacity
        onPress={handleSignOut}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity> */}
    </View>
        <View style={styles.sahayakList}>
          {
            sahayakList.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>

              )
            })
          }
      </View>
      <KeyboardAvoidingView
        behaviour={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}>
        <TextInput style={styles.textInput} placeholder={"Type your task"} value={sahayakEnter} onChangeText={text => setSahayak(text)} />
        <TouchableOpacity onPress={handleTaskEntry}>
          <View style={styles.addWrapper}>
            <Text style={styles.addSign}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

export default SahayakList

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
  sahayakList: {
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
  },
  button: {
   width: '100%',
   padding: 15,
   borderRadius: 10,
   marginTop: 40,
 },
 buttonText: {
  fontSize: 30,
  color: '#F2F5C8',
  fontWeight: 'bold',
  alignSelf: 'flex-end',
  paddingLeft: 100
 },
});
