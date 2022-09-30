import React from 'react'
import s from "./CartItem.module.scss"
function CartItem({item,priceIncrement,priceDecrement,onAdd,onDel}) {
  return (
    <div className={s.Buy}>
        <img src={item.image}></img>
        <p >{item.name}</p>
        <p >{item.price} Դ</p>
        <button onClick={()=>{
           priceIncrement(item.price)
           onAdd(item)
        }}>+</button>
        <span>{item.qty?item.qty : 1}</span>
        <button onClick={()=>{
            priceDecrement(item.price)
            onDel(item)
        }}>-</button>

    </div>
  )
}

export default CartItem