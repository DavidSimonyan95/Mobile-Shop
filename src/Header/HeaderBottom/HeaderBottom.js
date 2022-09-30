import s from '../HeaderBottom/HeaderBottom.module.scss'
import {FaHeart,FaCartPlus} from 'react-icons/fa'
import { Link } from 'react-router-dom'
function HeaderBottom(){
    return(
        <div className={s.headerBottom}>
               <span>Mobile Shop </span>
            
               {/* <input type="text" placeholder='Մուտքագրեք ապրանքի անվանումը'></input> */}
         
               <div className={s.icons}>
                    <FaHeart className={s.Heart}/>
                    <Link to='/cart'><FaCartPlus className={s.Cart}/></Link>
                    
               </div>
        </div>
    )
}
export default HeaderBottom