import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/core'

const Landing = () => {

    const navigation = useNavigation()

    const handleOwnerLogin = () => {
        navigation.navigate("Login");
        }

    const handleSahayakLogin = () => {
            navigation.replace("Login");
        }

  return (
    <View style={styles.container}>
      <TouchableOpacity
          onPress={handleOwnerLogin}
          style={styles.ownerLogin}
        >
          <Text style={styles.buttonText}>Owner</Text>
        </TouchableOpacity>





        <TouchableOpacity
          onPress={handleSahayakLogin}
          style={styles.sahayakLogin}
        >
          <Text style={styles.buttonOutlineText}>Sahayak</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Landing

const styles = StyleSheet.create({
    container: {
        flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',

    },
    ownerLogin: {
        backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    },
    sahayakLogin: {
        backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    },
    buttonText: {
        color: "#FFFFFF"
    }
})