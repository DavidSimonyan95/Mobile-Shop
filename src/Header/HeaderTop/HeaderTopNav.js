
import { Link } from 'react-router-dom';
import s from '../HeaderTop/HeaderTopNav.module.scss';

function HeaderTopNav(){
    return(
       
        <div className={s.navMenu}>
            
            <a href="#">ՄԵՐ ՄԱՍԻՆ</a>
            <Link to='contact'>
                <a href='#'>ԿԱՊ</a>
            </Link>
            <a href="#">ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ</a>
            <a href="#">ԱՊԱՌԻԿԻ ՊԱՅՄԱՆՆԵՐ</a>
        </div>
        
    )
}
export default HeaderTopNav;