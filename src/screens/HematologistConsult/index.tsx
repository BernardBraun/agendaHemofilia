import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native'

import HematologistConsultScreen from './components/HematologistConsultScreen';

export default function HematologistConsult() {
    return <SafeAreaView style={styles.screen}>
        <HematologistConsultScreen />
    </SafeAreaView>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})