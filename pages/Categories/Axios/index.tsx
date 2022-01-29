import Navbar from "../../../components/Navbar"
import YoutubeEmbed from "../../../components/Youtube"
import {GoPrimitiveDot} from 'react-icons/go'
import {AiOutlineArrowDown} from 'react-icons/ai'
import Classes from '../../../styles/Pages.module.scss'
import axiosLogo from '../../../images/axiosLogo.png'
export default function index() {
  return (
  <div className={Classes.Container}>
      <Navbar logo={axiosLogo} height={0} width={0}/>
            <div className={Classes.main}>
                <div className={Classes.about}>
                <section className={Classes.header}>
                    <h2>React - axios baseURL ile dinamik api request</h2>
                    <div className={Classes.info}>
                        <p>süre: 10dk</p>
                        <p>dil: Türkçe</p>
                    </div>
                    </section>
                    <section className={Classes.description}>
                        <p>
                        Temel react bilginiz varsa ve axios hakkında az çok fikir sahibiyseniz baseURL tanımlayarak dinamik bir şekilde api isteklerinin nasıl yapılacağını kavrayacağınız bir video.
                        </p>
                        <div>
                        {<GoPrimitiveDot style={{color:"red"}} size={19}/>}<strong>Kod yazarak ilerleme</strong>
                    </div>
                    </section>
                </div>
                <div className={Classes.sourceBlock}>
                <label><AiOutlineArrowDown size={20}/>Kaynağın sahibine abone olarak destek olmayı unutmayın:&#x29;</label>
            <YoutubeEmbed embedId="cQZaO6hRQwg"/>
            </div>
            </div>
            {/* 1 */}
            <div className={Classes.main}>
                <div className={Classes.about}>
                <section className={Classes.header}>
                    <h2>React ile temel axios kullanımı</h2>
                    <div className={Classes.info}>
                        <p>süre: 10dk</p>
                        <p>dil: İngilizce</p>
                        <p>altyazı: Youtube otomatik çevirme &#x28;anlaşılır şekilde&#x29;</p>
                    </div>
                    </section>
                    <section className={Classes.description}>
                        <p>
                            Temel react bilginiz varsa ve axios hakkında fikir sahibi olacağınız ve react ile birlikte temel kullanımını kavrayacağınız bir başlangıç videosu.
                        </p>
                        <div>
          {<GoPrimitiveDot style={{color:"red"}} size={19}/>}<strong>Kod yazarak ilerleme</strong>
                    </div>
                    </section>
                </div>
                <div className={Classes.sourceBlock}>
                <label><AiOutlineArrowDown size={20}/>Kaynağın sahibine abone olarak destek olmayı unutmayın:&#x29;</label>
            <YoutubeEmbed embedId="12l6lkW6JhE"/>
            </div>
            </div>
  </div>
  )
}