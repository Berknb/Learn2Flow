import Navbar from "../../../components/Navbar"
import YoutubeEmbed from "../../../components/Youtube"
import {GoPrimitiveDot} from 'react-icons/go'
import {AiOutlineArrowDown} from 'react-icons/ai'
import Classes from '../../../styles/Pages.module.scss'
import reactLogo from '../../../images/reactLogo.png'
export default function index() {
  return (
  <div className={Classes.Container}>
      <Navbar logo={reactLogo} height={0} width={0}/>
            <div className={Classes.main}>
                <div className={Classes.about}>
                <section className={Classes.header}>
                    <h2>Bootstrap5 Komple eğitim</h2>
                    <div className={Classes.info}>
                        <p>süre: 33 video ort: 10dk</p>
                        <p>dil: Türkçe</p>
                    </div>
                    </section>
                    <section className={Classes.description}>
                        <p>
                            Bootstrap fikrini kavrayacığınız ve kod üzerinde örneklerle temel kullanımı öğreneceğiniz komple bir eğitim.
                        </p>
                        <div>
          {<GoPrimitiveDot style={{color:"red"}} size={19}/>}<strong>Kod yazarak ilerleme</strong>
          {<GoPrimitiveDot style={{color:"khaki"}} size={19}/>}<strong>Dökümantasyon</strong>
                    </div>
                    </section>
                </div>
                <div className={Classes.sourceBlock}>
                <label><AiOutlineArrowDown size={20}/>Kaynağın sahibine abone olarak destek olmayı unutmayın:&#x29;</label>
            <YoutubeEmbed embedId="PB-4FSOFRow"/>
            </div>
            </div>
            {/* 1 */}

  </div>
  )
}
