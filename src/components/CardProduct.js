import { Box, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import style from "../styles/ProductCard.module.css";

const CardProduct = ({ image = "" }) => {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  return (
    <Stack width={200} spacing={2}>
      {/* <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <img src={image} alt="350cc" style={{ width: "100%" }} />
      </Paper> */}
      {/* <CardMedia
        component="img"
        sx={{ borderRadius: "10px" }}
        image={image}
        alt="botton 350cc"
      /> */}
      <Box className={style.container}>
        <div className={style.card}>
          <div className={style.imgBx}>
            <img src={require("../../src/image/bottle.png")} />
          </div>
          <div className={style.contentBx}>
            <h2>PPS Bottle</h2>
            {/* <div className={style.size}>
              <h3>Size :</h3>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
            </div> */}
            <div className={style.color}>
              <h3>Cover Color :</h3>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <Stack alignItems="center" gap="10px">
              <a
                href="#"
                onMouseEnter={() => setHover1(true)}
                onMouseLeave={() => setHover1(false)}
              >
                {hover1 ? "300" : "retail(ขายปลีก)"}
              </a>
              <a
                href="#"
                onMouseEnter={() => setHover2(true)}
                onMouseLeave={() => setHover2(false)}
              >
                {hover2 ? "300" : "wholesale(ขายส่ง)"}
              </a>
            </Stack>
          </div>
        </div>
      </Box>
      {/* <Button variant="contained" sx={{ borderRadius: "10px" }}>
        retail(ขายปลีก)
      </Button>
      <Button variant="contained" sx={{ borderRadius: "10px" }}>
        wholesale(ขายส่ง)
      </Button> */}
    </Stack>
  );
};

export default CardProduct;
