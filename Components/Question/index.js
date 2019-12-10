import {ScrollView, StyleSheet, Text, View} from 'react-native';

import Footer from '../Footer';
import Owner from '../Owner';
import React from 'react';
import Tag from '../Tag';

const Question = props => {
  let tagList = props.tags.map((e, i) => (
    <Tag key={`${props.question_id}${i}`}>{e}</Tag>
  ));

  return (
    <View style={styles.sectionContainer}>
      <Owner owner={props.owner} date={props.date} />

      <Text style={styles.question}>{props.question} </Text>

      <ScrollView
        style={styles.tags}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {tagList}
      </ScrollView>

      <View style={styles.line} />

      <Footer votes={props.votes} answers={props.answers} views={props.views} />
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    borderBottomColor: '#ededed',
    borderBottomWidth: 2,
  },
  sectionContainer: {
    margin: 15,
    borderRadius: 10,
    borderWidth: 0,
    paddingHorizontal: 24,
    backgroundColor: 'white',
  },
  question: {
    fontSize: 24,
    fontWeight: '700',
    color: '#207ce4',
  },
  tags: {marginTop: 10, marginBottom: 10},
});

export default Question;
