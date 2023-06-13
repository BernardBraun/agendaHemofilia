import React from 'react';

import { SafeAreaView, StyleSheet} from 'react-native'

import DiaryLogScreen from './components/DiaryLogScreen';
import registers from '../../mocks/regiters';

export default function DiaryLog() {
    return <SafeAreaView style={styles.screen}>
        <DiaryLogScreen {... registers}/>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})