import React from 'react';
import { View, StyleSheet } from 'react-native';

import BrandHeader from '../../commons/BrandHeader';
import FooterNote from '../../commons/FooterNote';
import RegisterData from './RegisterData';

export default function ResponsiveRegisterScreen() {
  return (
    <View style={styles.container}>
      <BrandHeader
        title="Cadastro de usuário"
        subtitle="Mantivemos o formulário existente, mas agora dentro de uma navegação pensada para telas maiores também."
      />
      <RegisterData />
      <FooterNote />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
