import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Typography } from '@mui/material'
import React from 'react'
import styles from './navbarItem.module.css'
const NavbarItem = (props) => {
  return (
    <div className={styles.item}>
      <Typography variant='body1' ><FontAwesomeIcon icon={props.icon}></FontAwesomeIcon> {props.name}</Typography>
    </div>
  )
}

export default NavbarItem