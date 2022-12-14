import Header from '../Header/Header'
import s from './Credit.module.scss';
import Footer from '../Footer/Footer';
import Button from '../Custom/Button';
function Credit(){
    return(
        
        <div className={s.infoCredit}>
         
            <Button/>
            <h1>ԱՊԱՌԻԿԻ ՁԵՎԱԿԵՐՊՄԱՆ ՀԱՄԱՐ <br/>ԱՆՀՐԱԺԵՇՏ ՊԱՅՄԱՆՆԵՐ</h1>
            <p> Mobile Shop խանութ-սրահում ապառիկ տարբերակով գնումներ
                կատարելու <br/> հնարավորություն ունեն 20-63 տարիքային խմբին պատկանող անձիք
            </p>
            <p>. Լինել ՀՀ քաղաքացի</p>
            <p>. Լինել գրանցված աշխատող կամ ունենալ անթերի վարկային պատմություն</p>
            <p>. Ունենալ անձնագիր և սոցիալական քարտ</p>
            <h1>ՏՐԱՄԱԴՐՎՈՂ ԱՊԱՌԻԿԻ ՊԱՅՄԱՆՆԵՐ</h1>
            <p>. 0% կանխավճար (ըստ հաճախորդի ցանկության)</p>
            <p>. 0-12% տոկոսադրույք (ըստ նախընտրած բանկի)</p>
            <p>. 3-36 ամիս մարման ժամկետ</p>
            <h2>ԳՈՐԾԸՆԿԵՐ ԲԱՆԿԵՐ</h2>
            <p>ԱԿԲԱ -ԿՐԵԴԻՏ ԱԳՐԻԿՈԼ ԲԱՆԿ ՓԲԸ</p>
            <p>ՀԱՅԷԿՈՆՈՄԲԱՆԿ ԲԲԸ</p>
            <p>ՅՈՒՆԻԲԱՆԿ ՓԲԸ</p>
            <p>ԱՄԵՐԻԱ ԲԱՆԿ ՓԲԸ</p>
          
        </div>
    )
}
export default Credit