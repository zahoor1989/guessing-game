import React, {useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert, ScrollView } from 'react-native';
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
    const guessedNumber = generateRandomNumber(1, 100, props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(guessedNumber);
    const [pastGuesses, setPastGuesses] = useState([guessedNumber]);
    const [rounds, setRounds] = useState(0)
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const NextHandler = (direction) => {
        if((direction === 'Lower' && currentGuess < props.userChoice) || (direction === 'Greater' && currentGuess > props.userChoice)){
            Alert.alert(`Don't Lie`, 'You know that this is wrong...',[{text:'Sorry', style:'Cancel'}]);
            return
        }
        if(direction === 'Lower'){
            currentHigh.current = currentGuess + 1;
        }else {
            currentLow.current = currentGuess;
        }
        const guessedNewNo = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(guessedNewNo);
        setPastGuesses(curPastGuess => [guessedNewNo,...pastGuesses]);
        setRounds(pastGuesses.length+1);
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
           <View style={styles.listContainer}>
           <ScrollView contentContainerStyle={styles.list}>
           {pastGuesses.map((guess, index) => (
                                    <View key={index+1} style={styles.listItem }>
                                        <Text>#{index+1}</Text>
                                        <Text>{guess}</Text>
                                        </View>
                                        ))}
           </ScrollView>
           </View>
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
    },
    listItem:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderColor:'#808080',
        borderRadius:10,
        borderWidth:1,
        padding:15,
        marginVertical:10,
        backgroundColor:'#FF337A',
        width:'100%'
    },
    list:{
       flexGrow:1,
       alignItems:'center',
       justifyContent:'flex-end',
    },
    listContainer:{
        flex:1,
        width:'80%',
    }
});


export default GameScreen;