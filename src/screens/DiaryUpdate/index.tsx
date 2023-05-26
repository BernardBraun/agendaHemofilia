import React from 'react';

import { SafeAreaView, StyleSheet} from 'react-native'

import DiaryUpdateScreen from './components/DiaryUpdateScreen';

export default function Home() {
    return <SafeAreaView style={styles.screen}>
        <DiaryUpdateScreen />
    </SafeAreaView>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})