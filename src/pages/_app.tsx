import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType, type AppProps } from "next/app";
import nextI18NextConfig from "next-i18next.config.mjs";
import { appWithTranslation } from "next-i18next";
import { type ComponentType } from "react";
import Layout from "~/components/Layout";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
};

export default appWithTranslation(
  api.withTRPC(MyApp) as ComponentType<AppProps<unknown>>,
  nextI18NextConfig,
);

// export default api.withTRPC(MyApp);
