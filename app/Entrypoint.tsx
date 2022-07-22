import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider as PaperProvider } from 'react-native-paper';
import Navigator from 'app/navigation';
import { store, persistor } from './store/configureStore';
import { MainStyles } from 'app/config/global-styles';
import { createLoadingSelector, createNotificationDataSelector } from 'app/store/selectors';
import { isEmpty } from 'app/utils/validation';
import { NotificationModal } from 'app/components/custom-components/modals/NotificationModal';
import { translationMessages } from 'app/config/i18n';
import { LanguageProvider } from './config/LanguageProvider';
import 'intl';
import 'intl/locale-data/jsonp/en';
import 'intl/locale-data/jsonp/ru';

const RootNavigation: React.FC = () => {
  const loadingData = useSelector(createLoadingSelector());
  const notificationData = useSelector(createNotificationDataSelector());

  return (
    <PaperProvider>
      <Navigator />
      {notificationData.isNotification && (
        <NotificationModal
          animationType="slide"
          modalHeader={notificationData.notificationTitle}
          modalText={notificationData.notificationMessage}
          successModalText="Hide Modal"
          modalVisible={notificationData.isNotification}
        />
      )}
      {!isEmpty(loadingData) && <View style={MainStyles.preloader} />}
    </PaperProvider>
  );
};

const EntryPoint: React.FC = () => (
  <Provider store={store}>
    <LanguageProvider messages={translationMessages}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <RootNavigation />
      </PersistGate>
    </LanguageProvider>
  </Provider>
);

export default EntryPoint;
