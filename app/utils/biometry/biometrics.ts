import ReactNativeBiometrics from 'react-native-biometrics';
// import AndroidOpenSettings from 'react-native-android-open-settings';

// import { device } from 'src/core/constants';
// import { Biometry } from 'src/redux/app/types';
// import { ErrorCode } from 'src/services/ErrorService/types';
// import base64 from 'react-native-base64';

const rnBiometrics = new ReactNativeBiometrics();

type Options = {
  promptMessage: string;
  cancelButtonText: string;
  payload: string;
  code: string;
};

type BiometryReturn = {
  successPrompt: boolean;
  errorPrompt?: string;
  signature?: string;
};

// const getErrorCode = (error: any) =>
//   device.isIos ? error.message.code : JSON.parse(error.message).code;
//
// export const openBiometrySettings = () => {
//   device.isIos
//     ? Linking.openURL('App-prefs:TOUCHID_PASSCODE')
//     : AndroidOpenSettings.securitySettings();
// };

//исследовать вызов сканера по тапу на вирт экране с клавиатурой
// src/sharedComponent/Pincode/index.tsx

//Создает открытую закрытую пару ключей RSA 2048, которая будет храниться в хранилище ключей устройства.
// Возвращает объект Promise, который разрешается в объект, предоставляющий сведения о ключах.
// и отправляет это все на бэк для updateSecureSettings
// export const createBiometryKeys = (): Promise<string> =>
//   new Promise(async (resolve) => {
//     console.log('resolvecreateBiometryKeys', resolve);
//     const responce = await ReactNativeBiometrics.createKeys();
//     console.log('responcecreateBiometryKeys', responce);
//     //responcecreateBiometryKeys {"publicKey": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApqKc2aLSaz2xEPYV5ZI7Mb0TL8a+J0T2ERGJLdRjv0eSbECPPQN1f/oWQUlsIh02xUmoRoAH1bmcw4/VYJTksH4mewjX8odwhxtaYIET2NqxNoNUJXN6LFIfQbw133SRLl2HKgpN0I+yE5qWSGJaI4yIzPMqdWms52l3/Nqme94EsJOxEkkx5ts0eU4b0yrkiII6dJndkG+MZR53qb0MuyC0/LDrMyM1V+rMn4jB12H9XebJiKEANJBBlMqgqVRYGINiFUfM1qW5Ed8rKAtY4oHx7XsxKuJ4MAWmnshYgvvptKvPNHCfRGTqXHMrbyBi2Vytr/FxSfuaGliFnb+AGwIDAQAB"}
//     const { publicKey } = await ReactNativeBiometrics.createKeys();
//     resolve(publicKey);
//   });

//например нет отсканированных отпечактков пальцев
// const getBiometryInfo = (errorCode: string) => {
//   console.log('errorCode1213', errorCode);
//
//   switch (errorCode) {
//     case ErrorCode.BiometryError_NoHardware:
//     case ErrorCode.BiometryError_HwUnavailable:
//     case ErrorCode.BiometryError_PsCodeNotSet:
//       return {
//         available: false,
//         biometryType: '',
//         enrolled: false,
//       };
//
//     //например нет отсканированных отпечактков пальцев
//     case ErrorCode.BiometryError_NotEnrolled:
//       return {
//         available: true,
//         biometryType: 'TouchID', //TODO: есть ли возможность добавить сюда тип биометрии ?
//         enrolled: false,
//       };
//     case ErrorCode.BiometryError_Lockout:
//     case ErrorCode.BiometryError_LockoutPermanent:
//       return {
//         available: true,
//         biometryType: 'TouchID', //TODO: есть ли возможность добавить сюда тип биометрии ?
//         enrolled: true,
//       };
//
//     default:
//       return {
//         available: false,
//         biometryType: '',
//         enrolled: false,
//       };
//   }
// };

type Biometry = {
  available: boolean;
  biometryType: string | undefined;
};

//есть ли у пользователя биометрия, если нет, то ошибка на первом логине например
export const biometryAvailable = (): Promise<Biometry> =>
  new Promise((resolve) => {
    //есть ли у пользователя биометрия, если нет, то ошибка
    // Определяет, какой тип биометрического датчика доступен.
    // Возвращает объект Promise, который разрешает объект со сведениями о доступности биометрических данных.
    rnBiometrics
      .isSensorAvailable()
      .then((biometry) => {
        console.log('biometry555', biometry);
        // при наличии отпечатка
        // available: true
        // biometryType: "Biometrics"

        // при отсутствии
        // available: false
        // error: "BIOMETRIC_ERROR_NONE_ENROLLED"
        resolve({
          available: biometry.available,
          biometryType: biometry.biometryType,
        });
      })
      .catch(() => {
        // console.log('errorbiometryAvailable', error);
        // const biometryInfo = getBiometryInfo(getErrorCode(error));
        // resolve(biometryInfo);
      });
  });

