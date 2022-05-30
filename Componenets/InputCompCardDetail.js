import {StyleSheet, Image, TextInput, View} from 'react-native';
import React from 'react';

const InputCompCardDetail = ({STYLE, MAX, ICON, INPTYPE, PLACEHOLDER}) => {
  return (
    <View style={styles.MainView}>
      <Image style={styles.ImageView} resizeMode={'contain'} source={ICON} />
      <TextInput
        style={[styles.InputContainerStyle, STYLE]}
        placeholder={PLACEHOLDER}
        placeholderTextColor={'grey'}
        autoCapitalize={'none'}
        textContentType={'creditCardNumber'}
        // keyboardType={'number-pad'}
        maxLength={MAX}
        autoCorrect={false}
        // autoFocus={false}
      />
    </View>
  );
};

export default InputCompCardDetail;

const styles = StyleSheet.create({
  MainView: {
    width: '100%',
    height: '100%',
  },
  InputContainerStyle: {
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#707070',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    padding: 18,
    color: 'black',
  },
  ImageView: {
    position: 'absolute',
    right: 20,
    zIndex: 1,
    top: 13,
  },
});
