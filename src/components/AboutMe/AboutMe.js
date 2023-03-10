"use client";
import React from "react";
import AboutMeModal from "./AboutMeModal";
import Image from "next/image";
import "./AboutMe.scss";
import images from "../../constants/images";

const AboutMe = () => {
  return (
    <div id="omnie" className="app__aboutme section__padding">
      <div className="app__aboutme-img app__aboutme-container">
        <Image src={images.aboutme} alt="" />
      </div>
      <div className="app__aboutme-description app__aboutme-container">
        <div className="app__aboutme-description-text">
          <h2 className="app__heading-h2">Kim jestem?</h2>
          <p className="p__lato">
            Ukończyłam studia licencjackie oraz magisterskie z kierunku
            fizjoterapia na Uniwersytecie Medycznym w Białymstoku.
            <br/>
            <br/>
            Od 2018 roku pracuję jako fizjoterapeutka, a w 2021 roku założyłam własny gabinet w Sokółce. Na codzień pracuję z pacjentami z dolegliwościami bólowymi kręgosłupa, stawów obwodowych, bólami głowy, po udarach mózgu. Zajmuje się również wadami stóp u dzieci oraz wad postawy. Dodatkowo rozwijam się w kierunku fizjoterapii kobiet w trakcie i po ciąży.
          </p>
        </div>
        <div className="app__aboutme-description-btn">
          <AboutMeModal />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
