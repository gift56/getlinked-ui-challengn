import { ReactNode } from "react";
import Head from "next/head";
import { Footer, Navbar } from "@/components";

interface LayoutProps {
  children: ReactNode;
  pagetitle: String;
  showFooter?: Boolean;
}

const MainLayout = ({ children, pagetitle, showFooter }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{`Getlinked - ${pagetitle}`}</title>
        <meta
          name="description"
          content="Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize"
        />
      </Head>
      <Navbar />
      <main>{children}</main>
      {showFooter === true && <Footer />}
    </>
  );
};

export default MainLayout;
