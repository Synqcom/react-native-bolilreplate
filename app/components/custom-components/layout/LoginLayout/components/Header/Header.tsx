import React, { FC } from 'react';
import { HeaderWrapper } from './styles';

type MainHeaderProps = {
  children: React.ReactNode;
};
const Header: FC<MainHeaderProps> = ({ children }) => <HeaderWrapper>{children}</HeaderWrapper>;

export { Header };
