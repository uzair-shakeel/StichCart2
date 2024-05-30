import React from "react";
import Hero from "../../components/hero/hero";
import Banner from "../../components/homeBanner/homeBanner";
import RecentWorks from "../../components/recent-works/recent-works";
import CarBanner from "../../components/carBanner/carBanner";
import CustomizeBanner from "../../components/customize/customize";
import Carousal from "../../components/customer-says/customer-says";
import TalkUs from "../../components/homeTalk/homeTalk";
import Cards from "../../components/cards/cards";

const Home = () => {
  return (
    <section className="homeBackground">
      <Hero />
      <Cards />
      <Banner />
      <RecentWorks />
      <CarBanner />
      <CustomizeBanner />
      <Carousal />
      <TalkUs />
    </section>
  );
};

export default Home;
