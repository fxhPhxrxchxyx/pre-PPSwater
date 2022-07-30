import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import style from "../styles/ProductCard.module.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ChildModal({ detail }) {
  const [open, setOpen] = React.useState(null);

  const handleClose = () => {
    setOpen(null);
  };
  console.log(open, detail.label);
  return (
    <React.Fragment>
      <Box display="flex" gap={2} justifyContent="center" cursor="pointer">
        {detail.label && (
          <Button
            onClick={() => setOpen(detail.label)}
            variant="contained"
            sx={{
              borderRadius: "10px",
              backgroundColor: "#dce9fe",
              color: "#444",
              "&:hover": { backgroundColor: "#b6dcff" },
            }}
          >
            สวมสลาก
          </Button>
        )}
        {detail.screen && (
          <Button
            onClick={() => setOpen(detail.screen)}
            variant="contained"
            sx={{
              borderRadius: "10px",
              backgroundColor: "#dce9fe",
              color: "#444",
              "&:hover": { backgroundColor: "#b6dcff" },
            }}
          >
            สกรีน
          </Button>
        )}
      </Box>

      <Modal
        hideBackdrop
        open={open != null}
        onClose={handleClose}
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
          <FontAwesomeIcon
            icon={faXmark}
            onClick={handleClose}
            cursor="pointer"
          />
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            textAlign="center"
            sx={{
              fontFamily: "IBM Plex Sans Thai",
            }}
          >
            ตัวอย่าง mock up
          </Typography>
          <img
            alt="mockup"
            style={{
              width: "320px",
              height: "auto",
              borderRadius: "25px",
              marginBottom: "20px",
              pointerEvents: "none",
            }}
            src={open}
          />
        </Box>
      </Modal>
    </React.Fragment>
  );
}
const CardProduct = ({ detail, showMockup }) => {
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
                marginBottom: "15px",
                gap: "4px",
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
                  backgroundColor: "#f7fafd",
                  borderRadius: "15px",
                  padding: "20px",
                  maxWidth: "800px",
                }}
              >
                <FontAwesomeIcon
                  icon={faXmark}
                  onClick={handleClose}
                  cursor="pointer"
                />
                <Typography
                  id="modal-modal-title"
                  variant="h5"
                  component="h2"
                  textAlign="center"
                  marginBottom="20px"
                  sx={{
                    fontFamily: "IBM Plex Sans Thai",
                  }}
                >
                  {detail.title}
                </Typography>
                <Stack direction="row" spacing={2}>
                  <img
                    alt="pps"
                    style={{
                      width: "400px",
                      height: "auto",
                      pointerEvents: "none",
                    }}
                    src={detail.image}
                  />
                  <Stack>
                    <Typography
                      textAlign="center"
                      variant="h6"
                      sx={{
                        fontFamily: "IBM Plex Sans Thai",
                        maxHeight: "280px",
                        alignItems: "center",
                        marginBottom: "40px",
                      }}
                    >
                      {detail.description}
                    </Typography>

                    <Stack justifyContent="space-between">
                      <Typography
                        variant="h5"
                        sx={{
                          fontFamily: "IBM Plex Sans Thai",
                          fontWeight: "bold",
                        }}
                        textAlign="center"
                      >
                        {detail.capcolor}
                      </Typography>
                      <Box>
                        <div
                          className={style.color}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            flexWrap: "wrap",
                            marginTop: "10px",
                            marginBottom: "20px",
                            gap: "4px",
                          }}
                        >
                          {detail.colors.map((color) => (
                            <div style={{ backgroundColor: color }}></div>
                          ))}
                        </div>
                        {showMockup && (
                          <Fragment>
                            <Typography
                              variant="h6"
                              sx={{
                                fontFamily: "IBM Plex Sans Thai",
                                fontWeight: "bold",
                                marginBottom: "10px",
                              }}
                              textAlign="center"
                            >
                              ตัวอย่างmock upขวด
                            </Typography>
                            <ChildModal detail={detail} />
                          </Fragment>
                        )}
                      </Box>

                      {/* <Box
                        display="flex"
                        gap={2}
                        justifyContent="center"
                        cursor="pointer"
                      >
                        <Button
                          variant="contained"
                          sx={{
                            borderRadius: "10px",
                            backgroundColor: "#dce9fe",
                            color: "#444",
                          }}
                          onClick={<ChildModal />}
                        >
                          สวมสลาก
                        </Button>
                        <Button
                          variant="contained"
                          sx={{
                            borderRadius: "10px",
                            backgroundColor: "#dce9fe",
                            color: "#444",
                          }}
                        >
                          สกรีน
                        </Button>
                      </Box> */}
                    </Stack>
                  </Stack>
                </Stack>
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
