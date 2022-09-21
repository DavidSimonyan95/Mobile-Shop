import { useDispatch } from 'react-redux';
import { setLanguage } from '../../redux/slices/languageSlice';
import s from '../HeaderTop/HeaderTopLanguages.module.scss'
function HeaderTopLanguages(){
   const dispatch = useDispatch()
    return(
        <div>
            <select onChange={e => dispatch(setLanguage(e.target.value))}>
                
                <option  value={'en'}>English</option>
                <option value={'am'}>Armenian</option>
                <option value={'ru'}>Russian</option>

            </select>
           
           
        </div>
    )
}
export default HeaderTopLanguages;