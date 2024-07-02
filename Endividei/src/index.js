import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 36, textAlign: 'center', margin: 10, color: '#00F' }}>Teste app!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff0',
    flex: 1,  
  },
});

export default App;
