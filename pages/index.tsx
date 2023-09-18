import { Hero, Introduction } from "@/components";
import MainLayout from "@/layout/MainLayout";

const Homepage = () => {
  return (
    <MainLayout pagetitle="Hackathon 1.0">
      <Hero />
      <Introduction />
    </MainLayout>
  );
};

export default Homepage;
