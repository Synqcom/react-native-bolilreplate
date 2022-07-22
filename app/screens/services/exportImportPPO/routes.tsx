import React from 'react';
import { Repositories } from 'app/screens/services/exportImportPPO/Repositories';
import { Stands } from 'app/screens/services/exportImportPPO/Stands';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native-paper';

const Stack = createStackNavigator();

const homeOptionsRepo: any = {
  title: 'homeOptionsRepo',
  goBack: 'false',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  // headerLeft: () => <Text>headerLeft</Text>,
  headerRight: () => <Text>headerRight</Text>,
};

const homeOptionsStands: any = {
  title: 'homeOptionsStands',
  goBack: 'false',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  // headerLeft: () => <Text>headerLeft</Text>,
  headerRight: () => <Text>headerRight</Text>,
};

export const ExportImportPPONavigator = () => (
  <>
    <Stack.Screen name="Repositories" component={Repositories} options={homeOptionsRepo} />
    <Stack.Screen name="Stands" component={Stands} options={homeOptionsStands} />
  </>
);
