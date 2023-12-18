// @ts-check

/**
 * @type {import('next-i18next').UserConfig}
 */
import path from 'path';

const config = {
  // https://www.i18next.com/overview/configuration-options#logging
  debug: false, //process.env.NODE_ENV === 'development',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'ru', 'zh'],
  },
  /** To avoid issues when deploying to some paas (vercel...) */
  localePath: typeof window === 'undefined'
    ? path.resolve('./public/locales')
    : '/locales',

  reloadOnPrerender: process.env.NODE_ENV === 'development',

  /**
   * @link https://github.com/i18next/next-i18next#6-advanced-configuration
   */
  // saveMissing: false,
  // strictMode: true,
  // serializeConfig: false,
  // react: { useSuspense: false }
}

export default config;
