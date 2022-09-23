import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../FakeData/FakeData';
import s from '../Main/Main.module.scss';
import { useTranslation } from  '../context/languageContext';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from "../redux/slices/searchSlice";
import {FaSearch} from 'react-icons/fa';


function Main(){
    
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const searchValue = useSelector(state => state.searchValue);
    const [ filteredData, setFilteredData ] = useState(fakeData);
    const inputRef = useRef();

    useEffect(() => {
        if(searchValue) {
          setFilteredData(fakeData.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))) 
        }
    }, [searchValue])

    const filterData = (catItem)=>{
        setFilteredData(fakeData.filter((filDate)=> filDate.category === catItem)) 
    }

    return(
        <>
            <div className={s.searchFilter}>
                <div className={s.filter}>
                    <div onClick={()=>setFilteredData(fakeData)}>{t('all')}</div>
                    <div onClick={()=>filterData('Mobile')}>{t('phones')}</div>
                    <div onClick={()=>filterData('Accessories')}>{t('accessories')}</div>
                    <div onClick={()=> filterData('Tablets')}>{t('tablets')}</div>
                    <div onClick={()=> filterData('Watches')}>{t('watches')}</div>
                </div>
                <div className={s.search}>
                    <form onSubmit={(e)=>{
                        e.preventDefault()
                        dispatch(setSearchValue(inputRef.current.value = ''))
                    }}>
                         <input 
                         type= 'text'
                         ref={inputRef}
                         placeholder={t("search")}
                        />
                     <button onClick={() => dispatch(setSearchValue(inputRef.current.value))}><FaSearch/></button>
                    </form>
                   
                </div>
            </div>
                <div className={s.products}>
                    
                    {
                       filteredData.length > 0 ? filteredData.map(product =>{
                            return (
                                <Link to={`/${product.id}`} key={product.id}>
                                    <div key={product.id} className={s.product}>
                                        <img src={product.image}></img>
                                        <p>{product.name}</p>
                                    </div>
                                </Link>
                            )
                        }): (
                            <div className={s.empty}>Ese Epmty</div>  
                        ) 
                      
                    }  
                    
                </div>
        </>
    )
}
export default Main