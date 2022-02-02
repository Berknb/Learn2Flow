import Navbar from "../../../components/PageNav"
import YoutubeEmbed from "../../../components/Youtube"
import {GoPrimitiveDot} from 'react-icons/go'
import {AiOutlineArrowDown} from 'react-icons/ai'
import Classes from '../../../styles/Pages.module.scss'
import reduxLogo from '../../../images/Redux.png'
export default function index() {
  return (
  <div className={Classes.Container}>
      <Navbar logo={reduxLogo} height={200} width={250}/>
            <div className={Classes.main}>
                <div className={Classes.about}>
                <section className={Classes.header}>
                    <h2>react-redux&apos;a ilk adım</h2>
                    <div className={Classes.info}>
                        <p>süre: 50dk</p>
                        <p>dil: Türkçe</p>
                    </div>
                    </section>
                    <section className={Classes.description}>
                        <p>
                            React temeliniz varsa, orjinal dökümantasyon üzerinden örnek kodlarla birlikte redux&apos;ın temel kullanımına dair fikir sahibi olacağınız bir kaynak.
                        </p>
                        <p className={Classes.sourceElements}>
                            <h3>Kaynakta kullanılan bağlantılar;</h3>
                            <a href='https://react-redux.js.org/introduction/getting-started' target="_blank" rel='noreferrer'>react-redux dökümantasyon</a>
                         <a href='https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd' target="_blank" rel='noreferrer'>Redux dev tools chrome eklentisi</a>
                        </p>
                        <div>
          {<GoPrimitiveDot style={{color:"red"}} size={19}/>}<strong>Kod yazarak ilerleme</strong>
          {<GoPrimitiveDot style={{color:"khaki"}} size={19}/>}<strong>Dökümantasyon</strong>
                    </div>
                    </section>
                </div>
                <div className={Classes.sourceBlock}>
                <label><AiOutlineArrowDown size={20}/>Kaynağın sahibine abone olarak destek olmayı unutmayın:&#x29;</label>
            <YoutubeEmbed embedId="UWB8948Kko4"/>
            </div>
            </div>
            {/* 1 */}
  </div>

  )
}