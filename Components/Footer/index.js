import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

import React from 'react';

const Footer = props => {
  return (
    <View style={styles.footer}>
      <View style={styles.votes}>
        <Text style={styles.footerNumbers}>{props.votes}</Text>
        <Text style={styles.footerText}>votes</Text>
      </View>
      <View style={styles.answers}>
        <Text style={styles.footerMainNumbers}>{props.answers}</Text>
        <Text style={styles.footerMainText}>answers</Text>
      </View>
      <View style={styles.views}>
        <Text style={styles.footerNumbers}>{props.views}</Text>
        <Text style={styles.footerText}>views</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerMainNumbers: {
    fontSize: 20,
    fontWeight: '700',
    color: '#f5f7ea',
  },
  footerMainText: {
    marginLeft: 5,
    fontSize: 15,
    color: '#f5f7ea',
  },
  footerNumbers: {
    fontSize: 20,
    fontWeight: '700',
  },
  footerText: {
    fontSize: 15,
    marginLeft: 5,
    color: '#a3a3a3',
  },
  answers: {
    backgroundColor: '#53af6d',
    flexDirection: 'row',

    borderRadius: 10,
    borderWidth: 0,

    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  votes: {flexDirection: 'row', flexGrow: 1, alignItems: 'center'},
  views: {
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  footer: {
    marginTop: 10,
    marginBottom: 10,
    height: 40,
    flexDirection: 'row',
  },
});

export default Footer;
