import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import SwitchToggle from 'react-native-switch-toggle';

const SwitchComponent = () => {
  const [switchOn, setSwitchOn] = useState(false);

  const onToggleSwitch = () => {
    setSwitchOn(!switchOn);
  };

  return (
    <View style={styles.container}>
      <SwitchToggle
        containerStyle={styles.switchContainer}
        circleStyle={styles.switchCircle}
        switchOn={switchOn}
        onPress={onToggleSwitch}
        backgroundColorOn="#eb0102"
        backgroundColorOff="#e9dada"
        circleColorOff="#eb0102"
        circleColorOn="#ffffff"
        duration={300}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  switchContainer: {
    width: 100,
    height: 50,
    borderRadius: 25,
    padding: 5,
  },
  switchCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default SwitchComponent;