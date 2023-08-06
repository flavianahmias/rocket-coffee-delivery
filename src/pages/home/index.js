import React from "react";
import styles from "./styles.module.scss";
import { ReactComponent as CoffeeImage } from "../../assets/images/Imagem.svg";
import Card from "../../components/card";
import { coffeeList } from "./content";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../features/cart/cartSlice";
import { BsFillCartFill, BsBoxSeam, BiTimer, BiCoffee } from "../../utils/icons";

function Home() {
  const count = useSelector((state) => state.cart.value.length);
  const dispatch = useDispatch();
  const handleClickAddProduct = (coffee, quantity) => {
    dispatch(increment({ product: coffee, quantity: quantity }));
  };

  const sloganPoints = [
    { id: "compra", icon: <BsFillCartFill />, text: "Compra simples e segura" },
    { id: "entrega", icon: <BiTimer />, text: "Entrega rápida e rastreada" },
    { id: "embalagem", icon: <BsBoxSeam />, text: "Embalagem mantém o café intacto" },
    { id: "cafe", icon: <BiCoffee />, text: "O café chega fresquinho até você" },
  ];

  return (
    <div className={styles.homepage}>
      <section className={styles.initial}>
        <div className={styles.text}>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>

          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
          </span>

          <div className={styles.details}>
            {sloganPoints.map((s, i) => {
              return (
                <div key={i} className={s.id}>
                  {s.icon}
                  <p>{s.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        <CoffeeImage />
      </section>
      <section className={styles.catalog}>
        <h1> Nossos cafés </h1>

        <div className={styles.coffelist}>
          {coffeeList.map((c, index) => {
            return <Card key={index} coffee={c} addProduct={handleClickAddProduct} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default Home;
