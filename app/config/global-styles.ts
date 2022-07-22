import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Box = styled.View``;
export const ScrollBox = styled.ScrollView`
  width: 100%;
`;

// const Container = styled.View`
//   flex: 1;
//   background-color: white;
//   align-items: center;
//   justify-content: center;
// `;

const MainStyles = StyleSheet.create({
  preloader: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 1,
    transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 2000,
    color: '#f3126e',
  },
});

export { MainStyles };
