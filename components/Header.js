import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = props => {
    return (
        <View style={styles.header}>
            <Text {...props.style} style={styles.headerText}>{props.title}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:80,
        paddingTop:30,
        backgroundColor:'#f7287b',
        justifyContent:'center',
        alignItems:'center'
    },
    headerText:{
        color:'black',
        fontSize:18
    }
})

export default Header;