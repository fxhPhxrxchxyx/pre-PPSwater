import { Box, Button, Grid, Modal, Stack, Typography } from "@mui/material";
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
            <h2 style={{ fontFamily: "Josefin Sans" }}>{detail.title}</h2>
            <div className={style.color}>
              <h3>Cover Color :</h3>
            </div>

            <div
              className={style.color}
              style={{
                display: "flex",
                flexWrap: "wrap",
                marginBottom: "20px",
              }}
            >
              {detail.colors.map((color) => (
                <div style={{ backgroundColor: color }}></div>
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

              {detail.desbeforeClick}
            </Box>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "15px",
                  padding: "20px",
                  maxWidth: "800px",
                }}
              >
                <Typography
                  id="modal-modal-title"
                  variant="h5"
                  component="h2"
                  textAlign="center"
                  sx={{
                    fontFamily: "IBM Plex Sans Thai",
                  }}
                >
                  {detail.title}
                </Typography>
                <Grid container spacing={2}>
                  <Grid xs={6} md={6}>
                    <img
                      alt="pps"
                      style={{
                        width: "400px",
                        height: "auto",
                        pointerEvents: "none",
                      }}
                      src={detail.image}
                    />
                    <Typography
                      id="modal-modal-description"
                      sx={{ m: 4, fontFamily: "IBM Plex Sans Thai" }}
                    >
                      {detail.description}
                    </Typography>
                  </Grid>
                  <Grid xs={6} md={6}></Grid>
                </Grid>
              </Box>
            </Modal>

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
