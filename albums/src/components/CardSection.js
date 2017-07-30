/**
 * Created by apple on 30/07/17.
 */

import React from 'react';
import {View} from 'react-native';

const CardSection = (props)=>{
    return (
        <View style={styles.containerStyles}>
            {props.children}
        </View>
    );
}

const styles={

    containerStyles:{

        borderBottomWidth:0,
        padding:5,
        backgroundColor:'#fff',
        justifyContent:'flex-start',
        flexDirection:'row',
        borderColor:'#ddd',
        position:'relative'

    }
};

export default CardSection;