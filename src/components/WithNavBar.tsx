import { useCurrentUser } from "../lib/context";
import Head from "next/head";
import NavBar from "./NavBar";

type Props = {
  children: JSX.Element | JSX.Element[] | undefined;
};

export default function WithNavBar({ children }: Props) {
  const currentUser = useCurrentUser();

  return (
    <>
      <Head>
        <title>Crossout DB</title>
        <meta
          name="description"
          content="Crossout Market Prices, Graphs and Crafting Calculator"
        />
        <meta
          name="keywords"
          content="CrossoutDB,Crossout,Crossout Market,Crafting,Calculator,Market,Graphs,Diagramm"
        />
        <meta name="author" content="SilentNyte & Stiffi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar currentUser={currentUser} />
      {children}
    </>
  );
}
