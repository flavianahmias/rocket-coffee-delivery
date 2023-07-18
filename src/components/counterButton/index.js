import React from "react";
import styles from "./styles.module.scss";

function CounterButton(props) {
  const { quantity, setQuantity, id } = props;
  return (
    <div className={styles.counter}>
      <button
        onClick={() => setQuantity(quantity - 1, id && id)}
        disabled={quantity === 1}
      >
        -
      </button>
      <span>{quantity}</span>
      <button onClick={() => setQuantity(quantity + 1, id && id)}>+</button>
    </div>
  );
}

export default CounterButton;
