import React from "react";
import CardProduct from "../components/CardProduct";
import image220cc from "../image/220.png";
import image350cc from "../image/350.png";
import image600cc from "../image/600th.png";
import image1500cc from "../image/1500.png";
import imageggalonblue from "../image/galonblue.png";
import imageggalonwhite from "../image/galonwhite.png";
import { Carousel } from "@trendyol-js/react-carousel";
import { Container, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const imagelist1 = [
  {
    image: image350cc,
    title: "bottle 350 cc",
    colors: ["#FFFFFF", "#444"],
    description: "Lorem Ipsum",
  },
  {
    image: image600cc,
    title: "bottle 600 cc",
    colors: ["#FFFFFF"],
    description: "Lorem Ipsum",
  },
  {
    image: image1500cc,
    title: "bottle 1500 cc",
    colors: ["#FFFFFF"],
    description: "Lorem Ipsum",
  },
  {
    image: image220cc,
    title: "cup 220 cc",
    colors: ["#FFFFFF", "#444"],
    description: "Lorem Ipsum",
  },
  {
    image: imageggalonblue,
    title: "galon blue 20 L",
    colors: ["#FFFFFF"],
    description: "Lorem Ipsum",
  },
  {
    image: imageggalonwhite,
    title: "galon white 20 L",
    colors: ["#FFFFFF"],
    description: "Lorem Ipsum",
  },
];
const imagelist2 = [
  // image350cc,
  // image600cc,
  // image1500cc,
  // imageggalonblue,
  // imageggalonwhite,
];

const Home = () => {
  return (
    <div>
      <Container>
        <Stack spacing={10}>
          <Carousel
            leftArrow={
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </Box>
            }
            show={3}
            slide={3}
            swiping={true}
            rightArrow={
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </Box>
            }
          >
            {imagelist1.map((detail) => (
              <CardProduct detail={detail} />
            ))}
          </Carousel>
          <Carousel
            leftArrow={
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </Box>
            }
            show={3}
            slide={1}
            swiping={true}
            rightArrow={
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </Box>
            }
          >
            {imagelist2.map((image) => (
              <CardProduct image={image} />
            ))}
          </Carousel>
        </Stack>
      </Container>
    </div>
  );
};

export default Home;
