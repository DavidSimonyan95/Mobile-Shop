
import { useState } from 'react';
import { Link } from 'react-router-dom';
import s from '../HeaderTop/HeaderTopNav.module.scss';
import {FaBars,FaMixer} from 'react-icons/fa';



function HeaderTopNav({t}){
    
   const [active,setActive] = useState(s.navMenu);
   const [icon,setIcon] = useState(true);
   
const navToggle =()=>{
    active === s.navMenu ? setActive(`${s.navMenu} ${s.active}`): setActive(s.navMenu)
    setIcon(!icon)
}

window.onscroll = () =>{
    setActive(s.navMenu)

};
 

    return (
        <nav className={s.nav}>
            <div className={active}>
                    <Link to='/abouteus'>
                        <span>{t('aboutUs')}</span>
                    </Link>
              
                    <Link to='/contact'>
                        <span>{t('contactUs')}</span>
                    </Link>
               
                    <Link to='/services'>
                        <span>{t('service')}</span>
                    </Link>
                    <Link to='/credit'>
                        <span>{t('creditconditions')}</span>
                    </Link>
               
            </div>
            <div onClick={navToggle} className={s.navToggle}>
            {
                icon && <FaBars/> || <FaMixer/>

            }
        
            </div>

        </nav>
    )
}
export default HeaderTopNav;