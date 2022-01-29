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
                    <h2>0&apos;dan 100&apos;e react kursu</h2>
                    <div className={Classes.info}>
                        <p>süre: 3s 52dk</p>
                        <p>dil: İngilizce</p>
                        <p>altyazı: Youtube otomatik çevirme &#x28;anlaşılır şekilde&#x29;</p>
                    </div>
                    </section>
                    <section className={Classes.description}>
                        <p>
                            Gerekli kurulumlardan, tüm temel react hook kullanımlarına kadar örnek bir projeyi tamamlayarak react dünyasına girişinizi hızlandıracak kaliteli bir kaynak
                        </p>
                        <p className={Classes.sourceElements}>
                            <h3>Kaynakta kullanılan bağlantılar;</h3>
                         <a href='https://nodejs.org/tr/' target="_blank" rel='noreferrer'>nodejs kurulum için (LTS önerilir)</a>
                        </p>
                        <div>
          {<GoPrimitiveDot style={{color:"red"}} size={19}/>}<strong>Kod yazarak ilerleme</strong>
          {<GoPrimitiveDot style={{color:"khaki"}} size={19}/>}<strong>Dökümantasyon</strong>
                    </div>
                    </section>
                </div>
                <div className={Classes.sourceBlock}>
                <label><AiOutlineArrowDown size={20}/>Kaynağın sahibine abone olarak destek olmayı unutmayın:&#x29;</label>
            <YoutubeEmbed embedId="Dorf8i6lCuk"/>
            </div>
            </div>
            {/* 1 */}
            <div className={Classes.main}>
                <div className={Classes.about}>
                <section className={Classes.header}>
                    <h2>React&apos;a başlarken bilmeniz gerekenler</h2>
                    <div className={Classes.info}>
                        <p>süre: 2s 45dk (10 video)</p>
                        <p>dil: Türkçe</p>
                    </div>
                    </section>
                    <section className={Classes.description}>
                        <p>
                            React&apos;ın getirdiği yenilikler ve temel bileşenleri hakkında fikir sahibi olabileceğiniz 10 videoluk bir seri
                        </p>
                        <div>
          {<GoPrimitiveDot style={{color:"khaki"}} size={19}/>}<strong>Dökümantasyon</strong>
                    </div>
                    </section>
                </div>
                <div className={Classes.sourceBlock}>
                <label><AiOutlineArrowDown size={20}/>Kaynağın sahibine abone olarak destek olmayı unutmayın:&#x29;</label>
            <YoutubeEmbed embedId="EoH-TliTV1Y"/>
            </div>
            </div>
  </div>
  )
}


