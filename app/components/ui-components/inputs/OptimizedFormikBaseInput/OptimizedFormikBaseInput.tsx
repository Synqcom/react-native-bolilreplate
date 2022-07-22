import React, { FC, useEffect, useState } from 'react';
import { TOptimizedFormikBaseInputProps } from './types';
import useDebounce from 'app/utils/customHooks/useDebounce';
import inputStyles from 'app/components/ui-components/inputs/BaseInput/styles';
import { GlobalConstants } from 'app/config/global-constants';
import { TextInput } from 'react-native';

type TBaseInputProps = {
  style?: object;
  name: string;
  placeholder: string;
  formik: any;
  value?: string;
  keyboardType?: 'numeric' | 'default' | 'email-address' | 'phone-pad' | 'number-pad';
};

const OptimizedFormikBaseInput: FC<TOptimizedFormikBaseInputProps & TBaseInputProps> = ({
  name,
  formik,
  style,
  placeholder,
  keyboardType,
  ...props
}) => {
  const [valueInput, setValueInput] = useState('');

  const debouncedCallback = useDebounce(
    (newFormikValue: string) => formik.setFieldValue(name, newFormikValue),
    200,
  );

  useEffect(() => {
    setValueInput(formik.getFieldProps(name).value);
  }, [formik]);
  return (
    <TextInput
      value={valueInput}
      style={[inputStyles.input, style]}
      onChangeText={(evt) => {
        setValueInput(evt);
        debouncedCallback(evt);
      }}
      placeholder={placeholder}
      placeholderTextColor={GlobalConstants.color.COLOR_GREY}
      keyboardType={keyboardType}
      {...props}
    />
  );
};

export { OptimizedFormikBaseInput };
