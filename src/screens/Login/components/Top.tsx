import React from "react";

import logo from "../../../assets/LogoDiario.png"
import { loadTop } from "../../../services/loadData";
import { Image, StyleSheet, View } from "react-native";

class Top extends React.Component {
    state= {
        top: {
            welcome:"",
            hematologist: "",
            message: "",
            days: "",
            date: ""
        }
    }

    updateTop() {
        const returning = loadTop();
        this.setState({top: returning})
    }

    componentDidMount(): void {
        this.updateTop();
    }

    render(){
        return <View style={styles.view}>
            <Image style={styles.image} source={logo}/>
        </View>
    }
}

const styles = StyleSheet.create ({
    view: {
        paddingTop: 20,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: 240,
        height: 320,
    }
})

export default Top;