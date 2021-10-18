import React,{useState,useEffect} from "react";
import { Button, View, Text, FlatList, StyleSheet, Image } from "react-native";

const Shows = (props) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        .then((response) => response.json())
        .then(json => setData(json.drinks))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false))
    }, []);

    return(
      <FlatList 
      data={data}
      keyExtractor={({name},index) => index.toString()}
      renderItem={(dataItem) => (
          <View style={styles.textContainer} >
               <Image
                style={styles.tinyLogo}
                source={{
                uri: dataItem.item.strDrinkThumb
                }}
                />
                <View style={styles.text}>
                    <Text>{dataItem.item.strCategory}</Text>
                </View>
          </View>
      )} />
    )
}

const styles= StyleSheet.create({
    textContainer : {
        margin:10
    },
    tinyLogo: {
      width: '100%',
      height: 150,
    },
    text:{
        backgroundColor:'#f7287d',
        color:'black',
        justifyContent:'center',
        alignItems:'center'
    }
})



export default Shows;