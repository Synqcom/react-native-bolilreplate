import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedMessage, useIntl } from 'react-intl';
import NavigationService from 'app/navigation/NavigationService';
import { ArrowLeft } from 'app/assets/icons/ArrowLeft';
import { loginUserRequest } from './store/LoginSlice';
import { BaseButton } from 'app/components/ui-components/buttons/BaseButton';
import { Typography } from 'app/components/ui-components/Typography';
import { typographyStyles } from 'app/components/ui-components/Typography/styles';
import { loginStyles, TestImage } from 'app/screens/LoginPage/styles';
import { Box, ScrollBox } from 'app/config/global-styles';
import { FormikProps, useFormik } from 'formik';
import { LoginLayout } from 'app/components/custom-components/layout/LoginLayout';
import { BaseInput } from 'app/components/ui-components/inputs/BaseInput';
import { INITIAL_AUTH_VALUES, VALIDATION_AUTH_VALUES } from 'app/screens/LoginPage/constants';
import { TLogin } from 'app/screens/LoginPage/types';
import { OptimizedFormikBaseInput } from 'app/components/ui-components/inputs/OptimizedFormikBaseInput';
import { GlobalConstants } from 'app/config/global-constants';
import { Text } from 'react-native';
import messages from './messages';
import { setLocalize, setNotification } from 'app/store/configureStore';
import { makeSelectLocaleSelector } from 'app/store/selectors';
import { biometryAvailable, biometryPrompt } from 'app/utils/biometry/biometrics';

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const intl = useIntl();

  const { language } = useSelector(makeSelectLocaleSelector());

  const authUserFormikData: FormikProps<TLogin> = useFormik({
    validateOnMount: true,
    enableReinitialize: true,
    initialValues: INITIAL_AUTH_VALUES,
    validationSchema: VALIDATION_AUTH_VALUES,
    onSubmit: (values) => {
      dispatch(
        loginUserRequest({
          values: values,
          NavigationService: NavigationService,
        }),
      );
    },
  });
  const { values, handleChange, handleSubmit } = authUserFormikData;

  const onForgot = () => NavigationService.navigate('ForgotPassword');
  const onBiometryEnter = async () => {
    //не использовать isSensorAvailable на боевом!!! использовать createSignature при работающем бэке
    const authenticateParams = {
      promptMessage: 'Вход в приложение',
      cancelButtonText: 'Отменить и закрыть фингерпринт',
      code: '',
    };

    const { available } = await biometryAvailable();

    if (available) {
      const { successPrompt } = await biometryPrompt(authenticateParams);

      if (successPrompt) {
        dispatch(
          loginUserRequest({
            values: {
              username: 'admin',
              password: 'admin',
            },
            NavigationService: NavigationService,
          }),
        );
      }
    } else {
      dispatch(
        setNotification({
          notificationTitle: 'Ошибка! У Вас нет ниодного настроенного отпечатка пальца',
          notificationMessage:
            'Настройте хотя бы 1 отпечаток и повторите снова или войдите через форму',
          notificationStatus: 'error-status',
        }),
      );
    }
  };
  const onChangeLanguage = () =>
    dispatch(setLocalize({ language: language === 'ru' ? 'en' : 'ru' }));

  return (
    <LoginLayout headerText="шапка1">
      <TestImage
        testID="leftImage"
        source={require('app/assets/images/react-native.png')}
        resizeMode="cover"
      />
      <Box style={{ marginBottom: 30 }}>
        <ArrowLeft fill="blue" />
      </Box>
      <ScrollBox style={{ backgroundColor: GlobalConstants.color.COLOR_GREY, maxHeight: 150 }}>
        <Text style={{ color: 'black' }}>
          <FormattedMessage {...messages.authorisation} />
        </Text>
        <Typography text="test ScrollBox1" style={typographyStyles.black} />
        <Typography text="test ScrollBox2" style={typographyStyles.black} />
        <Typography text="test ScrollBox3" style={typographyStyles.black} />
        <Typography text="test ScrollBox4" style={typographyStyles.black} />
        <Typography text="test ScrollBox5" style={typographyStyles.black} />
        <Typography text="test ScrollBox6" style={typographyStyles.black} />
        <Typography text="test ScrollBox7" style={typographyStyles.black} />
        <Typography text="test ScrollBox8" style={typographyStyles.black} />
        <Typography text="test ScrollBox9" style={typographyStyles.black} />
        <Typography text="test ScrollBox1" style={typographyStyles.black} />
        <Typography text="test ScrollBox2" style={typographyStyles.black} />
        <Typography text="test ScrollBox3" style={typographyStyles.black} />
        <Typography text="test ScrollBox4" style={typographyStyles.black} />
        <Typography text="test ScrollBox5" style={typographyStyles.black} />
        <Typography text="test ScrollBox6" style={typographyStyles.black} />
        <Typography text="test ScrollBox7" style={typographyStyles.black} />
        <Typography text="test ScrollBox8" style={typographyStyles.black} />
        <Typography text="test ScrollBox9" style={typographyStyles.black} />
      </ScrollBox>
      <Box>
        <Typography text={intl.formatMessage(messages.login)} style={typographyStyles.black} />

        <OptimizedFormikBaseInput
          name="username"
          placeholder="enter login admin"
          formik={authUserFormikData}
        />
      </Box>

      <Box style={{ marginBottom: 1 }}>
        <Typography text="Password" style={typographyStyles.black} />

        <BaseInput
          placeholder="enter password admin"
          onChange={handleChange('password')}
          name="password"
          value={values.password}
        />
      </Box>

      {authUserFormikData.isValid && (
        <BaseButton
          btnText="Login and go to Dash"
          icon="login"
          mode="outlined"
          onPress={handleSubmit}
        />
      )}

      <BaseButton
        mode="text"
        style={loginStyles.forgot}
        labelStyle={loginStyles.labelStyle}
        onPress={onForgot}
        btnText="Forgot Password QR ENTER"
      />
      <BaseButton
        mode="text"
        style={loginStyles.forgot}
        labelStyle={loginStyles.labelStyle}
        onPress={onBiometryEnter}
        btnText="Biometry test"
      />

      <BaseButton
        mode="text"
        style={loginStyles.forgot}
        labelStyle={loginStyles.labelStyle}
        onPress={onChangeLanguage}
        btnText="Сменить язык"
      />
    </LoginLayout>
  );
};

export { LoginPage };
