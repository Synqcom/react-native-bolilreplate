import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  preloader: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 1,
    transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 2000,
    color: '#19212F',
  },
});

export default styles;
