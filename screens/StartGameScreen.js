import React ,{ useState } from 'react';
import { Text, View, Button, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import Input from '../components/Input';

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmedVal, setConfirmedVal] = useState();
    const [confirmed, setConfirmed] = useState(false)

   const validateInput = inputValue => {
        setEnteredValue(inputValue.replace(/[^0-9]/g,''))
    }
    const resetHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }
    const confirmEnteredValue = () => {
        const chosenNumber = parseInt(enteredValue);
        if(isNaN(chosenNumber) || chosenNumber <= 0){
            Alert.alert('Invalid Number','Number should be be greater than 0 and less than 99',[{text:'OK', style:'destructive', onPress:resetHandler}])
            return;
        }else{
           
        }
        setConfirmed(true)
        setConfirmedVal(chosenNumber);
        setEnteredValue('');
    }
    let confirmedNumber
    if(confirmed){
        confirmedNumber = <Card style={styles.summaryContainer}>
                                <NumberContainer>{confirmedVal}</NumberContainer>
                                <Button title="Start Game" onPress={() => props.selectedNumberHandler(confirmedVal)}/>
                            </Card>
    }

    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}} >
        <View style={styles.startContainer}>
            <Text style={styles.title}>Game Starts Here</Text>
            <Card style={styles.inputContainer}>
                <Input onChangeText={validateInput} 
                    blurOnSubmit
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={enteredValue}
                    keyboardType="number-pad"
                    style={styles.input} 
                    maxLength={2}/>
                <View style={styles.btnContianer}>
                    <Button title='Reset' onPress={resetHandler}/>
                    <Button title="Confirm" onPress={confirmEnteredValue} />
                </View>
            </Card>
            {confirmedNumber}
        </View>
        </TouchableWithoutFeedback>
       
    );
}

const styles = StyleSheet.create({
    startContainer:{
        padding:10,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:18
    },
    inputContainer:{
        width:300,
        maxWidth:'80%',
        height:200,
        alignItems:'center',
    },
    input:{
        width:50,
        textAlign:'center'
    },
    btnContianer:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    summaryContainer:{
        marginTop:20,
        alignItems:'center',
    }
});


export default StartGameScreen;