import React, {useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
const generateRandomNumber = (min, max, exclude ) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randNo = Math.floor(Math.random() * (max - min )) + min ; 
    if(randNo === exclude ) {
        return generateRandomNumber(min, max, exclude)
    }else{
        return randNo;
    }
}
const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, props.userChoice));
    const [rounds, setRounds] = useState(0)
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const NextHandler = (direction) => {
        if((direction === 'Lower' && currentGuess < props.userChoice) || (direction === 'Greater' && currentGuess > props.userChoice)){
            Alert.alert(`Don't Lie`, 'You know that this is wrong...',[{text:'Sorry', style:'Cancel'}]);
            return
        }
        if(direction === 'Lower'){
            currentHigh.current = currentGuess;
        }else {
            currentLow.current = currentGuess;
        }

        setCurrentGuess(generateRandomNumber(currentLow.current, currentHigh.current, currentGuess));
        setRounds(curRounds => curRounds+1);
    }
    const { userChoice, onGameOver } = props;
    useEffect(() => {
        if(currentGuess === userChoice){
            onGameOver(rounds);
        }
    },[currentGuess, userChoice, onGameOver])
    return (
       <View style={styles.container}>
           <NumberContainer>{currentGuess}</NumberContainer>
           <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={() => NextHandler('Lower')} />
                <Button title="GREATER" onPress={() => NextHandler('Greater')} />
           </Card>
       </View>
      
    )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        padding:10,
        margin:1,
        alignItems:'center'
    },
    buttonContainer : {
        flexDirection:'row',
        marginTop:20,
        justifyContent:'space-around',
        width:300,
        maxWidth:'80%'
    }
});


export default GameScreen;