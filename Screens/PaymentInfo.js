import {StyleSheet, Text, SafeAreaView, Image, View} from 'react-native';
import React from 'react';
import HeaderComp from '../Componenets/HeaderComp';
import Cards from '../Componenets/Cards';
import OtherMethodBoxComp from '../Componenets/OtherMethodBoxComp';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import PaymentMethodComp from '../Componenets/PaymentMethodComp';

const PaymentInfo = ({navigation}) => {
  return (
    <SafeAreaView style={styles.MainView}>
      <View style={styles.innerView}>
        <HeaderComp TEXT="Payment Info" />
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
    </SafeAreaView>
  );
};

export default PaymentInfo;

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    paddingVertical: '3%',
    justifyContent: 'space-between',
  },
  innerView: {
    width: '85%',
    height: '50%',
    alignSelf: 'center',
  },
});
