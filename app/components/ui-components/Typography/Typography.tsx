import React, { FC } from 'react';
import { Text } from 'react-native-paper';

type TBaseButtonProps = {
  style?: any;
  text: string;
};

const Typography: FC<TBaseButtonProps> = ({ style, text, ...props }) => (
  <Text style={style} {...props}>
    {text}
  </Text>
);

export { Typography };
