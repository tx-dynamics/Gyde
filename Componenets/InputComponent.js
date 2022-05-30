import {StyleSheet, Image, TextInput, Text, View} from 'react-native';
import React from 'react';

const InputComponent = ({PLACEHOLDER, ICON, AUTOFOCUS, MAX, STYLE}) => {
  return (
    <View style={styles.MainView}>
      <Image style={styles.ImageView} resizeMode={'contain'} source={ICON} />
      <TextInput
        style={[styles.InputContainerStyle, STYLE]}
        placeholder={PLACEHOLDER}
        placeholderTextColor={'grey'}
        autoCapitalize={'none'}
        autoCorrect={false}
        maxLength={MAX}
        autoFocus={AUTOFOCUS}
      />
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  MainView: {
    width: '100%',
    // height: '50%',
  },
  InputContainerStyle: {
    borderRadius: 8,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    shadowColor: 'grey',
    elevation: 9,
    padding: '1%',
    paddingHorizontal: '6%',
    color: 'black',
  },

  // borderRadius: 8,
  // width: '100%',
  // height: '100%',
  // backgroundColor: 'white',
  // shadowColor: 'grey',
  // elevation: 9,
  // padding: '1%',
  // paddingHorizontal: '6%',
  // color: 'black',
  ImageView: {
    position: 'absolute',
    right: '9%',
    zIndex: 1,
    top: '45%',
  },
});
