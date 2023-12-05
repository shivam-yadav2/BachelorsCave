import React, { useEffect, useRef, useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Swiper from "swiper/bundle";

import HandPickedContent from "./HandPickedContent";
import "../Featured/Featured.css";

const HandPicked = () => {
  const swiperRef = useRef(null);
  useEffect(() => {
    const mySwiper = new Swiper(".slidercontainer", {
      slidesPerView: 3, // Number of slides to show at once
      spaceBetween: 20,
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
      loop: true,
    });
  }, []);
  const [slideBegOrNot, handleSlideByState] = useState({
    isFirst: true,
    isLast: false,
  });

  const slidesNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const slidesPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };
  const onSlideChange = (swiper) => {
    handleSlideByState({
      isFirst: Swiper.isBeginning,
      isLast: Swiper.isEnd,
    });
  };

  const { isLast, isFirst } = slideBegOrNot;

  useEffect(() => {
    const swiper = swiperRef.current;

    if (swiper) {
      swiper.on("slideChange", () => {
        // Check if it's the first slide
        if (swiper.isBeginning) {
          document.querySelector(".prev").classList.add("gray-button");
        } else {
          document.querySelector(".prev").classList.remove("gray-button");
        }

        // Check if it's the last slide
        if (swiper.isEnd) {
          document.querySelector(".next").classList.add("purple-button");
        } else {
          document.querySelector(".next").classList.remove("purple-button");
        }
      });
    }
  }, []);

  const Products = [
    {
      id: 1,
      name: "Room for rent",
      description: "1598, 23B, Sector 23, Chandigarh, 160023, India",
      img: "/cardImage/cardImage.png",
    },
    {
      id: 2,
      name: "Room for rent",
      description: "1598, 23B, Sector 23, Chandigarh, 160023, India",
      img: "/cardImage/cardImage.png",
    },
    {
      id: 3,
      name: "Room for rent",
      description: "1598, 23B, Sector 23, Chandigarh, 160023, India",
      img: "/cardImage/cardImage.png",
    },
    {
      id: 4,
      name: "Room for rent",
      description: "1598, 23B, Sector 23, Chandigarh, 160023, India",
      img: "/cardImage/cardImage.png",
    },
    {
      id: 5,
      name: "Room for rent",
      description: "1598, 23B, Sector 23, Chandigarh, 160023, India",
      img: "/cardImage/cardImage.png",
    },
    {
      id: 6,
      name: "Room for rent",
      description: "1598, 23B, Sector 23, Chandigarh, 160023, India",
      img: "/cardImage/cardImage.png",
    },
    {
      id: 7,
      name: "Room for rent",
      description: "1598, 23B, Sector 23, Chandigarh, 160023, India",
      img: "/cardImage/cardImage.png",
    },
    {
      id: 8,
      name: "Room for rent",
      description: "1598, 23B, Sector 23, Chandigarh, 160023, India",
      img: "/cardImage/cardImage.png",
    },
  ];

  return (
    <>
      <div className="container-fluid">
        <div className="post-box">
          <div className="post-heading">
            <div className="heading-box">
              <h2 className="second-heading">Hand picked</h2>
              <div className="pagination-slide">
                <p className="swiper-paginations"></p>
                <div className="bs-icons">
                  <ArrowLeftIcon
                    fontSize="large"
                    onClick={slidesPrev}
                    style={{ color: "#DEDEDE" }}
                    className={`prev ${isFirst ? "disabled" : ""}`}
                  />
                  <ArrowRightIcon
                    fontSize="large"
                    className={`next ${isLast ? "disabled" : ""}`}
                    onClick={slidesNext}
                    style={{ color: "#5E17EB " }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="post-conatin">
            <div className="slidercontainer">
              <div className="swiper-wrapper">
                {Products.map((item) => {
                  return (
                    <div className="swiper-slide" key={item.id}>
                      <HandPickedContent
                        key={item.id}
                        image={item.img}
                        title={item.name}
                        description={item.description}
                        alt={item.name}
                      />
                    </div>
                  );
                })}
              </div>
              {/* <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HandPicked;
