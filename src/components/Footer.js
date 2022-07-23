import { FormHelperText, Stack, Typography } from "@mui/material";
import { color } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        padding: "20px",
        color: "#444",
        height: "250px",
      }}
    >
      <Stack alignItems="center">
        <Typography
          style={{ fontFamily: "IBM Plex Sans Thai", fontWeight: "800" }}
        >
          ห้างหุ้นส่วนจำกัด น้ำดื่มเพิ่มพูนทรัพย์ (สำนักงานใหญ่)
        </Typography>
        <Typography style={{ fontFamily: "IBM Plex Sans Thai" }}>
          Tel: 081-842-2554 , 081-985-3410
        </Typography>
        <Typography
          marginBottom={2}
          style={{ fontFamily: "IBM Plex Sans Thai" }}
        >
          Email: ppswater@yahoo.com
        </Typography>
        <img
          src={require("../image/lineQr.jpg")}
          style={{
            borderRadius: "15px",
            // width: "20%",
            width: "150px",
            marginBottom: "10px",
          }}
        ></img>
        <FormHelperText
          sx={{
            color: "#fff",
            fontFamily: "IBM Plex Sans Thai",
          }}
        >
          © Copyright PPS water
        </FormHelperText>
      </Stack>
    </div>
  );
};

export default Footer;
