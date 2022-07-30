import { Container, Stack, Typography } from "@mui/material";
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

import lable350lon from "../image/350lonbg.png";
import screen350lon from "../image/350lons.png";
import s350hex from "../image/350hexs.png";
import lable350 from "../image/350bg.png";
import screen350 from "../image/350s.png";
import s500 from "../image/500s.png";
import l500lon from "../image/500lonbg.png";
import s500เกลียว from "../image/500เกลียวs.png";
import l500เกลียว from "../image/500เกลียวbg.png";
import s600 from "../image/600s.png";
import l600lon from "../image/600lonbg.png";
import s600lon from "../image/600lonbg.png";
import s600เกลียว from "../image/600เกลียวs.png";
import l600เกลียว from "../image/600เกลียวbg.png";
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
      "#e37ae3",
      "#e658aa",
      "#f07e25",
      "#c90521",
    ],
    description:
      "ขวด 350cc ทรงคลาสสิก รุ่นยอดนิยม รับผลิตแบบสวมสลาก พกพาสะดวกแข็งแรงทนทานจับถนัดมือ",
    desbeforeClick: "รับผลิตในแบรนด์ลูกค้า",
    capcolor: "ฝาสีต่าง ๆ ที่เลือกได้ในแบรนด์ของคุณ",
    screen: screen350lon,
    label: lable350lon,
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
      "#e37ae3",
      "#e658aa",
      "#f07e25",
      "#c90521",
    ],
    description:
      "ขวด 350cc ทรงกระปุกเพชร รูปทรงใหม่ สวยงามสะดุดตาพกพาสะดวก รับผลิตแบบสกรีน ",
    desbeforeClick: "รับผลิตในแบรนด์ลูกค้า",
    capcolor: "ฝาสีต่าง ๆ ที่เลือกได้ในแบรนด์ของคุณ",
    screen: s350hex,
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
      "#e37ae3",
      "#e658aa",
      "#f07e25",
      "#c90521",
    ],
    description:
      "ขวด 350cc ทรงกลมตรง รูปทรงทันสมัย จับถนัดมือ เหมาะกับการสกรีนที่ใช้พื้นที่กว้าง",
    desbeforeClick: "รับผลิตในแบรนด์ลูกค้า",
    capcolor: "ฝาสีต่าง ๆ ที่เลือกได้ในแบรนด์ของคุณ",
    screen: screen350,
    label: lable350,
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
      "#e37ae3",
      "#e658aa",
      "#f07e25",
      "#c90521",
    ],
    description:
      "ขวด 500cc ทรงกลมตรง รูปทรงทันสมัย จับถนัดมือ เหมาะกับการสกรีนที่ใช้พื้นที่กว้าง",
    desbeforeClick: "รับผลิตในแบรนด์ลูกค้า",
    capcolor: "ฝาสีต่าง ๆ ที่เลือกได้ในแบรนด์ของคุณ",
    screen: s500,
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
      "#e37ae3",
      "#e658aa",
      "#f07e25",
      "#c90521",
    ],
    description:
      "ขวด 500cc ทรงคลาสสิก รุ่นยอดนิยม รับผลิตแบบสวมสลาก พกพาสะดวกแข็งแรงทนทานจับถนัดมือ",
    desbeforeClick: "รับผลิตในแบรนด์ลูกค้า",
    capcolor: "ฝาสีต่าง ๆ ที่เลือกได้ในแบรนด์ของคุณ",
    label: l500lon,
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
      "#e37ae3",
      "#e658aa",
      "#f07e25",
      "#c90521",
    ],
    description:
      "ขวด 500cc ทรงทันสมัย รับผลิตแบบสวมสลาก พกพาสะดวกแข็งแรงทนทานจับถนัดมือ",
    desbeforeClick: "รับผลิตในแบรนด์ลูกค้า",
    capcolor: "ฝาสีต่าง ๆ ที่เลือกได้ในแบรนด์ของคุณ",
    screen: s500เกลียว,
    label: l500เกลียว,
  },
];

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
      "#e37ae3",
      "#e658aa",
      "#f07e25",
      "#c90521",
    ],
    description:
      "ขวด 600cc ทรงกลมตรง รูปทรงทันสมัย จับถนัดมือ เหมาะกับการสกรีนที่ใช้พื้นที่กว้าง",
    desbeforeClick: "รับผลิตในแบรนด์ลูกค้า",
    capcolor: "ฝาสีต่าง ๆ ที่เลือกได้ในแบรนด์ของคุณ",
    screen: s600,
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
      "#e37ae3",
      "#e658aa",
      "#f07e25",
      "#c90521",
    ],
    description:
      "ขวด 600cc ทรงคลาสสิก รุ่นยอดนิยม รับผลิตทั้งแบบสวมสลากและสกรีน พกพาสะดวกแข็งแรงทนทานจับถนัดมือ",
    desbeforeClick: "รับผลิตในแบรนด์ลูกค้า",
    capcolor: "ฝาสีต่าง ๆ ที่เลือกได้ในแบรนด์ของคุณ",
    label: l600lon,
    screen: s600lon,
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
      "#e37ae3",
      "#e658aa",
      "#f07e25",
      "#c90521",
    ],
    description:
      "ขวด 600cc ทรงทันสมัย รับผลิตแบบสวมสลาก พกพาสะดวกแข็งแรงทนทานจับถนัดมือ",
    desbeforeClick: "รับผลิตในแบรนด์ลูกค้า",
    capcolor: "ฝาสีต่าง ๆ ที่เลือกได้ในแบรนด์ของคุณ",
    screen: s600เกลียว,
    label: l600เกลียว,
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
            <CardProduct detail={detail} showMockup={true} />
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
            <CardProduct detail={detail} showMockup={true} />
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
            <CardProduct detail={detail} showMockup={true} />
          ))}
        </Carousel>
      </Stack>
    </Container>
  );
};

export default Packge;
