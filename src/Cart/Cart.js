import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import s from "./Cart.module.scss";
import CartItem from "./CartItem";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const [itemPrice, setItemPrice] = useState(
    cart.reduce((initial, sum) => initial + sum.price, 0)
  );

  const [cartItems, setCarItems] = useState(cart);
  const [add,setAdd] = useState(true)
  const [del,setDel] = useState(true)


  const onAdd = (product) => {
    const exist = cartItems.find((elem) => elem.id === product.id);
  
    if (exist) {
      setCarItems(
        cartItems.map((elem) =>
          elem.id === product.id && add ? { ...exist, qty:2} : { ...exist, qty:exist.qty + 1 }
          
        )
      );
      
    } 
    setAdd(false)
  };

  const onDel = (product) => {
    const exist = cartItems.find((elem) => elem.id === product.id);
  
    if (exist) {
      setCarItems(
        cartItems.map((elem) =>
          elem.id === product.id && del ? { ...exist, qty:2} : { ...exist, qty:exist.qty - 1 }
        )
      );
      
    } 
    setDel(false)
  
  };

 
  return (
    <div className={s.cart}>
      <div className={s.parent}>
        {cartItems.map((item) => {
          return (
            <CartItem item = {item} 
            key ={item.name}
            priceIncrement = {(price)=>setItemPrice(itemPrice + price)} 
            priceDecrement = {(price)=>setItemPrice(itemPrice - price)}
            onAdd = {(item) => onAdd(item)}
            onDel = {(item) => onDel(item)}
            />
          );
        })}

        {cartItems.length ? (
          <p className={s.total}>{itemPrice < 0 ? setItemPrice(0) : `Total ${itemPrice} Դ`}</p>
        ) : (
          <span className={s.empty}>Ese Empty</span>
        )}
      </div>
    </div>
  );
}

export default Cart;
