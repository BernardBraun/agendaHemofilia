import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import AppRoutes from './src/routes/AppRoutes';


function App() {
  return <>
    <SafeAreaView style={styles.screen}>
      <AppRoutes />
    </SafeAreaView>
  </>
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});

export default App; 