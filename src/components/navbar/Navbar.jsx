import React from "react";
import { useState } from "react";
import styles from "./Navbar.module.css";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <header className={styles.navbar}>
      <h3>LOGO</h3>
      {/* <img /> */}
      <nav>
        <ul
          className={
            nav ? [styles.menu, styles.active].join(" ") : [styles.menu]
          }
        >
          <li>
            <a href="/">Learn More</a>
          </li>
          <li>
            <a href="/">Log In</a>
          </li>
          <li>
            <a href="/">Sign Up</a>
          </li>
          <li>
            <a href="/">
              <AiOutlineSearch size={20} style={{ marginTop: "3px" }} />
            </a>
          </li>
          <li>
            <a href="/">
              <AiOutlineUser size={20} style={{ marginTop: "3px" }} />
            </a>
          </li>
        </ul>
      </nav>
      <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
        {nav ? (
          <AiOutlineClose style={{ cursor: "pointer" }} size={25} />
        ) : (
          <AiOutlineMenu style={{ cursor: "pointer" }} size={25} />
        )}
      </div>
    </header>
  );
};
