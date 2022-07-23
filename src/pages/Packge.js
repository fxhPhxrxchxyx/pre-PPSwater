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
            // opacity: "0.7",
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
    </Container>
  );
};

export default Packge;
