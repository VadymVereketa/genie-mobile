import type {TranslateOptions} from 'i18n-js';
import {I18n} from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

import en from './locales/en';
import uk from './locales/uk';
import type {LocalizedDictionary} from './types';
import type {Leaves} from '../typings/Leaves';

export const supportedLocales = ['uk', 'ru', 'en'] as const;
export const defaultLocale = 'en' as const;
const available = RNLocalize.findBestAvailableLanguage(supportedLocales);

export const locale =
  supportedLocales.find(l => available?.languageTag.startsWith(l)) ||
  defaultLocale;

const i18n = new I18n({uk, en});

i18n.locale = locale;
i18n.defaultLocale = defaultLocale;
i18n.enableFallback = true;

export const localize = (
  key: Leaves<LocalizedDictionary>,
  options?: TranslateOptions,
) => i18n.t(key, options);

export const localizePlural = (key: string, options?: TranslateOptions) =>
  i18n.t(key, options);

export {i18n};
