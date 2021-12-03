import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default class SpaceCraft extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Space Craft!!</Text>
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