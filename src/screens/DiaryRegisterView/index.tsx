import React from 'react';

import { SafeAreaView, StyleSheet} from 'react-native'

import DiaryRegisterViewScreen from './components/DiaryRegisterViewScreen';

export default function DiaryRegisterView() {
    return <SafeAreaView style={styles.screen}>
        <DiaryRegisterViewScreen />
    </SafeAreaView>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})