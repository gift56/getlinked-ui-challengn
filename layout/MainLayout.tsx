import { ReactNode } from "react";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
  pagetitle: String;
}

const MainLayout = ({ children, pagetitle }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>getlinked</title>
      </Head>
    </>
  );
};

export default MainLayout;
