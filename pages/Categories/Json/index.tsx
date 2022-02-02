import Navbar from "../../../components/PageNav"
import YoutubeEmbed from "../../../components/Youtube"
import {GoPrimitiveDot} from 'react-icons/go'
import {AiOutlineArrowDown} from 'react-icons/ai'
import Classes from '../../../styles/Pages.module.scss'
import jsonLogo from '../../../images/jsonLogo.png'
export default function index() {
  return (
  <div className={Classes.Container}>
      <Navbar logo={jsonLogo} height={200} width={200}/>
            <div className={Classes.main}>
                <div className={Classes.about}>
                <section className={Classes.header}>
                    <h2>Json veri yapısı nedir, javascript json metodları</h2>
                    <div className={Classes.info}>
                        <p>süre: 6 video ort: 10dk</p>
                        <p>dil: Türkçe</p>
                    </div>
                    </section>
                    <section className={Classes.description}>
                        <p>
                            Json veri tepinin genel yapısı hakkında fikir sahibi olacağınız,javascript json metodlarını göreceğiniz bir kaynak.
                        </p>
                        <div>
          {<GoPrimitiveDot style={{color:"red"}} size={19}/>}<strong>Kod yazarak ilerleme</strong>
          {<GoPrimitiveDot style={{color:"khaki"}} size={19}/>}<strong>Dökümantasyon</strong>
                    </div>
                    </section>
                </div>
                <div className={Classes.sourceBlock}>
                <label><AiOutlineArrowDown size={20}/>Kaynağın sahibine abone olarak destek olmayı unutmayın:&#x29;</label>
            <YoutubeEmbed embedId="sbRrWLIZrJo"/>
            </div>
            </div>
            {/* 1 */}
  </div>

  )
}