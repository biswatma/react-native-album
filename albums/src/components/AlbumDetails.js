/**
 * Created by apple on 30/07/17.
 */

import React from 'react';
import {Text,View,Image} from 'react-native';
import Card from './Card'
import CardSection from './CardSection'

const AlbumDetails = ({album})=>{

    const {title,artist,thumbnail_image,image}=album;
    const {thumbnailStyle,headerContentStyle,headerTextStyle,thumbnailContainerStyle,imagestyle}=styles
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                <Image style={thumbnailStyle}
                       source={{uri:thumbnail_image}} />
                </View>
            <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{title} </Text>
            <Text>{artist} </Text>
            </View>
            </CardSection>

            <CardSection>
                <Image style={imagestyle}
                       source={{uri:image}} />

            </CardSection>


        </Card>
        );
}

const styles={
    headerContentStyle:{
        justifyContent:'space-around',
        flexDirection:'column',

    },
    headerTextStyle:{
      fontSize:18
    },
    thumbnailStyle:{
        height:50,
        width:50
    },
    thumbnailContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10
    },
    imagestyle:{
        height:300,
        width:null,
        flex:1
    }


};

export default AlbumDetails;