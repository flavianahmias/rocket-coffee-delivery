import React from "react";
import CounterButton from "../counterButton";
import styles from "./styles.module.scss";
import { BsTrash } from "react-icons/bs";

function CartListItem(props) {
  const { coffee, changeQuantity, removeItem } = props;

  return (
    <div className={styles.coffeeListItem}>
      <img src={coffee.product.image} />
      <div className={styles.item}>
        <div className={styles.itemTitle}>
          <p>{coffee.product.name}</p> <p>{coffee.product.value}</p>
        </div>
        <div className={styles.itemActions}>
          <CounterButton
            id={coffee.product.id}
            quantity={coffee.quantity}
            setQuantity={changeQuantity}
          />
          <button
            className={styles.removeButton}
            onClick={() => removeItem(coffee.product.id)}
          >
            <BsTrash />
            REMOVER
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartListItem;
