import {Image, StyleSheet, Text, View} from 'react-native';

import React from 'react';

const Owner = props => {
  return (
    <View style={styles.userContainer}>
      <Image style={styles.image} source={{uri: props.owner.profile_image}} />
      <View>
        <View style={styles.userHeader}>
          <Text style={styles.sectionTitle}>{props.owner.display_name}</Text>
          <Text style={styles.reputation}>{props.owner.reputation}</Text>
        </View>

        <Text style={styles.date}>
          {new Date(props.date * 1000).toDateString()}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  reputation: {
    margin: 8,
    fontSize: 15,
    color: '#c0c0c0',
  },
  userHeader: {flexDirection: 'row'},
  date: {
    fontSize: 15,
    color: '#c0c0c0',
  },
  userContainer: {
    marginTop: 15,
    marginBottom: 10,
    flexDirection: 'row',
  },

  image: {
    marginRight: 10,
    borderRadius: 50,
    borderWidth: 0.1,
    borderColor: 'black',
    width: 60,
    height: 60,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
  },
});

export default Owner;
