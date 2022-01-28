import React from 'react'
import YoutubeEmbed from '../../../components/Youtube'
import tsLogo from '../../../images/tsLogo.png'
import Classes from '../../../styles/Pages.module.scss'
import {AiOutlineArrowDown} from 'react-icons/ai'
import {GoPrimitiveDot} from 'react-icons/go'
import Navbar from '../../../components/Navbar'

export default function index() {
    return (
        <div className={Classes.Container}>
            <Navbar logo={tsLogo}/>
            <div className={Classes.main}>
                <div className={Classes.about}>
                <section className={Classes.header}>
                    <h2>Yeni Başlayanlar İçin Typescript</h2>
                    <div className={Classes.info}>
                        <p>süre: 1s 32dk</p>
                        <p>dil: Türkçe</p>
                    </div>
                    </section>
                    <section className={Classes.description}>
                        <p>
                            Typescript ilk defa tanışıyorsanız gerekli kurulumlar dahil, typescriptin sunduklarını,farkını ve kod üzerinde temellerini öğreneceğiniz temiz özenle hazırlanmış bir kaynak.  
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
            <YoutubeEmbed embedId="1d92ipW7Mx8"/>
            </div>
            </div>
            {/* 1 */}
            <div className={Classes.main}>
                <div className={Classes.about}>
                <section className={Classes.header}>
                    <h2>React ile Temel TypeScript Kullanımı</h2>
                    <div className={Classes.info}>
                        <p>süre: 32 dk</p>
                        <p>dil: Türkçe</p>
                    </div>
                    </section>
                    <section className={Classes.description}>
                        <p>
                            Temel React bilginiz varsa Typescript fikrini kavrama ve giriş yapmak için ideal kaynak.<br/>
                            &#160;&#160; Typescript&apos;in react ile kullanımında karşınıza çıkabilecek temel bir kaç duruma kod üzerinde örnek
                        </p>
                        <p className={Classes.sourceElements}>
                            <h3>Kaynakta kullanılan bağlantılar;</h3>
                         <p><small>API ENDPOINT:</small>&nbsp;&nbsp;https://restcountries.com/v2/all</p>
                        <a href='http://json2ts.com/' target="_blank" rel='noreferrer'>json2ts.com</a>
                        </p>
                        <div>
          {<GoPrimitiveDot style={{color:"red"}} size={19}/>}<strong>Kod yazarak ilerleme</strong>
                    </div>
                    </section>
                </div>
                <div className={Classes.sourceBlock}>
                <label><AiOutlineArrowDown size={20}/>Kaynağın sahibine abone olarak destek olmayı unutmayın:&#x29;</label>
            <YoutubeEmbed embedId="qZ3xDaWpRzo"/>
            </div>
            </div>
        </div>
    )
}
