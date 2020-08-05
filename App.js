import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/header';

const App = () =>  {
  return (
    <View style={styles.screen}>
      <Header title="Guess a number"/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default App;