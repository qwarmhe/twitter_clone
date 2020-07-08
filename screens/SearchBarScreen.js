import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SearchBarScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Search bar screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  }
});

export default SearchBarScreen;
