import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { Text, View } from 'react-native';
import { loginUserRequest } from 'app/screens/LoginPage/store/LoginSlice';
import NavigationService from 'app/navigation/NavigationService';
import { useDispatch } from 'react-redux';
import { Box } from 'app/config/global-styles';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from './constants';
import { QRStyles } from './styles';
import { Typography } from 'app/components/ui-components/Typography';

const ForgotPassword: React.FC = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const handleQRRead = (data: any) => {
    const values = JSON.parse(data.data);
    setIsLoading(true);
    dispatch(
      loginUserRequest({
        values: values,
        NavigationService: NavigationService,
      }),
    );
  };

  const makeSlideOutTranslation = (translationType: string, fromValue: number) => ({
    from: {
      [translationType]: SCREEN_WIDTH * -0.18,
    },
    to: {
      [translationType]: fromValue,
    },
  });

  return (
    <Box>
      {isLoading ? (
        <Box style={QRStyles.loadingText}>
          <Typography text="Логинимся, ждите" />
        </Box>
      ) : (
        <QRCodeScanner
          showMarker
          onRead={handleQRRead}
          cameraStyle={{ height: SCREEN_HEIGHT }}
          customMarker={
            <View style={QRStyles.rectangleContainer}>
              <View style={QRStyles.topOverlay}>
                <Text style={{ fontSize: 30, color: 'white' }}>Scan QR and Login</Text>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <View style={QRStyles.leftAndRightOverlay} />

                <View style={QRStyles.rectangle}>
                  <Animatable.View
                    style={QRStyles.scanBar}
                    direction="alternate-reverse"
                    iterationCount="infinite"
                    duration={1700}
                    easing="linear"
                    animation={makeSlideOutTranslation('translateY', SCREEN_HEIGHT * -0.25)}
                  />
                </View>

                <View style={QRStyles.leftAndRightOverlay} />
              </View>

              <View style={QRStyles.bottomOverlay} />
            </View>
          }
          // flashMode={RNCamera.Constants.FlashMode.torch}
          flashMode={RNCamera.Constants.FlashMode.off}
        />
      )}
    </Box>
  );
};

export { ForgotPassword };
