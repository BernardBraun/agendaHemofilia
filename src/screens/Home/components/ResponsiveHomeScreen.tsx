import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { URL_HOMESCREEN } from '../../../helper/baseUrl';
import { checkTokenValidity } from '../../../helper/tokenValidator';
import { colors, spacing } from '../../../helper/uiTokens';
import ActionTile from '../../commons/ActionTile';
import BrandHeader from '../../commons/BrandHeader';
import FooterNote from '../../commons/FooterNote';
import Panel from '../../commons/Panel';

export default function ResponsiveHomeScreen() {
  const navigation = useNavigation<any>();
  const [userName, setUserName] = useState('');
  const [lastInfusionDate, setLastInfusionDate] = useState('');

  useEffect(() => {
    async function loadHeaderData() {
      try {
        const userEmail = await AsyncStorage.getItem('userEmail');
        const token = await AsyncStorage.getItem('token');

        if (!userEmail || !token) {
          return;
        }

        const response = await fetch(`${URL_HOMESCREEN}/${userEmail}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Erro ao carregar resumo inicial: ${response.status}`);
        }

        const data = await response.json();
        setUserName(data.userName ?? '');
        setLastInfusionDate(data.lastInfusionDate ?? '');
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível carregar os dados da página inicial.');
      }
    }

    loadHeaderData();
  }, []);

  async function navigateWithSession(routeName: string) {
    navigation.navigate(routeName);
    const isValid = (await checkTokenValidity()).valid;

    if (!isValid) {
      navigation.navigate('Login');
    }
  }

  const summary = lastInfusionDate
    ? `Sua última infusão foi no dia ${lastInfusionDate}.`
    : 'Você ainda não tem infusões registradas.';

  return (
    <View style={styles.container}>
      <BrandHeader
        title={`Bem-vindo${userName ? `, ${userName}` : ''}`}
        subtitle="A navegação agora foi preparada para funcionar melhor em celular, tablet e desktop."
      />

      <Panel style={styles.banner}>
        <Text style={styles.bannerTitle}>Resumo rápido</Text>
        <Text style={styles.bannerText}>{summary}</Text>
      </Panel>

      <View style={styles.grid}>
        <ActionTile
          iconName="search"
          label="Localize seu hemocentro"
          onPress={() => Alert.alert('Aviso', 'Funcionalidade em desenvolvimento')}
        />
        <ActionTile
          iconName="syringe"
          label="Meu diário"
          onPress={() => navigateWithSession('DiaryUpdate')}
        />
        <ActionTile
          iconName="book"
          label="Registro de hemartrose"
          onPress={() => navigateWithSession('BleedInform')}
        />
        <ActionTile
          iconName="cloud-upload-alt"
          label="Atualize seus dados"
          onPress={() => navigateWithSession('UpdateRegister')}
        />
      </View>

      <FooterNote />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  banner: {
    marginBottom: spacing.lg,
    backgroundColor: colors.surfaceMuted,
  },
  bannerTitle: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '800',
    marginBottom: spacing.xs,
  },
  bannerText: {
    color: colors.primaryDark,
    fontSize: 17,
    lineHeight: 26,
    fontWeight: '600',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
  },
});
