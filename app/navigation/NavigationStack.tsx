import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './NavigationService';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { isAuthenticatedSelector } from 'app/screens/LoginPage/store/selectors';
import { LoginPage } from 'app/screens/LoginPage';
import { Dashboard } from 'app/screens/Dashboard';
import { ForgotPassword } from 'app/screens/ForgotPassword';
import { ExportImportPPONavigator } from 'app/screens/services/exportImportPPO/routes';

const Stack = createStackNavigator();

const loginOptions: any = {
  headerShown: false,
  title: 'homeOptionsDash',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  // headerRight: () => <ThemeController />,
};
const homeOptionsDash: any = {
  // headerShown: false,
  title: 'homeOptionsDash',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  // headerRight: () => <ThemeController />,
};

const homeOptions: any = {
  title: 'homeOptions',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  // headerRight: () => <ThemeController />,
};

const AuthNavigator = () => {
  const isLoggedIn = useSelector(isAuthenticatedSelector());

  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginPage" component={LoginPage} options={loginOptions} />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          // headerRight: () => <ThemeController />,
        }}
      />
    </Stack.Navigator>
  );
};

const LoggedInNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Dashboard" component={Dashboard} options={homeOptionsDash} />
    {ExportImportPPONavigator()}
  </Stack.Navigator>
);

const App: React.FC = () => {
  const isLoggedIn = useSelector(isAuthenticatedSelector());

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <Stack.Screen
            name="LoggedInNavigator"
            component={LoggedInNavigator}
            options={homeOptions}
          />
        ) : (
          <Stack.Screen
            name="AuthNavigator"
            component={AuthNavigator}
            options={{
              // When logging out, a pop animation feels intuitive
              // You can remove this if you want the default 'push' animation
              animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
              // headerRight: () => <ThemeController />,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
