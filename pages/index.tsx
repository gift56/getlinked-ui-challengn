import {
  Faqs,
  Hero,
  Introduction,
  Judging,
  Price,
  Rules,
  Timeline,
} from "@/components";
import MainLayout from "@/layout/MainLayout";

const Homepage = () => {
  return (
    <MainLayout pagetitle="Hackathon 1.0">
      <Hero />
      <Introduction />
      <Rules />
      <Judging />
      <Faqs />
      <Timeline />
      <Price />
    </MainLayout>
  );
};

export default Homepage;