//используется при первом входе в приложение по биометрии
//вот эта штука мешает нормально верстать
export const biometryPrompt = (
  authenticateParams: Omit<Options, 'payload'>,
): Promise<BiometryReturn> =>
  new Promise((resolve) => {
    //запуск собственной библиотеки colvir
    // console.log('authenticateParams2', authenticateParams);
    //authenticateParams2 {"cancelButtonText": "Отмена", "code": "", "promptMessage": "Вход"}
    //promptMessage - заголовок нативного окна
    //cancelButtonText - текст кнопки для отмены биометрии

    //Запрашивает у пользователя отпечаток пальца или идентификатор лица.
    // Возвращает объект Promise, который разрешается, если пользователь предоставляет допустимые биометрические данные или отменяет запрос,
    // в противном случае обещание отклоняется.
    // **ПРИМЕЧАНИЕ: Это проверяет только биометрические данные пользователя.
    // Это не должно использоваться для входа пользователя в систему или проверки подлинности на сервере,
    // вместо этого используйте createSignature.
    // Его следует использовать только для отслеживания определенных действий пользователя в приложении.
    // например используется при первом входе в приложение, когда пользователь уже вошел по номеру телефона
    // Ввел свой пароль и после прохождения авторизации по паролю у пользователя спрашивают как он будет
    // подтверждать дальнейшие операции кодом или биометрией и вот тогда вызвывется simplePrompt

    rnBiometrics
      .simplePrompt(authenticateParams)
      .then((result) => {
        // console.log('result', result);
        // здесь пользователь прошел/подтвердил авторизацию по биометрии успешно
        const { success } = result;
        // console.log('success12', success);
        resolve({ successPrompt: success });
      })
      .catch(() => {
        //сюда упадет в ошибку если пользователь откажется от биометрии
        // console.log('error3', error);
        // resolve({ successPrompt: false, errorPrompt: getErrorCode(error) });
      });
  });

// Notice: ReactNativeBiometrics.createSignature IOS show prompt window only on real device
//если включено по биометрии то удаляем карту через подтверждение по биометрии вместо
// подтверждения кодом
// export const biometryCreateSignature = (options: Options): Promise<BiometryReturn> => {
//   console.log('biometryCreateSignature', biometryCreateSignature);
//   return new Promise((resolve) => {
//     //Запрашивает у пользователя отпечаток пальца или идентификатор лица,
//     // чтобы получить закрытый ключ из хранилища ключей,
//     // а затем использует закрытый ключ для создания подписи RSA PKCS#1v1.5 SHA 256.
//     // Возвращает объект Promise, который разрешается в объект со сведениями о подписи.
//     ReactNativeBiometrics.createSignature(options)
//       .then((result) => {
//         console.log('optionscreateSignature', options);
//         // опции модалки на удаление карты
//         // options {"cancelButtonText": "Отмена", "code": "", "payload": "Confirm fingerprint", "promptMessage": "Подтверждение"}
//
//         console.log('resultbiometryCreateSignature', result);
//         // {"signature": "HkiI7oziTzm1+H2WKiqlxXNuH0kVGFnmcL2knmkx5vrtjbrC/a8v5DlBjxZCpR3DDX0MnstD4y9QfEUaCr58Vam7oKqoJVj/ptEQ7rBWq7SLygLeK3WeqE71YCf5EpWBDG5PKzALf3c8Jb5BjA34zcIlMdAMQ59pJlVQeiQckqt9Ev8k4vuIA2gHvdmFjaGM7jORyOBwSsgPevdcXuJ1dZcZBQEUbe2rBjYZnPC5utC5xt9fIjUgacq4tYeczrGcv51bT/Z/jQm9DmIAe6ph65jOw4oIGkWSAtaW0qAw5kkyWQ7A6QIvqIJYb4GCx0zMH291vFoXu1eL1EQxLlEElQ==", "success": true}
//         const { success, signature } = result;
//         // потом результат кодиируется для передачи на бэк
//         // const secretJ = JSON.stringify(options);
//         // return base64.encode(secretJ);
//         // как таковая signature не используется напрямую
//         if (success && signature) {
//           resolve({ successPrompt: true, signature });
//         }
//       })
//       .catch((error) => {
//         resolve({ successPrompt: false, errorPrompt: getErrorCode(error) });
//       });
//   });
// };
