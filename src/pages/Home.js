import React from "react";
import CardProduct from "../components/CardProduct";
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
  image350cc,
  image600cc,
  image1500cc,
  imageggalonblue,
  imageggalonwhite,
];
const imagelist2 = [
  image350cc,
  image600cc,
  image1500cc,
  imageggalonblue,
  imageggalonwhite,
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
            {imagelist1.map((image) => (
              <CardProduct image={image} />
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
