// ie: ./lib/i18n/getServerTranslations.ts
import type { Namespace } from 'i18next';
import type { SSRConfig, UserConfig } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18nextConfig from 'next-i18next.config.mjs'

type ArrayElementOrSelf<T> = T extends Array<infer U> ? U[] : T[];

export const getServerTranslations = async (
  locale: string,
  namespacesRequired?: ArrayElementOrSelf<Namespace> | string | string[] | undefined,
  configOverride?: UserConfig | null,
  extraLocales?: string[] | false
): Promise<SSRConfig> => {
  const config = configOverride ?? nextI18nextConfig
  return serverSideTranslations(locale, namespacesRequired as string[], config,  extraLocales)
}