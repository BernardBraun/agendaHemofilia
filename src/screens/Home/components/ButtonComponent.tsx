import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ButtonComponent = ({ labelButton, onpress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onpress}>
        <Text>{labelButton}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#EB0102",
    color: "#FFFFFF",
    width: 350,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    fontWeight: 'bold',
    marginBottom: 10
  }
})

export default ButtonComponent