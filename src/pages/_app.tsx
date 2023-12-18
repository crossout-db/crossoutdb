import { type AppType, type AppProps } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { appWithTranslation } from "next-i18next";
import { type ComponentType } from "react";

import Layout from "@components/Layout";
import nextI18NextConfig from "next-i18next.config.mjs";
import { trpc } from "~/lib/trpc";

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
  trpc.withTRPC(MyApp) as ComponentType<AppProps<unknown>>,
  nextI18NextConfig,
);

// export default api.withTRPC(MyApp);
