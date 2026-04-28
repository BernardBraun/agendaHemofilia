import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { URL_AUTH } from '../../../helper/baseUrl';
import { colors, spacing } from '../../../helper/uiTokens';
import BrandHeader from '../../commons/BrandHeader';
import FooterNote from '../../commons/FooterNote';
import Panel from '../../commons/Panel';
import PrimaryButton from '../../commons/PrimaryButton';

export default function ResponsiveLoginScreen() {
  const navigation = useNavigation<any>();
  const [formData, setFormData] = useState({
    login: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  function updateField(fieldName: 'login' | 'password', value: string) {
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  }

  async function loginApp() {
    const response = await fetch(URL_AUTH, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`Erro na autenticação: ${response.status}`);
    }

    const data = await response.json();
    await AsyncStorage.setItem('token', data.token);
    await AsyncStorage.setItem('dataAccess', new Date().toString());
    await AsyncStorage.setItem('userEmail', formData.login);
  }

  async function handleSubmit() {
    setIsLoading(true);

    try {
      await loginApp();
      Alert.alert(
        'Informação',
        'Sua sessão tem validade de 10 minutos. Após esse tempo, ela será encerrada automaticamente.'
      );
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Erro no login', 'Verifique suas credenciais.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <BrandHeader
        title="Agenda Hemofilia"
        subtitle="Uma experiência mais clara e responsiva para entrar pelo celular ou desktop."
        align="center"
      />

      <Panel style={styles.panel}>
        <Text style={styles.label}>Login</Text>
        <TextInput
          inputMode="email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={formData.login}
          onChangeText={(value) => updateField('login', value)}
          style={styles.input}
          placeholder="seuemail@exemplo.com"
          placeholderTextColor={colors.textMuted}
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          secureTextEntry={true}
          value={formData.password}
          onChangeText={(value) => updateField('password', value)}
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor={colors.textMuted}
        />

        <View style={styles.actions}>
          <PrimaryButton
            label="Limpar"
            tone="secondary"
            onPress={() => setFormData({ login: '', password: '' })}
          />
          <PrimaryButton
            label={isLoading ? 'Entrando...' : 'Entrar'}
            onPress={handleSubmit}
          />
        </View>

        <View style={styles.separator} />

        <Text style={styles.supportText}>Ainda não tem seu acesso?</Text>
        <PrimaryButton
          label="Criar conta"
          tone="secondary"
          onPress={() => navigation.navigate('Register')}
        />
      </Panel>

      <FooterNote />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  panel: {
    width: '100%',
    maxWidth: 560,
    alignSelf: 'center',
  },
  label: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: spacing.xs,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    paddingHorizontal: spacing.md,
    paddingVertical: 14,
    marginBottom: spacing.md,
    backgroundColor: colors.surfaceMuted,
    color: colors.text,
  },
  actions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginTop: spacing.xs,
  },
  separator: {
    borderBottomColor: colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: spacing.lg,
  },
  supportText: {
    color: colors.textMuted,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: spacing.md,
  },
});
