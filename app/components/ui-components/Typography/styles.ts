import { StyleSheet } from 'react-native';
import { GlobalConstants } from 'app/config/global-constants';

const typographyStyles = StyleSheet.create({
  red: {
    fontSize: 18,
    color: GlobalConstants.color.COLOR_RED,
    fontFamily: GlobalConstants.fonts.FONT_EDU_BOLD,
  },
  green: {
    fontSize: 18,
    color: GlobalConstants.color.COLOR_PRIMARY,
    fontFamily: GlobalConstants.fonts.FONT_EDU_BOLD,
  },
  black: {
    fontSize: 18,
    color: GlobalConstants.color.COLOR_BLACK,
    fontFamily: GlobalConstants.fonts.FONT_LIGHT,
  },
  medium: {
    fontSize: 18,
    color: GlobalConstants.color.COLOR_BLACK,
    fontFamily: GlobalConstants.fonts.FONT_MEDIUM,
  },
  regular: {
    fontSize: 14,
    color: GlobalConstants.color.COLOR_BLACK,
    fontFamily: GlobalConstants.fonts.FONT_LIGHT,
  },
});

export { typographyStyles };
