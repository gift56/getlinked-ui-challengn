import { ReactNode } from "react";
import Head from "next/head";
import { Footer, Navbar } from "@/components";

interface LayoutProps {
  children: ReactNode;
  pagetitle: String;
}

const MainLayout = ({ children, pagetitle }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{`Getlinked - ${pagetitle}`}</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
