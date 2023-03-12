"use client";
import React, { useEffect } from "react";
import services from "../../constants/data";
import "./Services.scss";
import "aos/dist/aos.css";
import Image from "next/image";
import Aos from "aos";
import { nanoid } from "nanoid";

const Services = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div id="uslugi" className="app__services section__padding">
      <div className="app__border-section" data-aos="fade-out"></div>
      <h1 className="app__heading-h1" data-aos="fade-right">
        W czym mogę Ci pomóc?
      </h1>
      <div className="app__services-list">
        {services.map((service) => (
          <div
            className="app__services-list-item"
            key={service.id.toString()}
            id={service.id}
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            {/* <div className="app__service-icon">
            <Image
              src={service.icon}
              alt="fizjoterapia rehabilitacja"
              />
              </div> */}
            <div className="app__service-list-item-description">
              <h2 className="app__heading-h2">{service.title}</h2>
              <ul>
                {service.types.map((type) => (
                  <li key={nanoid()}>
                    <span className="p__cormorant">{type}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
