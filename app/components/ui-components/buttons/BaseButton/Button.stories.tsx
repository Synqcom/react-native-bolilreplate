import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BaseButton } from './BaseButton';
import { GlobalConstants } from 'app/config/global-constants';
import { View } from 'react-native';

export default {
  title: 'ui-components/Buttons/BaseButton',
  component: BaseButton,
} as ComponentMeta<typeof BaseButton>;

export const BasicBaseButton: ComponentStory<typeof BaseButton> = () => (
  <View style={{ width: 200 }}>
    <BaseButton btnText="Hello World" mode="outlined" color={GlobalConstants.color.COLOR_BLACK} />
  </View>
);
