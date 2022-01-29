import Navbar from "../../../components/Navbar"
import YoutubeEmbed from "../../../components/Youtube"
import {GoPrimitiveDot} from 'react-icons/go'
import {AiOutlineArrowDown} from 'react-icons/ai'
import Classes from '../../../styles/Pages.module.scss'
import nodejsLogo from '../../../images/nodejsLogo.png'
export default function index() {
  return (
  <div className={Classes.Container}>
      <Navbar logo={nodejsLogo} height={150} width={250}/>
            <div className={Classes.main}>
                <div className={Classes.about}>
                <section className={Classes.header}>
                    <h2>node.js nedir, node.js nasıl kullanılır</h2>
                    <div className={Classes.info}>
                        <p>süre: 9 video ort: 20dk</p>
                        <p>dil: Türkçe</p>
                    </div>
                    </section>
                    <section className={Classes.description}>
                        <p>
                            Nodejs nedir, neden kullanılır, avantajları neler gibi sorulara cevap veren ve temellerini kod yazarak anlatan bir kaynak. 
                        </p>
                        <div className={Classes.sourceElements}>
                            <h3>Kaynakta kullanılan bağlantılar;</h3>
                         <a href='https://nodejs.org/tr/' target="_blank" rel='noreferrer'>nodejs kurulum için (LTS önerilir)</a>
                        </div>
                        <div>
          {<GoPrimitiveDot style={{color:"red"}} size={19}/>}<strong>Kod yazarak ilerleme</strong>
          {<GoPrimitiveDot style={{color:"khaki"}} size={19}/>}<strong>Dökümantasyon</strong>
                    </div>
                    </section>
                </div>
                <div className={Classes.sourceBlock}>
                <label><AiOutlineArrowDown size={20}/>Kaynağın sahibine abone olarak destek olmayı unutmayın:&#x29;</label>
            <YoutubeEmbed embedId="zx_cjyQb110"/>
            </div>
            </div>
            {/* 1 */}
            <div className={Classes.main}>
                <div className={Classes.about}>
                <section className={Classes.header}>
                    <h2>temel node.js kursu</h2>
                    <div className={Classes.info}>
                        <p>süre: 34dk</p>
                        <p>dil: İngilizce</p>
                        <p>altyazı: Youtube otomatik çevirme &#x28;anlaşılır şekilde&#x29;</p>
                    </div>
                    </section>
                    <section className={Classes.description}>
                        <p>
                            Gerekli kurulumlardan itibaren, temel node.js kullanımını anlatan temiz ve 30 dakika gibi kısa bir süreye sığdırılmış kaliteli bir başlangıç eğitimi.
                        </p>
                        <div className={Classes.sourceElements}>
                            <h3>Kaynakta kullanılan bağlantılar;</h3>
                         <a href='https://nodejs.org/tr/' target="_blank" rel='noreferrer'>nodejs kurulum için (LTS önerilir)</a>
                         <a href='https://github.com/codeSTACKr/node-crash-course' target="_blank" rel='noreferrer'>video&apos;da kullanılan kaynak kodlar.</a>
                        </div>
                        <div className={Classes.source}>
          {<GoPrimitiveDot style={{color:"red"}} size={19}/>}<strong>Kod yazarak ilerleme</strong>
                    </div>
                    </section>
                </div>
                <div className={Classes.sourceBlock}>
                <label><AiOutlineArrowDown size={20}/>Kaynağın sahibine abone olarak destek olmayı unutmayın:&#x29;</label>
            <YoutubeEmbed embedId="2LUdnb-mls0"/>
            </div>
            </div>
  </div>
  )
}