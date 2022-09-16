import { useEffect, useState } from "react"
import Button from "../Custom/Button";
import FakeData from "../FakeData/FakeData";
import Header from "../Header/Header";
import s from './Product.module.scss';


function Product({pathname}){

 const [id,setId]= useState(null);
 const [currentItem,setCurrentItem] = useState();

 useEffect(()=>{
    let arr = pathname.split("");
    arr.shift();
    setId(+arr.join(''));
    setCurrentItem(...FakeData.filter(item => item.id === id))
 },[pathname,id])

 return(currentItem && <div>
            <Header/>
            <Button/>
            <div className={s.containerMain}>
                <div className={s.leftInfo}>
                    <img src={currentItem.image}></img> 
                </div>
                <div className={s.rightInfo}>
                    <h1>{currentItem.name}</h1>
                    <h3> {currentItem.price}֏</h3>
                    <h5>{currentItem.cashless}֏ </h5>
                    <h5>{currentItem.cash}֏ </h5>
                </div>
            </div>
        </div>
    )
}

export default Product