import { Link } from 'react-router-dom'
import style from './Button.module.scss'
function Button(){
    return(
        <div>
            <Link to='/'>
                <button className={style.cButton}>Գլխավոր</button>
            </Link>
        </div>
    )
}
export default Button