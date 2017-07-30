/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {Text,AppRegistry,View} from 'react-native';


const Header = (props)=>{
    const {textStyle,viewStyle}=styles;

    return(
        <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
}

const styles={
    viewStyle:{
      backgroundColor: '#1976D2',
      justifyContent:'center',
      alignItems:'center',
      height:50,
      paddingTop:5,
      elevation:5,
    },
    textStyle:{
        fontSize:15,
        color:'#FFFFFF'

    }
};
export default Header;
