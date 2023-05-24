import React from 'react';

import { SafeAreaView, StyleSheet} from 'react-native'

import HomeScreen from './components/HomeScreen';

export default function Home() {
    return <SafeAreaView style={styles.screen}>
        <HomeScreen />
    </SafeAreaView>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})