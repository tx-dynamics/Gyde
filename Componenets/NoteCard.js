import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const NoteCard = () => {
  return (
    <View style={styles.mainView}>
      <Text style={{color: '#858585', fontSize: 15, fontWeight: '300'}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting Lorem
        Ipsum is simply dummy text of the printing and typesetting
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    elevation: 9,
    padding: '3%',
    paddingBottom: '10%',
    borderRadius: 10,
  },
});

export default NoteCard;
