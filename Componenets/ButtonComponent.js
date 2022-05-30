import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const ButtonComponent = ({STYLE, TEXT, navigation, ToScreen}) => {
  return (
    <TouchableOpacity
      style={[styles.Btn, STYLE]}
      onPress={() => {
        navigation.navigate(ToScreen);
      }}>
      <Text style={{color: '#FFFFFF', fontSize: 20}}>{TEXT}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
const styles = StyleSheet.create({
  Btn: {
    height: '100%',
    width: '100%',
    // '#1DBF73'
    backgroundColor: '#27DF52',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
