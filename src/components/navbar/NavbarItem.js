import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@mui/material";
import styles from "./navbarItem.module.css";
import React, { useEffect, useState } from "react";
const NavbarItem = (props) => {
  // const [isnow, setisnow] = useState(false);
  // const listenToPopstate = () => {
  //   const winPath = window.location.hash;
  //   if (winPath === props.href) {
  //     setisnow(true);
  //   } else {
  //     setisnow(false);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("popstate", listenToPopstate);
  //   return () => {
  //     window.removeEventListener("popstate", listenToPopstate);
  //   };
  // }, []);

  return (
    <a href={props.href}>
      {/* className={isnow ? styles.itemIsonselected : styles.item}*/}
      <div className={styles.item}>
        <Typography
          variant="h6"
          style={{ fontFamily: "Josefin Sans", fontWeight: "bold" }}
        >
          <FontAwesomeIcon icon={props.icon}></FontAwesomeIcon> {props.name}
        </Typography>
      </div>
    </a>
  );
};
export default NavbarItem;
