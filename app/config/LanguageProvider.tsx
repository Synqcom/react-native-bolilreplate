import React from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import { makeSelectLocaleSelector } from 'app/store/selectors';

// @ts-ignore
export function LanguageProvider({ children, messages }) {
  const { language } = useSelector(makeSelectLocaleSelector());

  return (
    <IntlProvider defaultLocale="ru" locale={language} key={language} messages={messages[language]}>
      {React.Children.only(children)}
    </IntlProvider>
  );
}
