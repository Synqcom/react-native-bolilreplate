import React, { FC } from 'react';
import { TextInput } from 'react-native';
import inputStyles from 'app/components/ui-components/inputs/BaseInput/styles';
import { GlobalConstants } from 'app/config/global-constants';

type TBaseInputProps = {
  style?: object;
  onChange: (name: string) => void;
  name: string;
  value: string;
  placeholder: string;
  keyboardType?: 'numeric' | 'default' | 'email-address' | 'phone-pad' | 'number-pad';
};

const BaseInput: FC<TBaseInputProps> = ({
  style,
  onChange,
  value,
  placeholder,
  keyboardType,
  ...props
}) => (
  <TextInput
    style={[inputStyles.input, style]}
    onChangeText={onChange}
    value={value}
    placeholder={placeholder}
    placeholderTextColor={GlobalConstants.color.COLOR_GREY}
    keyboardType={keyboardType}
    {...props}
  />
);

export { BaseInput };
