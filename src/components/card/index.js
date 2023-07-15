import React from "react";
import styles from "./styles.module.scss";

function Card() {
  const nome = "expresso tradicional";
  const tags = ["card", "tradicional"];
  const description = "description description description";
  const value = "9,99";

  //https://www.figma.com/file/9voOXFDUMIRJxFzTKhzC5p/Coffee-Delivery-%E2%80%A2-Desafio-React-(Copy)?node-id=220%3A1450&mode=dev

  return (
    <div className={styles.card}>
      <div className={styles.image}>image</div>

      <div className={styles.tags}>
        {tags.map((tag, index) => {
          return <p key={index}>{tag}</p>;
        })}
      </div>

      <span> {description}</span>

      <div className={styles.infos}>
        <span>R$ {value}</span>

        <div className={styles.actions}>
          <div className={styles.quantity}>
            <button> + 1 -</button>

            <button>C</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
