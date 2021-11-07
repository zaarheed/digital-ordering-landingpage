import { Cta } from "../components/home/cta";
import FAQs from "../components/home/faqs";
import Features from "../components/home/features";
import Hero from "../components/home/hero";
import Overview from "../components/home/overview";
import Pricing from "../components/home/pricing";
import Save from "../components/home/save";
import Setup from "../components/home/setup";
import Layout from "../components/shared/layout";
import TopThreeFeatures from "../components/home/top-three-features";
import Why from "../components/home/why";
import RestaurantStap from "../components/home/restaurant-strap";

export default function Home() {
  return (
    <Layout>
      <Hero />

      <RestaurantStap />

      <Save />

      <TopThreeFeatures />

      <Why />
      
      <Features />

      <Setup />

      <Overview />

      <Pricing />
      
      <FAQs />

      <Cta />

      <div />
    </Layout>
  );
}
