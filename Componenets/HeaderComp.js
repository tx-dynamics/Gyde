import {StyleSheet, Image, TouchableOpacity, Text, View} from 'react-native';
import React from 'react';

const HeaderComp = ({navigation, TEXT, ICON}) => {
  return (
    <View style={styles.MainView}>
      <TouchableOpacity
      // onPress={() => navigation.navigate('logIn')}
      >
        <Image source={require('../Icons/ic_keyboard_arrow_left_24px.png')} />
      </TouchableOpacity>
      <Text
        style={{
          fontWeight: '500',
          color: 'black',
          fontSize: 20,
        }}>
        {TEXT}
      </Text>
      <Image source={ICON} />
    </View>
  );
};

const styles = StyleSheet.create({
  MainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default HeaderComp;
