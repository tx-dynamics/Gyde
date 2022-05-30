import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const LogInWithComponent = ({ICON}) => {
  return (
    <TouchableOpacity style={styles.MainView}>
      <Image style={{margin: 13}} resizeMode={'contain'} source={ICON}></Image>
    </TouchableOpacity>
  );
};

export default LogInWithComponent;

const styles = StyleSheet.create({
  MainView: {
    height: '100%',
    width: '100%',
    borderWidth: 1,
    borderColor: '#707070',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    // marginHorizontal: 10,
  },
});
