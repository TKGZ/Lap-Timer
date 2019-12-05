import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TimeBox from './components/TimeBox';
import { useKeepAwake } from 'expo-keep-awake';



export default function App() {
  useKeepAwake();

  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <TimeBox></TimeBox>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
