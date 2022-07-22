import React, { useEffect } from 'react';
import styles from './styles';
import { logout } from 'app/screens/LoginPage/store/LoginSlice';
import AsyncStorage from '@react-native-community/async-storage';
import {
  getRepositoriesListRequest,
  getRepositoriesListSuccess,
  getStandsListRequest,
  getStandsListSuccess,
} from 'app/screens/services/exportImportPPO/store/ImportExportPPOSlice';
import { useDispatch, useSelector } from 'react-redux';
import NavigationService from 'app/navigation/NavigationService';
import { BaseButton } from 'app/components/ui-components/buttons/BaseButton';
import { typographyStyles } from 'app/components/ui-components/Typography/styles';
import { Typography } from 'app/components/ui-components/Typography';
import { standsListSelector } from 'app/screens/services/exportImportPPO/Stands/store/selectors';
import { Box } from 'app/config/global-styles';

export type TProps = {
  route: {
    key: string;
    name: string;
    params: { page: string };
    path: undefined;
  };
};

const Stands: React.FC<TProps> = ({ route }) => {
  const dispatch = useDispatch();
  const standsList = useSelector(standsListSelector());
  const { page } = route.params;

  const getRepo = () =>
    dispatch(getRepositoriesListRequest({ values: 'GIT', NavigationService: NavigationService }));

  const onLogout = () => {
    AsyncStorage.setItem('@Token:key', 'null');
    dispatch(logout());
    dispatch(getRepositoriesListSuccess([]));
    // NavigationService.navigate('ForgotPassword');
  };

  useEffect(() => {
    dispatch(getStandsListRequest('INFO_SERVICE'));
    return () => {
      dispatch(getStandsListSuccess([]));
    };
  }, []);

  return (
    <Box style={styles.container}>
      <Typography
        text={`Вы попали на этот экран с экрана ${page}`}
        style={typographyStyles.black}
      />
      <Box style={{ height: 30 }} />
      <Typography text="Stands List" style={typographyStyles.black} />
      {standsList.map((e, i) => (
        <Typography key={e.name} text={`${i + 1}. ${e.name}`} style={typographyStyles.black} />
      ))}
      <Box style={{ height: 30 }} />
      <BaseButton btnText="Logout" mode="outlined" onPress={onLogout} />
      <Box style={{ height: 30 }} />
      <BaseButton btnText="Get Repositories" icon="logout" mode="outlined" onPress={getRepo} />
      <Box style={{ height: 30 }} />
      <BaseButton
        btnText="Dashboard"
        icon="logout"
        mode="outlined"
        onPress={() => NavigationService.navigate('Dashboard')}
      />
    </Box>
  );
};

export { Stands };
