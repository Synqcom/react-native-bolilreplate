import React, { FC } from 'react';
import { Typography } from 'app/components/ui-components/Typography';
import { LayoutContainer, MainLayoutContainer } from './styles';
import { Header } from 'app/components/custom-components/layout/LoginLayout/components/Header';

type MainLayoutProps = {
  children: React.ReactNode;
  headerText: string;
};
const LoginLayout: FC<MainLayoutProps> = ({ children, headerText }) => (
  <MainLayoutContainer>
    <Header>
      <Typography text={headerText} />
    </Header>
    {/*<ServiceErrorBoundary>{children}</ServiceErrorBoundary>*/}
    <LayoutContainer>{children}</LayoutContainer>
  </MainLayoutContainer>
);

export { LoginLayout };
