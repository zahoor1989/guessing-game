import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import * as Font from 'expo-font';


const FontLoader = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        OpenSansBold: require('./assets/Fonts/OpenSans-Bold.ttf'),
        OpenSansRegular: require('./assets/Fonts/OpenSans-Regular.ttf'),
      });

      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Application is being loaded</Text>
      </View>
    )
  }

  return children;
};

export default function App() {
  const [userChoice, setUserChoice] = useState()
  const [guessRound, setGuessRound] = useState(0);
  const handlerUserChoice = (userEnteredNumber) =>{
    setUserChoice(userEnteredNumber);
  }
  const gameOverHandler = (gessedRounds) => {
    setGuessRound(gessedRounds);
  }
  const restartGameHandler = () => {
    setGuessRound(0);
    setUserChoice(null);
  }




  let content = <StartGameScreen selectedNumberHandler={handlerUserChoice}/>
  if(userChoice && guessRound <= 0){
    content = <GameScreen userChoice={userChoice} onGameOver={gameOverHandler}/> 
  }else if(guessRound > 0 ){
    content = <GameOverScreen totalGuess={guessRound} restartGame={restartGameHandler}/>
  }

return (
    <FontLoader>
      <View style={styles.container}>
        <Header title="Guessing Numbers" style={styles.fontStyle}/>
        {content}
      </View>
    </FontLoader>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily:'OpenSansBold',
  },
  fontStyle:{
    fontFamily:'OpenSansBold',
    fontSize:30,
  }
});
