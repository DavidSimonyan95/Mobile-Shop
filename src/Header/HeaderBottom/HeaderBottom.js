import s from '../HeaderBottom/HeaderBottom.module.scss'
import {FaHeart,FaCartPlus} from 'react-icons/fa'
function HeaderBottom(){
    return(
        <div className={s.headerBottom}>
               <span>Mobile Shop </span>
            
               {/* <input type="text" placeholder='Մուտքագրեք ապրանքի անվանումը'></input> */}
         
               <div className={s.icons}>
                    <FaHeart className={s.Heart}/>
                    <FaCartPlus className={s.Cart}/>
               </div>
        </div>
    )
}
export default HeaderBottom