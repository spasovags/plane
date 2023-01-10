import React from 'react'
import styles from '../styles/Footer.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faDev
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={`${styles["footer-container"]}`} >
      <div className={`${styles["footer-sm-icons"]}`} >
       <FontAwesomeIcon
        icon={faYoutube} 
        className={`${styles["iconYoutube"]}`}/>
       <FontAwesomeIcon
        icon={faLinkedin}
        className={`${styles["iconLinkedin"]}`}/>              
       <FontAwesomeIcon
        icon={faGithub}
        className={`${styles["iconGithub"]}`}/>
       <FontAwesomeIcon
        icon={faDev}
        className={`${styles["iconDev"]}`}/>  
      </div> 
      <div className={`${styles["footer-info"]}`} >
      
      </div>     
    </div>      
  )
}

export default Footer