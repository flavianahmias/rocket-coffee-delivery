import React from "react";
import styles from "./styles.module.scss";

function CounterButton(props) {
  const { quantity, setQuantity } = props;
  return (
    <div className={styles.counter}>
      <button onClick={() => setQuantity(quantity - 1)} disabled={quantity === 1}>
        -
      </button>
      <span>{quantity}</span>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
    </div>
  );
}

export default CounterButton;
