import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';

const Tag = props => {
  return (
    <View style={styles.tag}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tag: {
    backgroundColor: '#ec0146',
    borderRadius: 10,
    borderWidth: 0,
    height: 30,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 10,
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,

    color: 'white',
  },
});

export default Tag;
