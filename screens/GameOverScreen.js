import React from 'react';
import {View, Text, StyleSheet, Button, Image } from 'react-native';
import Card from '../components/Card';


const GameOverScreen = (props) => {
    return(
       
            <View style={styles.screen}>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/success.png')} style={styles.image} resizeMode="cover"/>
                </View>
                 <Card>
                    <Text>Game is over!</Text>
                    <Text>Total Guesses: {props.totalGuess} !</Text>
                    <Button title="Start Again" onPress={props.restartGame}/>
                </Card>
            </View>
       
    )
}

const styles = StyleSheet.create({
    screen : {
        backgroundColor:'#f7287b',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    textColor:{
        color:'#ffffff',
    },
    imageContainer:{
        width:300,
        height:300,
        borderRadius:150,
        borderColor:'black',
        overflow:'hidden'
    },
    image:{
        width:'100%',
        height:'100%',
        
    }
})

export default GameOverScreen;