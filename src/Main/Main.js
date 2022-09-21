import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../FakeData/FakeData';
import Header from '../Header/Header';
import s from '../Main/Main.module.scss';
import Footer from '../Footer/Footer';
import { useTranslation } from  '../context/languageContext';
function Main(){
    const { t } = useTranslation();

    const [filter,setFilter] = useState('');
    const[data1,setData1] = useState(data);
  
    const filterData = (catItem)=>{
        const result = data.filter((curDate)=>{
            return curDate.category === catItem
        })
       setData1(result)  
    }
    
   const dataSearch = data1.filter(item =>{
        return item.name.toLowerCase().includes(filter.toLowerCase())
   });

    
    return(
        <>
         <Header/>
            <div className={s.searchFilter}>
                <div className={s.filter}>
                    <div onClick={()=> setData1(data)}>{t('all')}</div>
                    <div onClick={()=> filterData('Mobile')}>{t('phones')}</div>
                    <div onClick={()=>filterData('Accessories')}>{t('accessories')}</div>
                    <div onClick={()=> filterData('Tablets')}>{t('tablets')}</div>
                    <div onClick={()=> filterData('Watches')}>{t('watches')}</div>
                </div>
                <div className={s.search}>
                    <input 
                         type='text'
                         value={filter}
                         placeholder={t("search")}
                         onChange = {(e)=>{
                             setFilter(e.target.value)
                         }}
                    />
                </div>
            </div>
                <div className={s.products}>
                    
                    {
                    dataSearch.map(product =>{
                            return (
                                <Link to={`/${product.id}`} key={product.id}>
                                    <div key={product.id} className={s.product}>
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