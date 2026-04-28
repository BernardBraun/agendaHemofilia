import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppRoutes from './src/routes/AppRoutes';


function App() {
  return <>
    <SafeAreaProvider>
      <View style={styles.screen}>
        <AppRoutes />
      </View>
    </SafeAreaProvider>
  </>
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});

export default App; 
