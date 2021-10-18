import React from 'react';
import { View, StyleSheet} from 'react-native';

const Card = props => {
    return (
        <View style={{...styles.inputContainer, ...props.style}}>{props.children}</View>
    );
}

const styles = StyleSheet.create({
    inputContainer:{
        padding:10,
        width:300,
        maxWidth:'80%',
        alignItems:'center',
        shadowColor:'black',
        shadowOffset:{width:0, height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        elevation:6,
        backgroundColor:'white',
        borderRadius:6

    },
});

export default Card;