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
        <title>{`getlinked ${pagetitle}`}</title>
      </Head>

      <main>{children}</main>
    </>
  );
};

export default MainLayout;
