import {
  Box,
  Container,
  FormHelperText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const Packge = () => {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: "60%",
            backgroundColor: "#fff",
            width: "60%",
            borderRadius: "15px",
            padding: 5,
          }}
        >
          <Stack alignItems="center">
            <div style={{ margin: "20px" }}>
              <Typography
                variant="h4"
                style={{ fontFamily: "IBM Plex Sans Thai" }}
              >
                Packge
              </Typography>
            </div>
            <Typography></Typography>
          </Stack>
        </Box>
      </div>
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
              <br />• ชื่อผู้ติดต่อ เบอร์โทร Email <br />• ชื่อบริษัท ที่อยู่
              เลขประจำตัวผู้เสียภาษี ที่ใช้สำหรับเปิดบิล
              <br /> • ที่อยู่ในการจัดส่งผ่านทาง Email : ppswater@yahoo.com หรือ
              LINE Offical PPS Water
              <br />
              (สามารถสอบถามข้อมูลเพิ่มเติมได้ที่ LINE Offical PPS Water และ Tel:
              081-842-2554, 081-985-3410)
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
          ลูกค้าจะต้องแจ้งรายละเอียดดังต่อไปนี้เพื่อให้ทางเราจะนำไปขอเลข อ.ย.
          กับกระทรวงสาธารสุขจังหวัดนครปฐมให้ (ฟรีไม่มีค่าใช้จ่าย) <br />• สำเนา
          หนังสือรับรองบริษัท หรือ สำเนาทะเบียนพาณิชย์ร้านฯ
          <br /> • สำเนา บัตรประชาชน (กรณีขอในนามบุคคลธรรมดา)
          <br /> • ชื่อน้ำดื่มของลูกสะกดเป็นภาษาไทย และ/หรือ ภาษาอังกฤษ (เช่น
          น้ำดื่มตราคุณภาพดี ลูกค้าสามารถตั้งเองได้)
        </h3>
        <h2>5 การทำฉลาก</h2>
        <h3>
          • ลูกค้าสามารถออกแบบเองได้โดยส่งไฟล์เป็น photoshop(.ps), Adobe
          Illustrator(.Ai) , รูปภาพที่มีขนาดใหญรายละเอียดชัดเจน(.jpg or .png)
          โดย ลูกค้าจะต้องเว้นที่ไว้ 20%
          สำหรับให้ทางเราจัดวางข้อมูลที่จำเป็นต้องมีบนฉลากเช่น ชื่อบริษัทลูกค้า,
          ชื่อผู้ผลิต , เลขที่อ.ย. เป็นต้น <br />• ลูกค้าสมารถให้ทางเราวาง
          layoutแบบมาตรฐานอย่างง่าย ให้ฟรีไม่มีค่าใช้จ่าย
          โดยทางลูกค้าจะต้องส่งlogoมาให้ (File AI, png หรือ JPG
          ควรมีขนาดใหญ่รายละเอียดชัดเจน) ถ้าลูกค้าต้องการที่จะกำหนด
          ชื่อข้อความหรือช่องทางการติดต่อของลูกค้า สามารถแนบมากับไฟล์logo
          ของลูกค้า โดยกำหนดฟอนต์ที่ต้องการมาด้วย
          <h5>
            *หมายเหตุ ทางลูกค้าจะต้องมี Logo อยู่แล้วโดยทางเราไม่ได้วาดขึ้นใหม่
            หากให้ออกแบบ logo จะมีค่าใช้จ่ายเพิ่มเติม
          </h5>
        </h3>
        <h2>6 ยืนยันแบบฉลาก และ ผลิตบล็อคสี</h2>
        <h3>
          •ลูกค้าสามารถแก้แบบได้ก่อนทำการผลิตบล็อค 2 ครั้ง โดยไม่มีค่าใช้จ่าย
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
    </Container>
  );
};

export default Packge;
