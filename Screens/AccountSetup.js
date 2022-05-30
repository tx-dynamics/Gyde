import {StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';
import AccountRectComponent from '../Componenets/AccountRectComponent';
import ButtonComponent from '../Componenets/ButtonComponent';

const AccountSetup = ({navigation}) => {
  return (
    <View style={styles.MainScreenStyle}>
      <Image
        // style={{position: 'absolute', top: -10, left: -9, zIndex: 0}}
        style={{
          position: 'absolute',
          width: '116%',
          alignSelf: 'center',
          height: 250,
        }}
        resizeMode={'cover'}
        source={require('../Icons/Rectangle-89.png')}
      />
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 30,
          marginTop: '11%',
          color: '#FFFF',
        }}>
        Account Setup
      </Text>

      <Text
        style={{
          alignSelf: 'center',
          fontSize: 18,
          marginTop: '5%',
          color: '#FFFF',
          fontWeight: 'bold',
        }}>
        Setting Up
      </Text>

      <Text
        style={{
          alignSelf: 'center',
          fontSize: 18,
          marginTop: '1%',
          color: '#FFFF',
          fontWeight: '400',
        }}>
        Account is Easy!
      </Text>

      <View style={styles.DimensionView}>
        <View style={styles.RectangularCompView}>
          <AccountRectComponent
            TEXT="Subject(s) or Skill(s)"
            ICON={require('../Icons/Group30.png')}
          />
        </View>
        <View style={styles.RectangularCompView}>
          <AccountRectComponent TEXT="Login details" />
        </View>
        <Text style={styles.TextHeader}>Before taking classes</Text>
        <View style={styles.RectangularCompView}>
          <AccountRectComponent TEXT="Required Details" />
        </View>
        <View style={styles.RectangularCompView}>
          <AccountRectComponent
            TEXT="Background check)"
            ICON={require('../Icons/Icon-metro-question.png')}
          />
        </View>
        <View style={styles.RectangularCompView}>
          <AccountRectComponent
            TEXT="Skill verification"
            ICON={require('../Icons/Icon-metro-question.png')}
          />
        </View>
        <View style={styles.BtnDimensions}>
          <ButtonComponent
            TEXT="Continue"
            STYLE={{marginVertical: 30}}
            navigation={navigation}
            ToScreen="PersonalInfo"
          />
        </View>
      </View>
    </View>
  );
};

export default AccountSetup;

const styles = StyleSheet.create({
  MainScreenStyle: {
    backgroundColor: '#F8F8F8',

    // width: '100%',
    // height: '100%',
    flex: 1,
  },

  BtnDimensions: {
    width: '70%',
    alignSelf: 'center',
    height: '6.5%',
  },

  DimensionView: {
    height: '100%',
    width: '90%',
    alignSelf: 'center',
    marginTop: '26%',
  },
  RectangularCompView: {
    height: '6.5%',
    marginVertical: '2%',
  },

  TextHeader: {
    color: '#1DBF73',
    fontSize: 30,
    marginBottom: 26,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: '5%',
  },
});
