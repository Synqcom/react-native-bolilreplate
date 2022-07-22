import { AnyAction, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import LoginSlice from 'app/screens/LoginPage/store/LoginSlice';
import rootSaga from 'app/store/rootSaga';
import ExportImportPPOSlice from 'app/screens/services/exportImportPPO/store/ImportExportPPOSlice';
import { createSlice } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['exportImportPPO', 'isNotification'], //not saved in redux if reload app
  // debug: true, //to get useful logging
};

//loader screen
const INITIAL_LOADING_STATE = {};
const loadingReducerCustom = (state = INITIAL_LOADING_STATE, action: AnyAction) => {
  const { type } = action;

  const matches = /(.*)(Request|Success|Notification)/.exec(type);

  if (!matches) {
    return state;
  }

  if (type.includes('Success') || type.includes('Notification')) {
    return {};
  }
  return { type };
};

//error notify
const initialStateNotification = {
  isNotification: false,
  notificationTitle: '',
  notificationMessage: '',
  notificationStatus: '',
};
export const NotificationSlice = createSlice({
  name: 'notification',
  initialState: initialStateNotification,
  reducers: {
    setNotification: (state, action: any) => {
      state.isNotification = true;
      state.notificationTitle = action.payload.notificationTitle;
      state.notificationMessage = action.payload.notificationMessage;
      state.notificationStatus = action.payload.notificationStatus;
    },

    clearNotification: () => initialStateNotification,
  },
});
export const { setNotification, clearNotification } = NotificationSlice.actions;

//localize
const initialLocalize = {
  language: 'ru',
};
export const LocalizeSlice = createSlice({
  name: 'localize',
  initialState: initialLocalize,
  reducers: {
    setLocalize: (state, action: any) => {
      state.language = action.payload.language;
    },
  },
});
export const { setLocalize } = LocalizeSlice.actions;

//redux
const rootReducer = combineReducers({
  loadingStore: loadingReducerCustom,
  notificationsStore: NotificationSlice.reducer,
  authData: LoginSlice.reducer,
  exportImportPPO: ExportImportPPOSlice.reducer,
  localize: LocalizeSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: false,
    }).concat(sagaMiddleware),
});
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { persistor, store };
