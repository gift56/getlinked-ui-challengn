import {
  Faqs,
  Hero,
  Introduction,
  Judging,
  Price,
  Rules,
  Sponsors,
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
      <Sponsors />
    </MainLayout>
  );
};

export default Homepage;
