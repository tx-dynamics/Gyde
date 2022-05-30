import {Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Cards = ({TEXT, ICON, navigation, ToScreen}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(ToScreen);
      }}
      style={{
        borderRadius: 6,
        backgroundColor: 'white',
        elevation: 9,
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        marginTop: '2%',
        alignItems: 'center',
        // paddingVertical: '5%',
        // justifyContent: 'center',
      }}>
      <Image style={{marginLeft: '8%'}} source={ICON} />
      <Text style={{color: 'black', paddingLeft: '5%'}}>{TEXT}</Text>
    </TouchableOpacity>
  );
};

export default Cards;
