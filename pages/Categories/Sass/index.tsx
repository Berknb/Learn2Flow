import Navbar from "../../../components/Navbar"
import YoutubeEmbed from "../../../components/Youtube"
import {GoPrimitiveDot} from 'react-icons/go'
import {AiOutlineArrowDown} from 'react-icons/ai'
import Classes from '../../../styles/Pages.module.scss'
import sassLogo from '../../../images/sassLogo.png'
export default function index() {
  return (
  <div className={Classes.Container}>
      <Navbar logo={sassLogo} height={200} width={250}/>
            <div className={Classes.main}>
                <div className={Classes.about}>
                <section className={Classes.header}>
                    <h2>Sass nedir, sass kullanımı</h2>
                    <div className={Classes.info}>
                        <p>süre: 42dk</p>
                        <p>dil: Türkçe</p>
                    </div>
                    </section>
                    <section className={Classes.description}>
                        <p>
                            css temeliniz varsa, css ile sass farkı nedir cevabını alacağınız ve örnek kodlarla birlikte sass&apos;ın temel kullanımına dair fikir sahibi olacağınız bir kaynak.
                        </p>
                        <p className={Classes.sourceElements}>
                            <h3>Kaynakta kullanılan bağlantılar;</h3>
                            <a href='https://drive.google.com/file/d/1F7XZiqRKB47mdqbUGdJ6YrZEM0GjP4Nf/view' target="_blank" rel='noreferrer'>video&apos;da kullanılan kaynak kodlar.</a>
                        </p>
                        <div>
          {<GoPrimitiveDot style={{color:"red"}} size={19}/>}<strong>Kod yazarak ilerleme</strong>
                    </div>
                    </section>
                </div>
                <div className={Classes.sourceBlock}>
                <label><AiOutlineArrowDown size={20}/>Kaynağın sahibine abone olarak destek olmayı unutmayın:&#x29;</label>
            <YoutubeEmbed embedId="Jgp0GuB-9DI"/>
            </div>
            </div>
            {/* 1 */}
  </div>

  )
}
