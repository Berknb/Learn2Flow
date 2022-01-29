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
  </div>

  )
}