import { Hero, Introduction, Rules } from "@/components";
import MainLayout from "@/layout/MainLayout";

const Homepage = () => {
  return (
    <MainLayout pagetitle="Hackathon 1.0">
      <Hero />
      <Introduction />
      <Rules />
    </MainLayout>
  );
};

export default Homepage;
