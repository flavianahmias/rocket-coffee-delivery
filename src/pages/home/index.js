import React from "react";
import Header from "../../components/header";
import styles from "./styles.module.scss";
import { ReactComponent as CoffeeImage } from "../../assets/images/Imagem.svg";

function Home() {
  return (
    <div className={styles.homepage}>
      <section className={styles.initial}>
        <div className={styles.text}>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>

          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
          </span>

          <div className={styles.details}>
            <p>Compra simples e segura</p>
            <p>Compra simples e segura</p>
            <p>Compra simples e segura</p>
            <p>Compra simples e segura</p>
          </div>
        </div>

        <CoffeeImage />
      </section>

      <section className={styles.catalog}>
        <h1> Nossos cafés</h1>

        <div>cafes</div>
      </section>
    </div>
  );
}

export default Home;
