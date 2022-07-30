import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Carousel } from "@trendyol-js/react-carousel";
import React from "react";
import Map from "../components/Map";

const About = () => {
  return (
    <Container>
      <Box
        marginBottom={4}
        display="flex"
        justifyContent="center"
        maxWidth="1200px"
      >
        <Carousel
          defaultWait={0}
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
          show={1}
          slide={1}
          delay={2000}
          swiping={true}
          rightArrow={
            <Box
              style={{ display: "flex", alignItems: "center", height: "100%" }}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </Box>
          }
        >
          <img
            alt="pps"
            style={{ width: "1136px", height: "auto", pointerEvents: "none" }}
            src={require("../image/ppssalogan.jpg")}
          />
          <img
            alt="free"
            style={{ width: "1136px", height: "auto", pointerEvents: "none" }}
            src={require("../image/freeservice.jpg")}
          />
          <img
            alt="oem"
            style={{ width: "1136px", height: "auto", pointerEvents: "none" }}
            src={require("../image/produce.jpg")}
          />
        </Carousel>
      </Box>
      <Container>
        <Typography
          variant="h4"
          textAlign="center"
          marginBottom={4}
          fontFamily={800}
          style={{ fontFamily: "IBM Plex Sans Thai" }}
        >
          ช่องทางการติดต่อ(Contact)
        </Typography>
        <Box display="flex" justifyContent="center">
          <Stack>
            <Typography
              variant="h5"
              marginBottom={2}
              color="#fff"
              fontWeight={600}
              marginLeft={4}
            >
              LINE PPS Water
            </Typography>
            <Stack flexDirection="row" gap={6}>
              <img
                src={require("../image/lineQr.jpg")}
                style={{
                  borderRadius: "15px",
                  // width: "20%",
                  width: "250px",
                  marginBottom: "30px",
                }}
              />
              <Box display="flex" alignItems="center">
                <Typography
                  variant="h6"
                  style={{ fontFamily: "IBM Plex Sans Thai" }}
                >
                  ห้างหุ้นส่วนจำกัด น้ำดื่มเพิ่มพูนทรัพย์
                  <br />
                  Tel: 081-842-2554 , 081-985-3410 <br />
                  Email: ppswater@yahoo.com
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Container>
      <hr
        style={{
          color: "rgb(116, 114, 114)",
          backgroundColor: "rgb(116, 114, 114)",
          height: 0.5,
          borderColor: "rgb(116, 114, 114)",
          width: "1000px",
          marginBottom: "60px",
        }}
      />
      <Typography
        variant="h4"
        textAlign="center"
        fontFamily={800}
        style={{ fontFamily: "IBM Plex Sans Thai" }}
      >
        ประเภทน้ำดื่มของทางเพิ่มพูนทรัพย์
      </Typography>
      <Box>
        <img
          alt="product"
          style={{ width: "1136px", height: "auto", pointerEvents: "none" }}
          src={require("../image/allproduct.png")}
        />
      </Box>
      <hr
        style={{
          color: "rgb(116, 114, 114)",
          backgroundColor: "rgb(116, 114, 114)",
          height: 0.5,
          borderColor: "rgb(116, 114, 114)",
          width: "1000px",
          marginBottom: "60px",
        }}
      />

      <Typography
        variant="h4"
        textAlign="center"
        marginBottom="60px"
        fontFamily={800}
        style={{ fontFamily: "IBM Plex Sans Thai" }}
      >
        ขั้นตอนการผลิตน้ำ
      </Typography>
      <Stack
        justifyContent="center"
        flexDirection="row"
        gap={5}
        marginBottom="60px"
      >
        <img
          alt="ro"
          src={require("../image/ro.jpg")}
          style={{
            borderRadius: "50%",
            width: "150px",
            height: "150px",
            height: "auto",
            pointerEvents: "none",
          }}
        />
        <img
          alt="uv"
          src={require("../image/uv.jpg")}
          style={{
            borderRadius: "50%",
            width: "150px",
            height: "150px",
            height: "auto",
            pointerEvents: "none",
          }}
        />
      </Stack>

      <Typography
        textAlign="center"
        marginBottom="60px"
        style={{ fontFamily: "IBM Plex Sans Thai" }}
      >
        น้ำดิบของเราเป็นน้ำประปา โดยผ่านระบบการกรอง คาร์บอน เรซิน
        และเมมเบรนฟิลเตรชั่น(Membrane filtration) <br />
        ฆ่าเชื้อด้วยแสงอัลตราไวโอเลต น้ำทุกขวดผ่านมาตรฐานที่อ.ย.กำหนด
        มั่นใจคุณภาพ มั่นใจน้ำดื่มของเรา
      </Typography>

      <hr
        style={{
          color: "rgb(116, 114, 114)",
          backgroundColor: "rgb(116, 114, 114)",
          height: 0.5,
          borderColor: "rgb(116, 114, 114)",
          width: "1000px",
          marginBottom: "60px",
        }}
      />

      <Stack
        justifyContent="center"
        flexDirection="row"
        gap={6}
        marginBottom="60px"
      >
        <img
          src={require("../image/ppsplace.jpg")}
          alt="pps place"
          style={{
            borderRadius: "15px",
            width: "auto",
            height: "350px",
            pointerEvents: "none",
          }}
        />
        <Stack maxWidth="400px">
          <Typography
            variant="h4"
            textAlign="center"
            fontFamily={800}
            style={{ fontFamily: "IBM Plex Sans Thai" }}
          >
            ประวัติ PPS Water
          </Typography>
          <br />
          ห้างหุ้นส่วนจำกัด น้ำดื่มเพิ่มพูนทรัพย์ ก่อตั้งเมื่อปี พ.ศ. 2554
          ประกอบธุรกิจนำดื่ม ผลิตโดยเครื่องจักรอัตโนมัติ ด้วยระบบ RO
          รีเวิร์สออสโมซิส (Reverse Osmosis System) ฆ่าเชื้อด้วย UV
          รังสีอัลตราไวโอเลต (UltraViolet) ที่ได้มาตรฐาน สะอาด ปลอดภัย
          ทุกขั้นตอน จนถึงมือผู้บริโภค
          มีใบอนุญาตผลิตอาหารและเลขที่อ.ย.ถูกต้องตามกฎหมาย
          เราผลิตน้ำดื่มในขนาดต่าง ๆ โดยมีทั้งสินค้าในแบรนด์ของเรา
          และรับจ้างผลิตให้กับลูกค้าในหลากหลายธุรกิจ มีทั้งแบบสวมสลาก
          และสกรีนขวด ให้เลือกตามความต้องการ
          และอำนวยความสะดวกในการขอใบอนุญาตเลขที่อ.ย.ให้กับลูกค้า
          ที่ต้องการสร้างแบรนด์ของตัวเอง
          <br /> ตามสโลแกน "น้ำดื่มคุณภาพ น้ำดื่มเพิ่มพูนทรัพย์"
        </Stack>
      </Stack>
      <Typography
        variant="h4"
        textAlign="center"
        fontFamily={800}
        style={{ fontFamily: "IBM Plex Sans Thai" }}
      >
        แผนที่หจก.น้ำดื่มเพื่มพูนทรัพย์
      </Typography>
      <Container>
        <Box display="flex" gap={4} margin={8} justifyContent="center">
          <img
            alt="product"
            src={require("../image/mappps.jpg")}
            style={{
              borderRadius: "15px",
              width: "75%",
              height: "auto",
            }}
          />
          <Map />
        </Box>
      </Container>
    </Container>
  );
};

export default About;
