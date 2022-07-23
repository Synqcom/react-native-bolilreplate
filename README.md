- Запуск 
  - yarn start
    в этом окне нажать "d" и запустить дебагер на физ устройстве выбрав кнопку "Debug"
    также в запущеном дебагере нажать "Enable Network"
  - npx react-native run-android


- Сторибук
  - yarn run storybook


- Добавление пакета
  - yarn add <название пакета>


- eslint:
  - +первоначальная настройка
  -  линтер
  -  преттиер
  -  прекомит
  -  работа с тайпскрипт
  

- +дебагер
  - https://dev.to/dev_astador/how-to-debug-redux-in-a-react-native-app-4b19#:~:text=Once%20the%20app%20opened%2C%20by,RNDebugger%20connected%20with%20your%20application.
  - files https://github.com/jhen0409/react-native-debugger/releases


- +стили:
  - +подключение стилей в отдельный файл
  - +styledComponents


- +ассеты:
  - +подключение картинок
  - +подключение иконок
  - +подключение шрифтов
    
    npx react-native link
    
    react-native.config.js
  

    module.exports = {
      project: {
      ios: {},
      android: {}, // grouped into "project"
      },
      assets: ['./assets/fonts/'], // stays the same
    };

- +стор:
  - +настройка дебагера
  - +настройка редакса
  - +настройка персиста
  - +настройка реселекта
  - +настройка лоадеров
  - +настройка показа модалок c ошибками


- Роутинг:
  - +между экранами из компонента
  - +защищенный роут для авторизированных
  - +разделение роутов по компонентам
  - +передача параметров через роуты


- +запросы
  - +авторизация
  - +сохранение токена
  - +разлогин


- +Сага
  - +сага пут и гет из хранилища
  - +роутинг из саги


- библиотеки
  - вычищение ненужных
  - добавление нужных


- +сторибук
  - \node_modules\react-native-paper\src\styles\DefaultTheme.tsx
  - yarn (run) storybook
  - https://github.com/storybookjs/react-native
  

- +Лэйаут


- +ScrollView


- +Formik
  - +инпут без лишних перерендеров
  - +yup

  
- +Локализация


- +favicon
  - C:\Users\Alexandr\WebstormProjects\rnb\android\app\src\main\res\mipmap-hdpi
  

- +appName in phone menu
    - app.json


- errorBoundary


- +сканер QR 
  - https://stackoverflow.com/questions/59284741/out-of-memory-error-while-running-gradlew-assemblerelease-react-native
  - https://www.youtube.com/watch?v=2Yf7eh58OFM
  - https://github.com/moaazsidat/react-native-qrcode-scanner
  - https://www.npmjs.com/package/react-native-camera
  - https://react-native-camera.github.io/react-native-camera/docs/installation.html
  - https://www.youtube.com/watch?v=hk8UtuaxOc8
  - https://github.com/moaazsidat/react-native-qrcode-scanner/issues/115
  - картинка для входа лежит в app/screens/ForgotPassword/login.png


- биометрия
  - https://www.npmjs.com/package/react-native-biometrics
  - файлы из проекта турон лежат в архиве с коментами, ниже лежат пути их использования
    src/modules/SecuritySettingsModule/screens/SecuritySettingsScreen/components/SettingsForm/index.tsx
    src/modules/CardsModule/CardsMainScreen/index.tsx
    src/modules/UserProfileModule/screens/ProfileSecurityScreen/index.tsx
    src/redux/security/thunks.ts
    src/sharedComponent/Pincode/index.tsx
    src/utils/helpers/functions/biometrics.ts


- +избавиться от colvir в package-lock.json и приложении, что мешает установки пакетов без VPN
  - npm config delete registry


- +сборка приложения
    - react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
    - cd android
    - gradlew assembleDebug
    - yourProject/android/app/build/outputs/apk/debug/app-debug.apk
    - https://medium.com/geekculture/react-native-generate-apk-debug-and-release-apk-4e9981a2ea51
