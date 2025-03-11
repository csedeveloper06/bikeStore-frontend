/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import ReactSlick from "react-slick";

import "../styles/react-slick.css";

const ReactSlickExample = ({ images, rimProps, rsProps }) => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    isMobile: window.innerWidth <= 768,
    isTablet: window.innerWidth > 768 && window.innerWidth <= 1024,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        isMobile: window.innerWidth <= 768,
        isTablet: window.innerWidth > 768 && window.innerWidth <= 1024,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(images);

  const dataSource = [
    {
      srcSet: images?.front
        ?.map((img) => `${img.src} ${img.setting}`)
        .join(", "),
      small: images?.front?.find((img) => img.setting === "500w")?.src,
      large: images?.front?.find((img) => img.setting === "1426w")?.src,
    },
    {
      srcSet: images?.back
        ?.map((img) => `${img.src} ${img.setting}`)
        .join(", "),
      small: images?.back?.find((img) => img.setting === "500w")?.src,
      large: images?.back?.find((img) => img.setting === "1426w")?.src,
    },
  ];
  console.log("Data source:", dataSource);

  return (
    <ReactSlick
      {...{
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      }}
      {...rsProps}
    >
      {dataSource.map((src, index) => (
        <div key={index}>
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Versace",
                isFluidWidth: true,
                src: src.small,
                srcSet: src.srcSet,
                sizes:
                  "(max-width: 600px) 80vw, (max-width: 1200px) 50vw, 400px",
              },
              largeImage: {
                src: src.large,
                width: 1426,
                height: 2000,
              },
              enlargedImagePosition: screenSize.isMobile ? "over" : "beside",
              enlargedImageContainerDimensions: screenSize.isMobile
                ? { width: "150%", height: "150%" }
                : { width: "200%", height: "100%" },
              lensStyle: {
                backgroundColor: "rgba(0,0,0,.4)",
                width: screenSize.isMobile ? "80px" : "150px",
                height: screenSize.isMobile ? "80px" : "150px",
              },
            }}
            {...rimProps}
          />
        </div>
      ))}
    </ReactSlick>
  );
};

export default ReactSlickExample;
