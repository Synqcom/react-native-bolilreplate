import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';
import { logout } from 'app/screens/LoginPage/store/LoginSlice';
import { getRepositoriesListSuccess } from 'app/screens/services/exportImportPPO/store/ImportExportPPOSlice';
import { useDispatch, useSelector } from 'react-redux';
import NavigationService from 'app/navigation/NavigationService';
import { BaseButton } from 'app/components/ui-components/buttons/BaseButton';
import { typographyStyles } from 'app/components/ui-components/Typography/styles';
import { Typography } from 'app/components/ui-components/Typography';
import { repositoriesListSelector } from 'app/screens/services/exportImportPPO/Repositories/store/selectors';
import { Box } from 'app/config/global-styles';

const Repositories: React.FC = () => {
  const dispatch = useDispatch();
  const repositoriesList = useSelector(repositoriesListSelector());

  const onLogout = () => {
    AsyncStorage.setItem('@Token:key', 'null');
    dispatch(logout());
    dispatch(getRepositoriesListSuccess([]));
    // NavigationService.navigate('ForgotPassword');
  };

  return (
    <Box style={styles.container}>
      <Typography text="Repositories" style={typographyStyles.black} />
      <Box style={{ height: 30 }} />
      {repositoriesList.map((e, i) => (
        <Typography key={e.name} text={`${i + 1}. ${e.name}`} style={typographyStyles.black} />
      ))}
      <Box style={{ height: 30 }} />
      <BaseButton btnText="Logout" mode="outlined" onPress={onLogout} />
      <Box style={{ height: 30 }} />
      <BaseButton
        btnText="To Stands"
        icon="logout"
        mode="outlined"
        onPress={() => NavigationService.navigate('Stands', { page: 'Repositories' })}
      />
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

export { Repositories };
