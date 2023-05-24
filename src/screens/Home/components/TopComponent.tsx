import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

import logo from '../../../assets/LogoDiario.png';
import { loadTop } from '../../../services/loadData';

class TopComponent extends React.Component {
    state = {
        top: {
            welcome: "",
            message: "",
        }
    }
    
    updateTop() {
        const returning = loadTop();
        this.setState({top: returning})
    }
    
    componentDidMount(): void {
        this.updateTop();
    }

    render() {
        return <View>
            <Image source={logo} style={styles.image}/>
            <Text></Text>
        </View>
    }
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 180,
    },
})

export default TopComponent;