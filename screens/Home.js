import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default class Home extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Home!!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})