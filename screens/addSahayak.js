import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core'  

const AddSahayak = () => {

    
    const navigation = useNavigation()

    const addASahayak = () => {
        navigation.navigate("Home");
        let rand = Math.floor(100000 + Math.random()*900000);
        }

  return (
    <View style={styles.container}>
      <TouchableOpacity
          onPress={addASahayak}
          style={styles.addASahyak}
        >
          <Text style={styles.buttonText}>Add a sahayak</Text>
        </TouchableOpacity>


    </View>
  )
}

export default AddSahayak

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }

})