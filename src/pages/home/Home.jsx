

import Writer from "../sections/Writer.jsx";
import Hero from "../sections/Hero.jsx";
import TopCategory from "../sections/TopCategory.jsx";
import LatestArticle from "../sections/LatestArticle.jsx";
import OurOpprtunities from "../sections/OurOpprtunities.jsx";
import BecomeAuther from "../sections/BecomeAuther.jsx";
import Companies from "../sections/Companies.jsx";

import "../../index.css";

function Home() {
  return (
    <div className="relative w-full min-h-screen">
    <Hero/>
    <TopCategory/>
    <LatestArticle/>
    <OurOpprtunities/>
    <BecomeAuther/>
    <Writer/>
    <Companies/>
    </div>
  );
}

export default Home;
