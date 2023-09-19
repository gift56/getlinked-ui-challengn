import { Hero, Introduction, Judging, Rules } from "@/components";
import MainLayout from "@/layout/MainLayout";

const Homepage = () => {
  return (
    <MainLayout pagetitle="Hackathon 1.0">
      <Hero />
      <Introduction />
      <Rules />
      <Judging />
    </MainLayout>
  );
};

export default Homepage;
