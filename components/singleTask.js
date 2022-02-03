import React from 'react';
import { View, Text, StyleSheet, ProgressViewIOSComponent } from 'react-native';

const Task = (props) => {
    return (
        <View style={styles.items}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.text}>{props.text}</Text>

            </View>
            <View style={styles.circle}></View>

        </View>
    )
}

const styles = StyleSheet.create({
    items: {
        backgroundColor: '#C1DEAE',
        padding: 15,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 25,
        height: 25,
        backgroundColor: '#395B64',
        borderRadius: 6,
        marginRight: 14
    },
    text: {
        maxWidth: '80%',
        fontSize: 17,
        fontWeight: '100'
    },
    circle: {
        width: 20,
        height: 20,
        borderColor: '#395B64',
        borderWidth: 3,
        borderRadius: 10,
        backgroundColor: '#C1DEAE'
    },



});

export default Task;