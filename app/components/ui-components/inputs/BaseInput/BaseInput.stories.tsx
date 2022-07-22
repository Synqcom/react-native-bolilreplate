import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BaseInput } from './BaseInput';
import { View } from 'react-native';

export default {
  title: 'ui-components/Inputs/BaseInput',
  component: BaseInput,
} as ComponentMeta<typeof BaseInput>;

export const BasicBaseInput: ComponentStory<typeof BaseInput> = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <View style={{ width: 200 }}>
      <BaseInput
        name="user"
        onChange={(e) => setInputValue(e)}
        value={inputValue}
        placeholder="placeholder"
      />
    </View>
  );
};
