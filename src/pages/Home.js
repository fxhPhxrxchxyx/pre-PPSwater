import React from "react";
import CardProduct from "../components/CardProduct";
import image350cc from "../image/IMG_4214.JPG";
import { Carousel } from "@trendyol-js/react-carousel";
import { Container, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
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
            {imagelist.map((image) => (
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
            {imagelist.map((image) => (
              <CardProduct image={image} />
            ))}
          </Carousel>
        </Stack>
      </Container>
    </div>
  );
};

export default Home;
