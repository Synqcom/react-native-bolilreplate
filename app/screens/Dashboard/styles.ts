import { StyleSheet } from 'react-native';
import { GlobalConstants } from 'app/config/global-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  login: {
    padding: 8,
    color: GlobalConstants.color.COLOR_BLACK,
  },
});

export default styles;
