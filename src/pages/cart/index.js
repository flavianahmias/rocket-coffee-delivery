import React from "react";
import styles from "./styles.module.scss";
import { TfiMoney } from "react-icons/tfi";
import { GrLocation } from "react-icons/gr";
import { CiMoneyCheck1 } from "react-icons/ci";
import { PiMoneyThin } from "react-icons/pi";
import { TbMoneybag } from "react-icons/tb";
import { useSelector, useDispatch } from "react-redux";

function Cart() {
  const payMethod = [
    { id: 0, icon: <CiMoneyCheck1 />, text: "CARTÃO DE CRÉDITO" },
    { id: 1, icon: <TbMoneybag />, text: "CARTÃO DE DÉBITO" },
    { id: 2, icon: <PiMoneyThin />, text: "  DINHEIRO / PIX" },
  ];

  const cartList = useSelector((state) => state.cart.value);

  const [payMethodSelected, setPayMethodSelected] = React.useState();

  return (
    <div className={styles.content}>
      <div className={styles.address}>
        <h3>Complete seu pedido</h3>

        <div className={styles.addressInputs}>
          <div className={styles.label}>
            <GrLocation />
            <div>
              <p>Endereço de entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </div>

          <div className={styles.inputs}>
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" style={{ width: "100%" }} />
            <input type="text" placeholder="Numero" />
            <input type="text" placeholder="Complemento (opcional)" />
            <input type="text" placeholder="Bairro" style={{ width: "30%" }} />
            <input type="text" placeholder="Cidade" style={{ width: "30%" }} />
            <input type="text" placeholder="UF" style={{ width: "10%" }} />
          </div>
        </div>
        <div className={styles.paymentInputs}>
          <div className={styles.label}>
            <TfiMoney />
            <div>
              <p>Pagamento</p>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </div>

          <div className={styles.options}>
            {payMethod.map((b, i) => {
              return (
                <button
                  key={i}
                  className={payMethodSelected === b.id && styles.select}
                  onClick={() => setPayMethodSelected(b.id)}
                >
                  {b.icon} <span>{b.text}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.cartList}>
        <h3>Cafés selecionados</h3>
        <div className={styles.coffees}>
          {cartList.map((coffee, index) => {
            return (
              <div className={styles.coffeeListItem}>
                <img src={coffee.product.image} />
                <div className={styles.item}>
                  <div className={styles.itemTitle}>
                    <p>{coffee.product.name}</p> <p>{coffee.product.value}</p>
                  </div>
                  <div className={styles.itemActions}>
                    <button>-/+</button>
                    <button>REMOVER</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.values}>
          <div className={styles.valueContent}>
            <div>
              <p>Total de itens</p>
              <p>Entrega</p>
              <p>Total</p>
            </div>
            <div>
              <p>38</p>
              <p>2</p>
              <p>33</p>
            </div>
          </div>

          <button>Confirmar pedido</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
