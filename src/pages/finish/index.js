import React from "react";
import styles from "./styles.module.scss";

import image from "../../assets/images/Illustration.png";

function FinishPage() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h3>Uhuu! Pedido confirmado!</h3>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </div>

      <div className={styles.content}>
        <div className={styles.infos}>
          <div className={styles.block}>
            <span>
              Entrega em <strong>Rua dos passes, 106</strong>
            </span>
            <span>Parque 10 - Manaus, AM</span>
          </div>
          <div className={styles.block}>
            <span>Previsão de entrega</span>
            <span>
              <strong>20 min - 30 min</strong>
            </span>
          </div>
          <div className={styles.block}>
            <span>Pagamento na entrega</span>
            <span>
              <strong>Cartão de crédito</strong>
            </span>
          </div>
        </div>

        <div className={styles.image}>
          <img src={image} />
        </div>
      </div>
    </section>
  );
}

export default FinishPage;
