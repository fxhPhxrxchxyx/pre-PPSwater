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
    image: image220cc,
    title: "cup 220 cc",
    colors: ["#FFFFFF"],
    description:
      "น้ำถ้วยขนาดบรรจุ 220 cc แก้วผลิตจากพลาสติกPP 1ลังบรรจุ 48ถ้วย พร้อมหลอด รัปประกันไม่มีน้ำรั่วซึมในทุกกล่องมั่นใจในคุณภาพ รับผลิตในแบรนด์ลูกค้าตามแบบที่ลูกค้าต้องการ สามารถทำได้มากกว่า 1 สี",
  },
  {
    image: image350cc,
    title: "bottle 350 cc",
    colors: [
      "#FFFFFF",
      "#303030",
      "#592f2a",
      "#a8832c",
      "#e5c736",
      "#508efc",
      "#3558cf",
      "#6f4a9d",
      "#e658aa",
      "#bac94e",
      "#6cb640",
      "#c90521",
      "#e37ae3",
    ],
    description:
      "บรรจุขวด PET ใสชนิดกลม เป็นทรงกระปุกลอน สวมสลากตราเพิ่มพูนทรัพย์ ขวดหนาใสแข็งแรงทนทานไม่เสียรูปทรงง่าย ขนาดบรรจุ 350 cc แพ็คละ 12 ขวด รับผลิตในแบรนด์ลูกค้าทั้งแบบสวมสลากและสกรีนบนขวด รูปแบบที่รับผลิต กระปุกลอนและกระปุกลายเพรช",
  },
  {
    image: image600cc,
    title: "bottle 600 cc",
    colors: ["#FFFFFF"],
    description:
      "บรรจุขวด PET ใสชนิดกลม รูปแบบ กลมลอน สวมสลากตราเพิ่มพูนทรัพย์ ขวดหนาใสแข็งแรงทนทานไม่เสียรูปทรงง่าย ขนาดบรรจุ 600 cc แพ็คละ 12 ขวด รับผลิตในแบรนด์ลูกค้าทั้งแบบสวมสลากและสกรีนบนขวด รูปแบบที่รับผลิต กลมลอน กลมเรียบ กลมเกลียว",
  },
  {
    image: image1500cc,
    title: "bottle 1500 cc",
    colors: ["#FFFFFF"],
    description:
      "บรรจุขวด PETใส รูปแบบกลมเกลียว 1 แพ็คบรรจุ 6 ขวด สวมสลากตราเพิ่มพูนทรัพย์ ขวดหนาใสแข็งแรงทนทานไม่เสียรูปทรงง่าย ขนาดบรรจุ 1500 cc",
  },

  {
    image: imageggalonblue,
    title: "galon blue 18.9 L",
    colors: ["#0066df"],
    description:
      "น้ำ 18.9ลิตร แบรนด์เพิ่มพูนทรัพย์ บรรจุในถังใสสีฟ้าชนิดกลม Polycarbonates(PC) ตัวถังสามารคว่ำบนเครื่องทำน้ำร้อนและน้ำเย็นได้ แข็งแรงทนทานไม่ตกแตกหรือชำรุดได้ง่ายและไม่ยุบตัวง่ายเมื่อเจอความร้อนหรือแรงดัน น้ำทุกหยดใสสะอาดมีคุณภาพไม่เปลี่ยนแปลงตั้งแต่โรงงานผลิตจนถึงมือลูกค้า ฝาที่ปิดปากถังเป็นฝาชนิดดึงใช้ครั้งเดียว มั่นใจในคุณภาพมั่นใจในน้ำดื่มของเรา หมายเหตุลูกค้าต้องมัดจำถังละ 300บาทต่อใบ",
  },
  {
    image: imageggalonwhite,
    title: "galon white 20 L",
    colors: ["#FFFFFF"],
    description:
      "น้ำ 20 ลิตรบรรจุในถังขาวขุ่นชนิดกลม Polyethylene (PE) แบรนด์เพิ่มพูนทรัพย์  แข็งแรงทนทาน เหมาะสำหรับการคว่ำบนเครื่องทำน้ำร้อนและน้ำเย็น ไม่ยุบตัวง่าย ปากภาชนะมีซิลเพื่อรักษาคุณภาพจนถึงมือลูกค้า หมายเหตุลูกค้าต้องมัดจำถังละ 100บาทต่อใบ ",
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
            {imagelist1.map((detail) => (
              <CardProduct detail={detail} />
            ))}
          </Carousel>
          {/* <Carousel
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
          </Carousel> */}
          <Box marginTop={4}>
            <img
              alt="map"
              style={{
                width: "1136px",
                height: "auto",
                borderRadius: "25px",
                marginBottom: "20px",
              }}
              src={require("../image/produce.jpg")}
            />
            <h2>1 กำหนดรายละเอียดขององค์ประกอบขวดน้ำดื่มที่ต้องการ</h2>
            <h3>
              • จำนวนน้ำดื่มขั้นต่ำในการสั่งผลิต 300 โหล <br />
              • ขนาดบรรจุ 350cc, 500cc หรือ 600cc <br />• สีฝา และรูปทรงขวด
              <br /> • รูปแบบสลาก เป็นแบบสวมหรือสกรีน
            </h3>
            <h2>2 ติดต่อเราเพื่อยื่นขอใบเสนอราคา</h2>

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
                <h3>
                  แจ้งจำนวนที่ต้องการเพื่อขอรับใบเสนอราคา
                  พร้อมแจ้งรายละเอียดขององค์ประกอบขวดน้ำดื่มที่ต้องการ (ข้อ 1)
                  พร้อมแจ้งรายละเอียดของลูกค้า
                  <br />• ชื่อผู้ติดต่อ เบอร์โทร Email <br />• ชื่อบริษัท
                  ที่อยู่ เลขประจำตัวผู้เสียภาษี ที่ใช้สำหรับเปิดบิล
                  <br /> • ที่อยู่ในการจัดส่งผ่านทาง Email : ppswater@yahoo.com
                  หรือ LINE Offical PPS Water
                  <br />
                  (สามารถสอบถามข้อมูลเพิ่มเติมได้ที่ LINE Offical PPS Water และ
                  Tel: 081-842-2554, 081-985-3410)
                </h3>
              </Box>
            </Stack>
            <h2>3 ยืนยันการสั่งซื้อ</h2>
            <h3>
              เมื่อลูกค้าเซ็นยืนยันสั่งซื้อและเซ็นใบเสนอราคามาเรียบร้อย
              ลูกค้าจะต้องชำระเงินครั้งที่1เพื่อเป็นการยืนยันสั่งซื้อเฉพาะค่าบล็อกและฉลากเต็มจำนวน
              และค่าน้ำดื่มบรรจุขวด 30% และ
              จะต้องทำการชำระอีกครั้งในส่วนที่เหลือก่อนส่งมอบสินค้า
            </h3>
            <h2>4 จดเลขทะเบียน อ.ย.</h2>
            <h3>
              ลูกค้าจะต้องแจ้งรายละเอียดดังต่อไปนี้เพื่อให้ทางเราจะนำไปขอเลข
              อ.ย. กับกระทรวงสาธารสุขจังหวัดนครปฐมให้ (ฟรีไม่มีค่าใช้จ่าย){" "}
              <br />• สำเนา หนังสือรับรองบริษัท หรือ สำเนาทะเบียนพาณิชย์ร้านฯ
              <br /> • สำเนา บัตรประชาชน (กรณีขอในนามบุคคลธรรมดา)
              <br /> • ชื่อน้ำดื่มของลูกสะกดเป็นภาษาไทย และ/หรือ ภาษาอังกฤษ
              (เช่น น้ำดื่มตราคุณภาพดี ลูกค้าสามารถตั้งเองได้)
            </h3>
            <h2>5 การทำฉลาก</h2>
            <h3>
              • ลูกค้าสามารถออกแบบเองได้โดยส่งไฟล์เป็น photoshop(.ps), Adobe
              Illustrator(.Ai) , รูปภาพที่มีขนาดใหญรายละเอียดชัดเจน(.jpg or
              .png) โดย ลูกค้าจะต้องเว้นที่ไว้ 20%
              สำหรับให้ทางเราจัดวางข้อมูลที่จำเป็นต้องมีบนฉลากเช่น
              ชื่อบริษัทลูกค้า, ชื่อผู้ผลิต , เลขที่อ.ย. เป็นต้น <br />•
              ลูกค้าสมารถให้ทางเราวาง layoutแบบมาตรฐานอย่างง่าย
              ให้ฟรีไม่มีค่าใช้จ่าย โดยทางลูกค้าจะต้องส่งlogoมาให้ (File AI, png
              หรือ JPG ควรมีขนาดใหญ่รายละเอียดชัดเจน) ถ้าลูกค้าต้องการที่จะกำหนด
              ชื่อข้อความหรือช่องทางการติดต่อของลูกค้า สามารถแนบมากับไฟล์logo
              ของลูกค้า โดยกำหนดฟอนต์ที่ต้องการมาด้วย
              <h5>
                *หมายเหตุ ทางลูกค้าจะต้องมี Logo
                อยู่แล้วโดยทางเราไม่ได้วาดขึ้นใหม่ หากให้ออกแบบ logo
                จะมีค่าใช้จ่ายเพิ่มเติม
              </h5>
            </h3>
            <h2>6 ยืนยันแบบฉลาก และ ผลิตบล็อคสี</h2>
            <h3>
              •ลูกค้าสามารถแก้แบบได้ก่อนทำการผลิตบล็อค 2 ครั้ง
              โดยไม่มีค่าใช้จ่าย
              โดยทางเราจะแจ้งให้ทราบล่วงหน้าว่าสามารถแก้ได้ถึงเมื่อไหร่
              <br />
              •หลังผลิตแล้วหากลูกค้าต้องการแก้แบบ จะมีค่าแกะบล็อคใหม่
            </h3>
            <h2>7 ผลิต และบรรจุน้ำดื่ม</h2>
            <h2>8 ส่งสินค้า</h2>
            <h3>
              • ในการสั่งครั้งแรก : ภายในระยะเวลา 30 วันหลังวันที่สั่ง <br />•
              ในการสั่งครั้งต่อ ๆ ไป : ภายในระยะเวลา 10-14 วันหลังวันที่สั่ง
              <br /> • ค่าใช้จ่ายในการส่งสินค้า
              <br />o รับหน้าโรงงาน ไม่มีค่าขนส่ง
              <br /> o นครปฐม : ส่งฟรี <br />o จังหวัดอื่นๆ :
              มีค่าใช้จ่ายเพิ่มเติมตามระยะทาง
            </h3>
          </Box>
        </Stack>
      </Container>
    </div>
  );
};

export default Home;
