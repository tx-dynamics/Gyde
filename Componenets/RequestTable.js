import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const RequestTable = () => {
  return (
    <View style={styles.MainView}>
      <View style={styles.HeaderStyle}>
        <Text style={{alignSelf: 'center', fontSize: 17, color: 'white'}}>
          Request
        </Text>
      </View>
      <View
        style={{
          borderBottomWidth: 0.5,
          borderLeftWidth: 1,
          borderRightWidth: 1,
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
        }}>
        <Text style={styles.textStyles}>DL#:</Text>
        <Text style={styles.textStyles}>State:</Text>
        <Text style={styles.textStyles}>Signals:</Text>
        <Text style={styles.textStyles}>Email:</Text>
        <Text style={[styles.textStyles, {borderBottomWidth: 0}]}>Date:</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainView: {
    // width: '100%',
    // height: '100%',
    // alignSelf: 'center',
    marginTop: '15%',
    marginBottom: '10%',
  },
  HeaderStyle: {
    backgroundColor: '#27DF52',
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,

    paddingVertical: '4.5%',
  },
  textStyles: {
    paddingLeft: '5%',
    color: '#858585',
    fontSize: 15,
    borderBottomWidth: 0.5,
    paddingVertical: '1.5%',
    borderColor: 'black',
  },
});

export default RequestTable;
