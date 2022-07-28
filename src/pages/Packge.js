import {
  Box,
  Container,
  FormHelperText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";

import CardProduct from "../components/CardProduct";
import image350cc from "../image/350lon.png";
import image350hex from "../image/350hex.png";
import image350model from "../image/350model.png";
import image500cc from "../image/500.png";
import image500lon from "../image/500m.png";
import image500เกลียว from "../image/500เกลียว.png";
import image600cc from "../image/600ตรง.png";
import image600lon from "../image/600.png";
import image600เกลียว from "../image/600เกลียว.png";

const list350 = [
  {
    image: image350cc,
    title: "กระปุก 350 cc",
    colors: [
      "#FFFFFF",
      "#303030",
      "#592f2a",
      "#a8832c",
      "#e5c736",
      "#bac94e",
      "#6cb640",
      "#508efc",
      "#3558cf",
      "#6f4a9d",
      "#e658aa",
      "#e37ae3",
      "#c90521",
    ],
    description: "",
    desbeforeClick: "รับผลิตในแบรนด์ลูกค้า",
  },
  {
    image: image350hex,
    title: "กระปุกลายเพชร 350 cc",
    colors: [
      "#FFFFFF",
      "#303030",
      "#592f2a",
      "#a8832c",
      "#e5c736",
      "#bac94e",
      "#6cb640",
      "#508efc",
      "#3558cf",
      "#6f4a9d",
      "#e658aa",
      "#e37ae3",
      "#c90521",
    ],
    description:
      "บรรจุขวด PET ใสชนิดกลม เป็นทรงกระปุกลอน สวมสลากตราเพิ่มพูนทรัพย์ ขวดหนาใสแข็งแรงทนทานไม่เสียรูปทรงง่าย ขนาดบรรจุ 350 cc แพ็คละ 12 ขวด รับผลิตในแบรนด์ลูกค้าทั้งแบบสวมสลากและสกรีนบนขวด รูปแบบที่รับผลิต กระปุกลอนและกระปุกลายเพรช",
    desbeforeClick: "รับผลิตในแบรนด์ลูกค้า",
  },
  {
    image: image350model,
    title: "กลมตรง 350 cc",
    colors: [
      "#FFFFFF",
      "#303030",
      "#592f2a",
      "#a8832c",
      "#e5c736",
      "#bac94e",
      "#6cb640",
      "#508efc",
      "#3558cf",
      "#6f4a9d",
      "#e658aa",
      "#e37ae3",
      "#c90521",
    ],
    description:
      "บรรจุขวด PET ใสชนิดกลม รูปแบบ กลมลอน สวมสลากตราเพิ่มพูนทรัพย์ ขวดหนาใสแข็งแรงทนทานไม่เสียรูปทรงง่าย ขนาดบรรจุ 600 cc แพ็คละ 12 ขวด รับผลิตในแบรนด์ลูกค้าทั้งแบบสวมสลากและสกรีนบนขวด รูปแบบที่รับผลิต กลมลอน กลมเรียบ กลมเกลียว",
    desbeforeClick: "รับผลิตในแบรนด์ลูกค้า",
  },
];

const list500 = [
  {
    image: image500cc,
    title: "กลมตรง 500 cc",
    colors: [
      "#FFFFFF",
      "#303030",
      "#592f2a",
      "#a8832c",
      "#e5c736",
      "#bac94e",
      "#6cb640",
      "#508efc",
      "#3558cf",
      "#6f4a9d",
      "#e658aa",
      "#e37ae3",
      "#c90521",
    ],
    description:
      "น้ำถ้วยขนาดบรรจุ 220 cc แก้วผลิตจากพลาสติกPP 1ลังบรรจุ 48ถ้วย พร้อมหลอด รัปประกันไม่มีน้ำรั่วซึมในทุกกล่องมั่นใจในคุณภาพ รับผลิตในแบรนด์ลูกค้าตามแบบที่ลูกค้าต้องการ สามารถทำได้มากกว่า 1 สี",
    desbeforeClick: "รับผลิตในแบรนด์ลูกค้า",
  },
  {
    image: image500lon,
    title: "กลมลอน 500 cc",
    colors: [
      "#FFFFFF",
      "#303030",
      "#592f2a",
      "#a8832c",
      "#e5c736",
      "#bac94e",
      "#6cb640",
      "#508efc",
      "#3558cf",
      "#6f4a9d",
      "#e658aa",
      "#e37ae3",
      "#c90521",
    ],
    description:
      "บรรจุขวด PET ใสชนิดกลม เป็นทรงกระปุกลอน สวมสลากตราเพิ่มพูนทรัพย์ ขวดหนาใสแข็งแรงทนทานไม่เสียรูปทรงง่าย ขนาดบรรจุ 500 cc แพ็คละ 12 ขวด รับผลิตในแบรนด์ลูกค้าทั้งแบบสวมสลากและสกรีนบนขวด รูปแบบที่รับผลิต กระปุกลอนและกระปุกลายเพรช",
    desbeforeClick: "รับผลิตในแบรนด์ลูกค้า",
  },
  {
    image: image500เกลียว,
    title: "กลมเกลียว 500 cc",
    colors: [
      "#FFFFFF",
      "#303030",
      "#592f2a",
      "#a8832c",
      "#e5c736",
      "#bac94e",
      "#6cb640",
      "#508efc",
      "#3558cf",
      "#6f4a9d",
      "#e658aa",
      "#e37ae3",
      "#c90521",
    ],
    description:
      "บรรจุขวด PET ใสชนิดกลม รูปแบบ กลมลอน สวมสลากตราเพิ่มพูนทรัพย์ ขวดหนาใสแข็งแรงทนทานไม่เสียรูปทรงง่าย ขนาดบรรจุ 600 cc แพ็คละ 12 ขวด รับผลิตในแบรนด์ลูกค้าทั้งแบบสวมสลากและสกรีนบนขวด รูปแบบที่รับผลิต กลมลอน กลมเรียบ กลมเกลียว",
    desbeforeClick: "รับผลิตในแบรนด์ลูกค้า",
  },
];

//////////////////////////////
///////////
///////
////////
////////
/////
///////

const list600 = [
  {
    image: image600cc,
    title: "กลมตรง 600 cc",
    colors: [
      "#FFFFFF",
      "#303030",
      "#592f2a",
      "#a8832c",
      "#e5c736",
      "#bac94e",
      "#6cb640",
      "#508efc",
      "#3558cf",
      "#6f4a9d",
      "#e658aa",
      "#e37ae3",
      "#c90521",
    ],
    description:
      "น้ำถ้วยขนาดบรรจุ 220 cc แก้วผลิตจากพลาสติกPP 1ลังบรรจุ 48ถ้วย พร้อมหลอด รัปประกันไม่มีน้ำรั่วซึมในทุกกล่องมั่นใจในคุณภาพ รับผลิตในแบรนด์ลูกค้าตามแบบที่ลูกค้าต้องการ สามารถทำได้มากกว่า 1 สี",
    desbeforeClick: "รับผลิตในแบรนด์ลูกค้า",
  },
  {
    image: image600lon,
    title: "กลมลอน 600 cc",
    colors: [
      "#FFFFFF",
      "#303030",
      "#592f2a",
      "#a8832c",
      "#e5c736",
      "#bac94e",
      "#6cb640",
      "#508efc",
      "#3558cf",
      "#6f4a9d",
      "#e658aa",
      "#e37ae3",
      "#c90521",
    ],
    description:
      "บรรจุขวด PET ใสชนิดกลม เป็นทรงกระปุกลอน สวมสลากตราเพิ่มพูนทรัพย์ ขวดหนาใสแข็งแรงทนทานไม่เสียรูปทรงง่าย ขนาดบรรจุ 500 cc แพ็คละ 12 ขวด รับผลิตในแบรนด์ลูกค้าทั้งแบบสวมสลากและสกรีนบนขวด รูปแบบที่รับผลิต กระปุกลอนและกระปุกลายเพรช",
    desbeforeClick: "รับผลิตในแบรนด์ลูกค้า",
  },
  {
    image: image600เกลียว,
    title: "กลมเกลียว 600 cc",
    colors: [
      "#FFFFFF",
      "#303030",
      "#592f2a",
      "#a8832c",
      "#e5c736",
      "#bac94e",
      "#6cb640",
      "#508efc",
      "#3558cf",
      "#6f4a9d",
      "#e658aa",
      "#e37ae3",
      "#c90521",
    ],
    description:
      "บรรจุขวด PET ใสชนิดกลม รูปแบบ กลมลอน สวมสลากตราเพิ่มพูนทรัพย์ ขวดหนาใสแข็งแรงทนทานไม่เสียรูปทรงง่าย ขนาดบรรจุ 600 cc แพ็คละ 12 ขวด รับผลิตในแบรนด์ลูกค้าทั้งแบบสวมสลากและสกรีนบนขวด รูปแบบที่รับผลิต กลมลอน กลมเรียบ กลมเกลียว",
    desbeforeClick: "รับผลิตในแบรนด์ลูกค้า",
  },
];
const Packge = () => {
  return (
    <Container>
      <Stack alignItems="center" gap={6} marginBottom="60px">
        <Typography
          variant="h4"
          style={{ fontFamily: "IBM Plex Sans Thai", marginTop: "20px" }}
        >
          ฝาสีต่าง ๆ
        </Typography>

        <img
          alt="pps"
          style={{
            width: "1000px",
            height: "auto",
            borderRadius: "25px",
            pointerEvents: "none",
            marginBottom: "80px",
          }}
          src={require("../image/cap.png")}
        />
        <Typography
          variant="h4"
          style={{ fontFamily: "IBM Plex Sans Thai", marginBottom: "30px" }}
        >
          รูปแบบขวดที่รับผลิตน้ำดื่ม OEM ในแบรนด์ของคุณทั้งแบบสวมฉลากและสกรีน
        </Typography>
        <Typography
          variant="h5"
          style={{
            fontFamily: "IBM Plex Sans Thai",
          }}
        >
          ขนาดบรรจุ 350 cc
        </Typography>
        <Carousel show={3}>
          {list350.map((detail) => (
            <CardProduct detail={detail} />
          ))}
        </Carousel>
        <Typography
          variant="h5"
          style={{
            fontFamily: "IBM Plex Sans Thai",
            marginTop: "50px",
          }}
        >
          ขนาดบรรจุ 500 cc
        </Typography>
        <Carousel show={3}>
          {list500.map((detail) => (
            <CardProduct detail={detail} />
          ))}
        </Carousel>
        <Typography
          variant="h5"
          style={{
            fontFamily: "IBM Plex Sans Thai",
            marginTop: "50px",
          }}
        >
          ขนาดบรรจุ 600 cc
        </Typography>
        <Carousel show={3}>
          {list600.map((detail) => (
            <CardProduct detail={detail} />
          ))}
        </Carousel>
      </Stack>
    </Container>
  );
};

export default Packge;
