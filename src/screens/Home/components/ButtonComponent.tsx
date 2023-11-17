import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome5'

const ButtonComponent = ({ iconName, labelButton, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {iconName && <Icon name={iconName} size={64} color="#FFFFFF" />}
        <Text style={styles.buttonText}>{labelButton}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#EB0102",
    color: "#FFFFFF",
    width: 175,
    height: 145,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    fontWeight: 'bold',
    marginBottom: 10
  },
  buttonText: {
    paddingTop: 10,
    color: "#FFFFFF",
    fontWeight: "bold"
  }
})

export default ButtonComponent