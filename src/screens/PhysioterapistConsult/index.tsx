import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native'

import PhysioterapistConsultScreen from './components/PhysioterapistConsultScreen';

export default function PhysioterapistConsult() {
    return <SafeAreaView style={styles.screen}>
        <PhysioterapistConsultScreen />
    </SafeAreaView>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})