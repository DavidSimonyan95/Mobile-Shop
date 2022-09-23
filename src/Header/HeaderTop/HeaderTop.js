import HeaderTopLanguages from "./HeaderTopLanguages";
import HeaderTopNav from "./HeaderTopNav";
import s from '../HeaderTop/HeaderTop.module.scss';

function HeaderTop({t}){

    return(
        <div className={s.headerTop}>
            <HeaderTopNav t = {t}/>
            <HeaderTopLanguages/>
        </div>
        
    )
}
export default HeaderTop;