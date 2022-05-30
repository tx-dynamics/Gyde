import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Cards from './Cards';
import OtherMethodBoxComp from './OtherMethodBoxComp';

const PaymentMethodComp = ({navigation}) => {
  return (
    <View style={{height: '100%', width: '100%'}}>
      <View style={styles.cardsContainer}>
        <View style={{width: '48%', height: '100%'}}>
          <Cards
            ICON={require('../Icons/debit-icon.png')}
            TEXT="Debit Card"
            navigation={navigation}
            ToScreen="CardSetup"
          />
        </View>
        <View style={{width: '48%', height: '100%'}}>
          <Cards
            ICON={require('../Icons/credit-icon.png')}
            TEXT="Credit Card"
            navigation={navigation}
            ToScreen="CardSetup"
          />
        </View>
      </View>

      <View style={styles.CardsDimension}>
        <Cards
          ICON={require('../Icons/account-icon.png')}
          TEXT="Bank Account"
          navigation={navigation}
          ToScreen="BankDetails"
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: '13%',
          marginBottom: '2%',
        }}>
        <Text style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}>
          OTHER PAYMENT METHODS
        </Text>
        <Text style={{color: 'black', fontSize: 12, fontWeight: '300'}}>
          View More
        </Text>
      </View>

      <OtherMethodBoxComp
        TEXT="PayPal"
        ICON={require('../Icons/awesome-paypal.png')}
      />

      <OtherMethodBoxComp
        TEXT="Venmo"
        ICON={require('../Icons/simple-venmo.png')}
      />

      <OtherMethodBoxComp
        TEXT="Cash App"
        ICON={require('../Icons/simple-cashapp.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    marginTop: '10%',
    height: '17%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '3%',
  },
  CardsDimension: {
    height: '17%',
    width: '48%',
  },
});
export default PaymentMethodComp;
