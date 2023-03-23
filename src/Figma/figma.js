import * as React from "react";
import styles from "./figma.module.css";
import { MdMenu } from "react-icons/md";
import { useState } from "react";

export default function Figma() {


    
  return (
    // const [show, setshow]=useState(false);
    <div>
      <div className={styles.header}>
        <a href="#default" className={styles.logo}>
          Onclick
        </a>
        <div className={styles.header_right}>
          <a className={styles.active} href="#home">
            Home
          </a>
          <a href="#Contact">Contact</a>
          <a href="#Serivces">Serivces</a>
          <a href="#About Us">About Us</a>
          <a href="#Login">Login</a>
          <a href="# Sign Up"> Sign Up</a>
        </div>
      </div>
    
    </div>
  );
}
