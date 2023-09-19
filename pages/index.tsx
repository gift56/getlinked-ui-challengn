import {
  Faqs,
  Hero,
  Introduction,
  Judging,
  Price,
  Privacy,
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
      <Privacy />
    </MainLayout>
  );
};

export default Homepage;
