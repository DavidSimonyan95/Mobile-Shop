import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import s from './AbouteUs.module.scss'
import Button from '../Custom/Button'
function AbouteUs(){
    return(
      <div className={s.contentAbouteus}>
        <Header/>
          <Button/>
            <h2>ԻՆՉ ԵՆՔ ՄԵՆՔ ԱՌԱՋԱՐԿՈՒՄ</h2>
            <img className={s.topimg} src='https://d2xe71nj4xrmst.cloudfront.net/media/business/university-blvd-w-veirs-mill-rd-2-4440-2-UP9Mo5OaeppZlRJT_NM_io5LOD_SXfMGaIqjn0DqmGY.ace9477772ed.jpg'/>
            <div>
              <div className={s.flexible}>
                <img src='https://media.istockphoto.com/photos/mobile-smartphone-in-electronic-store-picture-id827502902?k=20&m=827502902&s=612x612&w=0&h=cNl22lTSmDCwOKd5P3E07YBRacffEW0uIFFk0ALmbPM='/>
                <p>Բջջային հեռախոսների վաճառքով զբաղվող Yerevan Mobile խանութ-սրահը հիմնվել է 2006 թվականին:<br/>
                  Խանութ-սրահում ներկայացված է բջջային հեռախոսների լայն տեսականի` մատչելի գներով:
                  <br/>Տեղում ձևակերպվում է նաև ապառիկ վաճառք: 
                  <br/>Համագործակցում ենք ACBA,VTB, INECO,AEB,UNIBANK,AMERIA և CONVERSE բանկերի հետ
                Տրվում է 1 տարի երաշխիք ցանկացած մոդելի համար<br/>
                Խանութ-սրահում ներկայացված է նաև օրիգինալ աքսեսուարների լայն տեսականի</p>
              </div>
              <div className={s.flexible}>
                <img src='https://i.pinimg.com/originals/b6/66/95/b666953d83da7abdaed09584b715215e.jpg'/>
                <p>Բջջային հեռախոսների վաճառքով զբաղվող Yerevan Mobile խանութ-սրահը հիմնվել է 2006 թվականին:<br/>
                  Խանութ-սրահում ներկայացված է բջջային հեռախոսների լայն տեսականի` մատչելի գներով:
                  <br/>Տեղում ձևակերպվում է նաև ապառիկ վաճառք: 
                  <br/>Համագործակցում ենք ACBA,VTB, INECO,AEB,UNIBANK,AMERIA և CONVERSE բանկերի հետ
                Տրվում է 1 տարի երաշխիք ցանկացած մոդելի համար<br/>
                Խանութ-սրահում ներկայացված է նաև օրիգինալ աքսեսուարների լայն տեսականի</p>
              </div>
              <div>

              
              </div>
            </div>

        <Footer/>
      </div>
    )
}

export default AbouteUs