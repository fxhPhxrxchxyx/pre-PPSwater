import React from "react";
import CardProduct from "../components/CardProduct";
import image350cc from "../image/IMG_4214.JPG";
import { Carousel } from "@trendyol-js/react-carousel";

const imagelist = [
  image350cc,
  image350cc,
  image350cc,
  image350cc,
  image350cc,
  image350cc,
];

const Home = () => {
  return (
    <div>
      <Carousel show={3} slide={3} swiping={true}>
        {imagelist.map((image) => (
          <CardProduct image={image} />
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
