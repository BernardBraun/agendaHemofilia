import React from 'react';

import { SafeAreaView, StyleSheet} from 'react-native'

import HomeScreen from './components/HomeScreen';
import useTokenValidation from '../../helper/tokenValidation';

export default function Home() {

    useTokenValidation();

    return <SafeAreaView style={styles.screen}>
        <HomeScreen />
    </SafeAreaView>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})