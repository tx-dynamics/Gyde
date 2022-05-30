import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import HeaderComp from '../Componenets/HeaderComp';
import PaymentMethodComp from '../Componenets/PaymentMethodComp';

const PaymentSetup = ({navigation}) => {
  return (
    <View style={styles.MainView}>
      <View style={styles.innerView}>
        <HeaderComp TEXT={'Payment Setup'} />
        <View style={styles.CardContainer}>
          <Image
            style={{height: '90%', width: '100%', alignSelf: 'center'}}
            resizeMode="contain"
            source={require('../Icons/Card1.png')}
          />

          <Image
            style={{
              marginTop: '4%',
              height: '22%',
              width: '22%',
              left: '8%',
              position: 'absolute',
            }}
            resizeMode="contain"
            source={require('../Icons/Visa.png')}
          />

          <Image
            style={{
              marginTop: '1%',
              height: '10%',
              width: '31%',
              alignSelf: 'center',
            }}
            resizeMode="contain"
            source={require('../Icons/slider_count.png')}
          />
        </View>
        <PaymentMethodComp navigation={navigation} />
      </View>
      <Image
        style={{
          height: '4%',
          alignSelf: 'center',
          width: '70%',
        }}
        resizeMode={'contain'}
        source={require('../Icons/verification.png')}
      />
    </View>
  );
};

export default PaymentSetup;

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    paddingVertical: '3%',
    justifyContent: 'space-between',
  },
  CardContainer: {
    marginTop: '5%',
    width: '90%',
    height: '52%',

    alignSelf: 'center',
  },
  innerView: {
    width: '85%',
    height: '50%',
    alignSelf: 'center',
  },
});
