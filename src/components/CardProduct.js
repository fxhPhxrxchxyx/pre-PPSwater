import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import { borderRadius } from "@mui/system";
import React, { useState } from "react";
import style from "../styles/ProductCard.module.css";

const CardProduct = ({ detail }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Stack width="100%" spacing={2} alignContent="center">
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
            <img src={detail.image} />
          </div>
          <div className={style.contentBx}>
            <h2 style={{ fontFamily: "Josefin Sans" }}>PPS {detail.title}</h2>
            {/* <div className={style.size}>
              <h3>Size :</h3>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
            </div> */}
            <div className={style.color}>
              <h3>Cover Color :</h3>
              {detail.colors.map((color) => (
                <span style={{ backgroundColor: color }}></span>
              ))}
              {/* <span style={{ backgroundColor: detail.colors[0] }}></span> */}
            </div>
            <Box
              onClick={handleOpen}
              style={{
                backgroundColor: "#fff",
                borderRadius: "20px",
                padding: "3px",
              }}
              className={style.boxinfo}
            >
              <h3>คลิกเพื่อดูรายละเอียดเพิ่มเติม</h3>
              ผลิตแบรนด์เพิ่มพูนทรัพย์
              <br />
              และ รับผลิตในแบรนด์ลูกค้า
            </Box>
            {/* <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              {/* <Box sx={(borderRadius = "15px")}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </Typography>
              </Box> 
            </Modal> 
            ต้องแก้ก่อนนนนนนนนน
            */}
            {/* <Stack alignItems="center" gap="10px">
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
            </Stack> */}
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
