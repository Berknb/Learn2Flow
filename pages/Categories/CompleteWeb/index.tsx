import Navbar from "../../../components/PageNav";
import webLogo from '../../../images/completeWeb2.png'
import Classes from '../../../styles/Pages.module.scss'
import {GoPrimitiveDot} from 'react-icons/go'
import {AiOutlineArrowDown} from 'react-icons/ai'
import YoutubeEmbed from "../../../components/Youtube";

export default function index() {
  return (
  <div className={Classes.Container}>
    <Navbar logo={webLogo}/>
    <div className={Classes.main}>
                <div className={Classes.about}>
                <section className={Classes.header}>
                    <h2>Temel HTML ve CSS giriş</h2>
                    <div className={Classes.info}>
                        <p>süre: 7s 40dk</p>
                        <p>dil: Türkçe</p>
                    </div>
                    </section>
                    <section className={Classes.description}>
                        <p>
                            Web geliştirmeye yeni başladıysanız ve nereden başlayacağınızı bilmiyorsanız başlangıç adımı atmak için temel seviyede tüm ihtiyaçlarınızı öğreneceğiniz bir kaynak.
                        </p>
                        <p className={Classes.sourceElements}>
                            <h3>Kaynakta kullanılan bağlantılar;</h3>
                        <a href='https://www.w3schools.com/' target="_blank" rel="noreferrer">w3Schools.com</a>
                        <a href='https://fonts.google.com/' target="_blank" rel="noreferrer">GoogleFonts.com</a>
                        <a href='https://code.visualstudio.com/download' target="_blank" rel="noreferrer">Vscode indirmek için</a>
                        </p>
                        <div>
          {<GoPrimitiveDot style={{color:"red"}} size={19}/>}<strong>Kod yazarak ilerleme</strong>
                    </div>
                    </section>
                </div>
                <div className={Classes.sourceBlock}>
                <label><AiOutlineArrowDown size={20}/>Kaynağın sahibine abone olarak destek olmayı unutmayın:&#x29;</label>
            <YoutubeEmbed embedId="y745R3Lv9WI"/>
            </div>
            </div>
            {/* 1 */}
            <div className={Classes.main}>
                <div className={Classes.about}>
                <section className={Classes.header}>
                    <h2>30 günde 0&apos;dan 100&apos;e javascript</h2>
                    <div className={Classes.info}>
                        <p>süre: Güncel içerik &#x28;yeni videolar gelmekte&#x29;</p>
                        <p>dil: Türkçe</p>
                    </div>
                    </section>
                    <section className={Classes.description}>
                        <p>
                            Web geliştirmeye ve javascripte yeni başlayanlar için popüler olmuş 30-days-of-javascript github reposunun türkçe anlatımı. 
                        </p>
                        <p className={Classes.sourceElements}>
                            <h3>Kaynakta kullanılan bağlantılar;</h3>
                        <a href='https://github.com/Asabeneh/30-Days-Of-JavaScript' target="_blank" rel="noreferrer">30-days Of Javascript Github reposu</a>
                        </p>
                        <div>
          {<GoPrimitiveDot style={{color:"red"}} size={19}/>}<strong>Kod yazarak ilerleme</strong>
          {<GoPrimitiveDot style={{color:"khaki"}} size={19}/>}<strong>Dökümantasyon</strong>
                    </div>
                    </section>
                </div>
                <div className={Classes.sourceBlock}>
                <label><AiOutlineArrowDown size={20}/>Kaynağın sahibine abone olarak destek olmayı unutmayın:&#x29;</label>
            <YoutubeEmbed embedId="8A7RWDgkXgg"/>
            </div>
            </div>
            {/* 2 */}
            <div className={Classes.main}>
                <div className={Classes.about}>
                <section className={Classes.header}>
                    <h2>Hızlandırılmış javascript eğitimi</h2>
                    <div className={Classes.info}>
                        <p>süre: 1s 40dk</p>
                        <p>dil: İngilizce</p>
                        <p>altyazı: Youtube otomatik çevirme &#x28;anlaşılır şekilde&#x29;</p>
                    </div>
                    </section>
                    <section className={Classes.description}>
                        <p>
                            Javascripte yeni başlayanlar için temiz anlaşışır bir ingilizceyle anlatılmış akıcı ve öğretici bir kaynak.   
                        </p>
                        <div>
          {<GoPrimitiveDot style={{color:"red"}} size={19}/>}<strong>Kod yazarak ilerleme</strong>
          {<GoPrimitiveDot style={{color:"khaki"}} size={19}/>}<strong>Dökümantasyon</strong>
                    </div>
                    </section>
                </div>
                <div className={Classes.sourceBlock}>
                <label><AiOutlineArrowDown size={20}/>Kaynağın sahibine abone olarak destek olmayı unutmayın:&#x29;</label>
            <YoutubeEmbed embedId="hdI2bqOjy3c"/>
            </div>
            </div>
            {/* 3 */}
  </div>
  )
}
