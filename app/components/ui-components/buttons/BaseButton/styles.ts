import { StyleSheet } from 'react-native';
import { GlobalConstants } from 'app/config/global-constants';

const buttonStyles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    backgroundColor: GlobalConstants.color.COLOR_PRIMARY,
  },
  label: {
    color: GlobalConstants.color.COLOR_WHITE,
  },
});

export default buttonStyles;
