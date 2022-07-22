import { StyleSheet } from 'react-native';
import { GlobalConstants } from 'app/config/global-constants';
import styled from 'styled-components/native';

export const TestImage = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 50px;
  margin-right: 16px;
`;

const loginStyles = StyleSheet.create({
  forgot: {
    marginTop: 12,
  },
  labelStyle: {
    fontSize: 18,
    fontFamily: GlobalConstants.fonts.FONT_EDU_BOLD,
  },
  camera: {
    flex: 1,
    borderWidth: 2,
  },
});

export { loginStyles };
