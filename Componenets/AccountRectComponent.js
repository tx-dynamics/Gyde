import {StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';

const AccountRectComponent = ({TEXT, ICON}) => {
  return (
    <View style={styles.MainView}>
      <Image
        style={{height: '100%', width: '100%'}}
        resizeMode={'contain'}
        source={require('../Icons/Group19.png')}
      />

      <Text style={styles.TextStyle}>{TEXT}</Text>
      <Image style={styles.RightIcon} source={ICON} />
    </View>
  );
};

export default AccountRectComponent;

const styles = StyleSheet.create({
  MainView: {
    height: '100%',
    // width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    // marginBottom: 20,
  },

  TextStyle: {
    position: 'absolute',
    fontSize: 20,
    color: 'black',
    zIndex: 1,
    top: 10,
    left: 28,
    fontWeight: '300',
  },

  RightIcon: {
    position: 'absolute',
    top: 12,
    right: 8,
  },
});
