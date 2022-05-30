import {Image, Text, View} from 'react-native';
import React from 'react';

const OtherMethodBoxComp = ({TEXT, ICON}) => {
  return (
    <View
      style={{
        borderRadius: 6,
        backgroundColor: 'white',
        elevation: 9,
        flexDirection: 'row',
        width: '100%',
        height: '18%',
        alignItems: 'center',
        paddingVertical: '4.5%',
        paddingLeft: '3%',
        paddingRight: '2%',
        justifyContent: 'space-between',
        marginTop: '2%',
        // borderWidth: 1,
      }}>
      <View
        style={{
          height: '100%',
          alignItems: 'center',
          width: '50%',
          flexDirection: 'row',
          //   borderWidth: 1,
        }}>
        <View
          style={{
            height: '100%',
            width: '26%',
            borderRadius: 26,
            backgroundColor: '#27DF52',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{height: '45%', width: '90%'}}
            resizeMode={'center'}
            source={ICON}
          />
        </View>
        <Text
          style={{
            color: 'black',
            fontSize: 15,
            fontWeight: '300',
            paddingLeft: '13%',
            paddingVertical: '1%',
          }}>
          {TEXT}
        </Text>
      </View>
      <Image
        style={{
          height: '33%',
          width: '5%',
        }}
        resizeMode={'contain'}
        source={require('../Icons/ionic-ios-arrow-forward.png')}
      />
    </View>
  );
};

export default OtherMethodBoxComp;
