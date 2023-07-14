import React from "react";
import styles from "./styles.module.scss";
import { ReactComponent as Logo } from "../../assets/icons/Logo.svg";
import { MdLocationPin } from "react-icons/md";
import { BsFillCartFill } from "react-icons/bs";

function Header() {
  return (
    <header className={styles.content}>
      <Logo className={styles.logo} />

      <div className={styles.options}>
        <div className={styles.location}>
          <MdLocationPin /> <span>Manaus, AM</span>
        </div>

        <button className={styles.car}>
          <BsFillCartFill />
        </button>
      </div>
    </header>
  );
}

export default Header;
