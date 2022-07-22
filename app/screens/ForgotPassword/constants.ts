import { Dimensions } from 'react-native';

export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const overlayColor = 'rgba(0,0,0,0.5)'; // this gives us a black color with a 50% transparency

export const rectDimensions = SCREEN_WIDTH * 0.65; // this is equivalent to 255 from a 393 device width
export const rectBorderWidth = SCREEN_WIDTH * 0.005; // this is equivalent to 2 from a 393 device width
export const rectBorderColor = 'red';

export const scanBarWidth = SCREEN_WIDTH * 0.46; // this is equivalent to 180 from a 393 device width
export const scanBarHeight = SCREEN_WIDTH * 0.0025; //this is equivalent to 1 from a 393 device width
export const scanBarColor = '#22ff00';
