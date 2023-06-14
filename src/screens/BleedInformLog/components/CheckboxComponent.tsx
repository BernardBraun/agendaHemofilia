import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function CheckboxComponent({id, date, time, local}): React.JSX.Element {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#EB0102' : undefined}
        />
        <Text style={styles.paragraph}>{date + " - " + time + " - " + local} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 4,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#EB0102"
  },
  checkbox: {
    margin: 8,
    borderColor: "#EB0102",
    borderRadius: 6
  },
});