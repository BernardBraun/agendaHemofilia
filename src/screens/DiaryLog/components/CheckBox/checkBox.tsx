import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icons from "react-native-vector-icons/Foundation"; 

const CheckBox = ({ options = [], onChange, multiple = false }) => {
    const [selected, setSelected] = useState([]);
  
    function toggle(id) {
      let arrSelecteds = [...selected];
      if (!multiple) {
        arrSelecteds = [id]; // Se a seleção múltipla não for permitida, substitua a seleção atual
      } else {
        let index = arrSelecteds.findIndex((i) => i === id);
        if (index !== -1) {
          arrSelecteds.splice(index, 1);
        } else {
          arrSelecteds.push(id);
        }
      }
      setSelected(arrSelecteds);
    }
  
    useEffect(() => onChange(selected), [selected]);
  
    return (
      <View style={styles.container}>
        {options.map((op) => (
          <View key={op.id} style={styles.optionContainer}>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => toggle(op.id)}
            >
              {selected.includes(op.id) ? (
                <Icons name="x" style={styles.marker} size={20} />
              ) : null}
            </TouchableOpacity>
            <Text style={styles.optext}>{op.label}</Text>
          </View>
        ))}
      </View>
    );
  };
  
  export default CheckBox;

const styles = StyleSheet.create({
    container:{
        marginLeft: 12,
    },
    optionContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 9.5
    },
    optext: {
        marginLeft: 6,
        fontSize: 18,
        fontWeight: "bold",
        color: "#EB0102"
    },
    touchable: {
        height: 20,
        width: 20,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#EB0102",
        borderWidth: 1
    },
    marker: {
        color: "#EB0102",
        alignItems: "center",
        justifyContent: "center",
    }
})