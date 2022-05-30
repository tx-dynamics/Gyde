import {StyleSheet, Text} from 'react-native';
import React from 'react';

const HeaderForCardSetup = ({STYLE, TEXT}) => {
  return (
    <Text
      style={[
        {
          fontWeight: 'bold',
          color: 'black',
          fontSize: 17,
          marginVertical: '3%',
        },
        STYLE,
      ]}>
      {TEXT}
    </Text>
  );
};

export default HeaderForCardSetup;

const styles = StyleSheet.create({});
