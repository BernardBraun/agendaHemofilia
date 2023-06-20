import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native'

import DentistConsultScreen from './components/DentistConsultScreen';

export default function DentistConsult() {
    return <SafeAreaView style={styles.screen}>
        <DentistConsultScreen />
    </SafeAreaView>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})