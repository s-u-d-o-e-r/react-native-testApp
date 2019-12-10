import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Question from './Components/Question';
import fetchPosts from './redux/actions';

const App = () => {
  const page = useSelector(state => state.page);
  const dispatch = useDispatch();
  const tag = useSelector(state => state.tag);
  const isFetching = useSelector(state => state.isFetching);
  const questions = useSelector(state => state.items);
  const [value, onChangeText] = React.useState(tag);

  useEffect(() => {
    dispatch(fetchPosts(1));
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.textContainer}
        onChangeText={text => onChangeText(text)}
        onEndEditing={() => dispatch(fetchPosts(page, value))}
        value={value}
        placeholder="Search tag"
      />
      <FlatList
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          dispatch(fetchPosts(page));
        }}
        ListHeaderComponent={() =>
          !questions.length && !isFetching ? (
            <Text style={styles.emptyError}>Hmm, seems empty</Text>
          ) : null
        }
        data={questions}
        style={styles.scrollView}
        renderItem={({item}) => (
          <Question
            tags={item.tags}
            question={item.title}
            owner={item.owner}
            date={item.creation_date}
            question_id={item.question_id}
            votes={item.score}
            answers={item.answer_count}
            views={item.view_count}
          />
        )}
        keyExtractor={item => item.question_id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  emptyError: {
    fontSize: 24,
    fontWeight: '700',
    flex: 1,
    margin: 15,
    borderRadius: 10,
    borderWidth: 0,
    textAlign: 'center',
    paddingHorizontal: 24,
    backgroundColor: 'white',
  },
  textContainer: {
    margin: 15,
    borderRadius: 10,
    borderWidth: 0,
    paddingHorizontal: 24,
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: '#261f40',
    flex: 1,
  },
  body: {},
  sectionContainer: {
    margin: 10,
    borderRadius: 10,
    borderWidth: 0,
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  tags: {marginTop: 10, marginBottom: 10},
});

export default App;
