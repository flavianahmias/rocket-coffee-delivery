import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { ReactComponent as Logo } from "../../assets/icons/Logo.svg";
import { MdLocationPin, BsFillCartFill } from "../../utils/icons";
import { useSelector } from "react-redux";

function Header() {
  const count = useSelector((state) => state.cart.value.length);
  const navigate = useNavigate();
  return (
    <header className={styles.content}>
      <Logo className={styles.logo} onClick={() => navigate("/")} />

      <div className={styles.options}>
        <div className={styles.location}>
          <MdLocationPin /> <span>Manaus, AM</span>
        </div>

        <button className={styles.cart} onClick={() => navigate("/cart")}>
          <BsFillCartFill />
          {count > 0 && <div className={styles.cartValue}>{count}</div>}
        </button>
      </div>
    </header>
  );
}

export default Header;
