import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';
import {
  getRepositoriesListRequest,
  getRepositoriesListSuccess,
} from 'app/screens/services/exportImportPPO/store/ImportExportPPOSlice';
import { useDispatch } from 'react-redux';
import NavigationService from 'app/navigation/NavigationService';
import { BaseButton } from 'app/components/ui-components/buttons/BaseButton';
import { Typography } from 'app/components/ui-components/Typography';
import { typographyStyles } from 'app/components/ui-components/Typography/styles';
import { logout } from 'app/screens/LoginPage/store/LoginSlice';
import { Box } from 'app/config/global-styles';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();

  const getRepo = () =>
    dispatch(getRepositoriesListRequest({ values: 'GIT', NavigationService: NavigationService }));
  const onLogout = () => {
    AsyncStorage.setItem('@Token:key', 'null');
    dispatch(logout());
    dispatch(getRepositoriesListSuccess([]));
  };

  return (
    <Box style={styles.container}>
      <Typography text="Dashboard Page" style={typographyStyles.black} />
      <Box style={{ height: 30 }} />
      <BaseButton btnText="Get Repositories" icon="logout" mode="outlined" onPress={getRepo} />
      <Box style={{ height: 30 }} />
      <BaseButton
        btnText="Get Stands"
        icon="logout"
        mode="outlined"
        onPress={() => NavigationService.navigate('Stands', { page: 'Dashboard' })}
      />
      <Box style={{ height: 30 }} />
      <BaseButton btnText="Logout" mode="outlined" onPress={onLogout} />
    </Box>
  );
};

export { Dashboard };
