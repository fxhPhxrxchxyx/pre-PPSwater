import {
  faCartShopping,
  faCircleInfo,
  faHouseChimney,
  faBottleWater,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Typography } from "@mui/material";
import React from "react";
import NavbarItem from "./NavbarItem";
import Logo from "../../image/pps.png";

const Navbar = () => {
  return (
    <Box
      sx={{
        boxShadow: "9px 9px 20px -4px rgba(0,0,0,0.57)",
        background:
          "linear-gradient(90deg, rgba(153, 189, 247, 1) 0%, rgba(142, 142, 236, 1) 73%)",
      }}
      display="flex"
      height="64px"
      justifyContent="center"
      width="100%"
      overflow="hidden"
      position="fixed"
      top="0"
      zIndex="100"
    >
      <Box
        display="flex"
        height="64px"
        alignItems="center"
        justifyContent="space-between"
        padding="0 10px"
        maxWidth="1248px"
        width="100%"
        // overflow="hidden"
        position="fixed"
        top="0"
        zIndex="100"
      >
        <img src={Logo} alt="logo" width="60px" height="55px" />

        <Box display="flex" gap="20px">
          <NavbarItem
            icon={faHouseChimney}
            name="Home"
            href="/home"
          ></NavbarItem>
          <NavbarItem
            icon={faCircleInfo}
            name="About"
            href="/about"
          ></NavbarItem>
          <NavbarItem
            icon={faBottleWater}
            name="Packge"
            href="/packge"
          ></NavbarItem>
          {/* <i class="fa-solid fa-bottle-water"></i> */}

          {/* <Typography variant='body1'><FontAwesomeIcon icon={faHouseChimney}></FontAwesomeIcon> Home</Typography>
        <Typography variant='body1'><FontAwesomeIcon icon={faCircleInfo}></FontAwesomeIcon> About</Typography>
        <Typography variant='body1'><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon> Bucket</Typography>
        <Typography variant='body1'><FontAwesomeIcon icon={faList}></FontAwesomeIcon> packege</Typography> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
