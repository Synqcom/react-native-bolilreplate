const ruTranslationMessages = require('../translations/ru.json');
const enTranslationMessages = require('../translations/en.json');

const DEFAULT_LOCALE = 'ru';

export const formatTranslationMessages = (locale: string, messages: { [x: string]: any }) => {
  const defaultFormattedMessages: any =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
      : {};
  const flattenFormattedMessages = (formattedMessages: any, key: string | number) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE ? defaultFormattedMessages[key] : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  };
  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

export const translationMessages = {
  ru: formatTranslationMessages('ru', ruTranslationMessages),
  en: formatTranslationMessages('en', enTranslationMessages),
};
