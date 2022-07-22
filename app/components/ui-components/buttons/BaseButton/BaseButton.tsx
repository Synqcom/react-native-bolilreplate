import React, { FC } from 'react';
import { Button } from 'react-native-paper';
import buttonStyles from 'app/components/ui-components/buttons/BaseButton/styles';

type TBaseButtonProps = {
  mode?: any;
  icon?: string;
  color?: string;
  btnText?: string;
  style?: object;
  labelStyle?: object;
  disabled?: boolean;
  onPress?: () => void;
};

const BaseButton: FC<TBaseButtonProps> = ({
  style,
  labelStyle,
  mode,
  icon,
  btnText,
  disabled,
  ...props
}) => (
  <Button
    icon={icon}
    mode={mode}
    labelStyle={[buttonStyles.label, labelStyle]}
    style={[buttonStyles.button, style]}
    disabled={disabled}
    {...props}
  >
    {btnText}
  </Button>
);

export { BaseButton };
