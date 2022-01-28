import Navbar from "../../../components/Navbar"
import YoutubeEmbed from "../../../components/Youtube"
import {GoPrimitiveDot} from 'react-icons/go'
import {AiOutlineArrowDown} from 'react-icons/ai'
import Classes from '../../../styles/Pages.module.scss'
import nextLogo from '../../../images/nextLogo.png'
export default function index() {
  return (
  <div className={Classes.Container}>
      <Navbar logo={nextLogo}/>
      {/* --------------ITEMS------------------------------------- */}
            <div className={Classes.main}>
                <div className={Classes.about}>
                <section className={Classes.header}>
                    <h2>0&apos;dan temel Nextjs kursu</h2>
                    <div className={Classes.info}>
                        <p>süre: 3s 14dk</p>
                        <p>dil: İngilizce</p>
                        <p>altyazı: Youtube otomatik çevirme &#x28;anlaşılır şekilde&#x29;</p>
                    </div>
                    </section>
                    <section className={Classes.description}>
                        <p>
                            Gerekli kurulumlardan, temel react ve nextjs farkını anlatan, örnek bir projeyi tamamlayarak nextjs dünyasına girişinizi hızlandıracak kaliteli bir kaynak.
                        </p>
                        <div className={Classes.sourceElements}>
                            <h3>Kaynakta kullanılan bağlantılar;</h3>
                            <a href='https://nextjs.org/docs/getting-started' target="_blank" rel='noreferrer'>Nextjs dökümantasyon</a>
                         <a href='https://nodejs.org/tr/' target="_blank" rel='noreferrer'>nodejs kurulum için (LTS önerilir)</a>
                         <a href='https://github.com/mschwarzmueller/nextjs-course-code/tree/e099f80089b65e45f500b75fec1861fb36179f4f' target="_blank" rel='noreferrer'>Kaynak kodlar (ilk proje)</a>
                         <a href='https://github.com/mschwarzmueller/nextjs-course-code/tree/9c9e9f19b1bd27605fb4ccdca2d1a0ebb5c3a802' target="_blank" rel='noreferrer'>Kaynak kodlar (ana proje)</a>
                         <a href='https://vercel.com/' target="_blank" rel='noreferrer'>vercel.com(deploy sitesi)</a>
                        </div>
                        <div>
          {<GoPrimitiveDot style={{color:"red"}} size={19}/>}<strong>Kod yazarak ilerleme</strong>
          {<GoPrimitiveDot style={{color:"khaki"}} size={19}/>}<strong>Dökümantasyon</strong>
                    </div>
                    </section>
                </div>
                <div className={Classes.sourceBlock}>
                <label><AiOutlineArrowDown size={20}/>Kaynağın sahibine abone olarak destek olmayı unutmayın:&#x29;</label>
            <YoutubeEmbed embedId="MFuwkrseXVE"/>
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