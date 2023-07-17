import React from "react";
import styles from "./styles.module.scss";
import { BsFillCartFill } from "react-icons/bs";
import Coffee from "../../assets/images/coffee.png";

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../features/cart/cartSlice";

function Card(props) {
  const { name, image, tags, value, description, id } = props.coffee;

  const count = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  const [quantity, setQuantity] = React.useState(1);

  //https://www.figma.com/file/9voOXFDUMIRJxFzTKhzC5p/Coffee-Delivery-%E2%80%A2-Desafio-React-(Copy)?node-id=220%3A1450&mode=dev

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={Coffee} />
      </div>

      <div className={styles.tags}>
        {tags.map((tag, index) => {
          return <p key={index}>{tag}</p>;
        })}
      </div>

      <h3>{name}</h3>
      <span className={styles.description}> {description}</span>

      <div className={styles.infos}>
        <span className={styles.value}>
          R$ <strong>{value}</strong>
        </span>

        <div className={styles.actions}>
          <div className={styles.counter}>
            <button onClick={() => setQuantity(quantity - 1)} disabled={quantity === 1}>
              -
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <button
            className={styles.buyButton}
            onClick={() => props.addProduct({ ...props.coffee, quantity: quantity })}
          >
            <BsFillCartFill />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
