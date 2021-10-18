import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Text, View, StyleSheet, Button } from 'react-native';

const NumberContainer = props => {
    return (
        <View style={Styles.NumberContainer}>
            <Text style={Styles.NumberStyle}>{props.children}</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    NumberContainer : {
        borderWidth:2,
        shadowColor:'black',
        borderRadius:10,
        marginVertical:10,
        padding:10,
        alignItems:'center',
        justifyContent:'center'
    },
    NumberStyle : {
        color:'red',
        fontSize:20
    }
});

export default NumberContainer;