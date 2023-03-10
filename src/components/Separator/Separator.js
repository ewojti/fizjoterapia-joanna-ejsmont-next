import React from "react";
import Image from "next/image";
import images from "../../constants/images";

const Separator = () => {
  return (
    <div>
      <div
        className="app__bg-separator"
        style={{
          position: "relative",
          height: "400px",
          width: "100%",
          clipPath: "inset(0 0 0 0)",
        }}
      >
        <div
          style={{
            position: "fixed",
            height: "100%",
            width: "100%",
            left: "0",
            top: "0",
            opacity: "0.7",
          }}
        >
          <Image
          className="app__bg-separator-img-desktop"
            src={images.cwiczenia}
            alt="fizjoterapia"
            fill
            style={{ objectFit: "cover" }}
          />
          <Image
          className="app__bg-separator-img-mobile"
            src={images.headerMob}
            alt="fizjoterapia"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Separator;
