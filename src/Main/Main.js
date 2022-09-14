import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import About from '../About';
import data from '../FakeData/FakeData';
import Header from '../Header/Header';
import s from '../Main/Main.module.scss';
import Footer from '../Footer/Footer'
function Main(){
    
    const [filter,setFilter] = useState('');
    const[data1,setData1] = useState(data);
  
    const foo = (catItem)=>{
        const result = data1.filter((curDate)=>{
            return curDate.category === catItem
        })
        
       setData1(result)
       
    }
   const dataSearch = data1.filter(item =>{
        return Object.keys(item)
            .some(key => item[key]
            .toString()
            .toLowerCase()
            .includes(filter.toString()
            .toLowerCase()
            )  
        )
    });
    return(
        <>
         <Header/>
            <div className={s.searchFilter}>
                <div className={s.filter}>
                    <div onClick={()=> setData1(data)}>Բոլորը</div>
                    <div onClick={()=> foo('Mobile')}>Հեռախոսներ</div>
                    <div onClick={()=> foo('Accessories')}>Աքսեսուարներ</div>
                    <div onClick={()=> foo('Tablets')}>Պլանշետներ</div>
                    <div onClick={()=> foo('Watches')}>Ժամացույցներ</div>
                    {/* <div onClick={()=> foo('Notebooks')}>Նոթբուքեր</div> */}
                </div>
                <div className={s.search}>
                    <input 
                         type='text'
                         value={filter}
                         placeholder='Որոնել'
                         onChange = {(e)=>{
                             setFilter(e.target.value)
                         }}
                    />
                </div>

            </div>
            
                <div className={s.pro}>
                    
                    {
                    dataSearch.map(product =>{
                            return (
                              
                                <Link to={`/${product.id}`} key={product.id}>
                                    <div key={product.id} className={s.pro2}>
                                        <img src={product.image}></img>
                                        <p>{product.name}</p>
                                    </div>
                                </Link>
                            )
                        })
                    }
                    
                </div>
                <Footer/>
           
        </>
    )
}
export default Main