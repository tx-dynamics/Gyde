import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const InputHeader = ({TEXT}) => {
  return (
    <Text
      style={{
        fontWeight: 'bold',
        color: 'black',
        fontSize: 17,
        marginVertical: 8,
      }}>
      {TEXT}
      <Text style={{color: 'red'}}> *</Text>
    </Text>
  );
};

export default InputHeader;
