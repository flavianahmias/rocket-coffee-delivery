import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { TfiMoney } from "react-icons/tfi";
import { GrLocation } from "react-icons/gr";
import { BsTrash } from "react-icons/bs";
import { CiMoneyCheck1 } from "react-icons/ci";
import { PiMoneyThin } from "react-icons/pi";
import { TbMoneybag } from "react-icons/tb";
import { useSelector, useDispatch } from "react-redux";
import CounterButton from "../../components/counterButton";
import { decrement, incrementInCart } from "../../features/cart/cartSlice";
import CartListItem from "../../components/cartListItem";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const payMethod = [
    { id: 0, icon: <CiMoneyCheck1 />, text: "CARTÃO DE CRÉDITO" },
    { id: 1, icon: <TbMoneybag />, text: "CARTÃO DE DÉBITO" },
    { id: 2, icon: <PiMoneyThin />, text: "  DINHEIRO / PIX" },
  ];

  const cartList = useSelector((state) => state.cart.value);

  const [payMethodSelected, setPayMethodSelected] = React.useState();
  const [value, setValue] = React.useState(0.0);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const changeQuantity = (quantity, id) => {
    dispatch(incrementInCart({ quantity: quantity, id: id }));
  };

  const removeItem = (id) => {
    dispatch(decrement(id));
  };

  const sumValues = () => {
    cartList.map((c) => {
      setValue((state) => state + parseFloat(c.product.value));
    });
  };

  const handleConfirmButton = (data) => {
    navigate("/finish");
  };

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

          <form className={styles.inputs} onSubmit={handleSubmit(handleConfirmButton)}>
            <input
              defaultValue=""
              placeholder="CEP"
              {...register("CEP", { required: true })}
            />
            <input
              type="text"
              placeholder="Rua"
              style={{ width: "100%" }}
              {...register("rua", { required: true })}
            />
            <input
              type="text"
              placeholder="Numero"
              {...register("numero", { required: true })}
            />
            <input
              type="text"
              placeholder="Complemento (opcional)"
              {...register("complemento")}
            />
            <input
              type="text"
              placeholder="Bairro"
              style={{ width: "30%" }}
              {...register("bairro", { required: true })}
            />
            <input
              type="text"
              placeholder="Cidade"
              style={{ width: "30%" }}
              {...register("cidade", { required: true })}
            />
            <input
              type="text"
              placeholder="UF"
              style={{ width: "10%" }}
              {...register("uf", { required: true })}
            />
          </form>
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
              <CartListItem
                key={index}
                coffee={coffee}
                changeQuantity={changeQuantity}
                removeItem={removeItem}
              />
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

          <button className={styles.confirm} onClick={handleSubmit(handleConfirmButton)}>
            Confirmar pedido
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
