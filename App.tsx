import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {FacebookWidget} from "./src/components/FacebookWidget";

export default function App() {
  return (
    <View style={styles.container}>
        <FacebookWidget></FacebookWidget>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e1e1',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
