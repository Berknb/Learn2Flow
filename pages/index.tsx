import Head from 'next/head'
import { useRouter } from 'next/router'
import Classes from '../styles/welcome.module.scss'
import Image from 'next/image'
import reactLogo from '../images/reactLogo.png'
import nextLogo from '../images/nextLogo.png'
import tsLogo from '../images/tsLogo.png'
import webLogo from '../images/completeWeb2.png'
import ReduxLogo from '../images/Redux.png'
import axiosLogo from '../images/axiosLogo.png'
import sassLogo from '../images/sassLogo.png'
import bootstrapLogo from '../images/bootsrapLogo.png'
import jsonLogo from '../images/jsonLogo.png'
import nodejsLogo from '../images/nodejsLogo.png'
import {GoPrimitiveDot} from 'react-icons/go'

export default function Home() {
  const router = useRouter();
  return (
    <div className={Classes.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      
      <main>

        <span className={Classes.welcome}>
        <h1><span>Learn2Flow</span>&apos;a Hoşgeldin !</h1>
        <h3>
          Bu sayfa güncel ve popüler web geliştirme araçları hakkında ücretsiz eğitim kaynaklarına<br/>
          ulaşabileceğiniz bir rehberdir. Kaynakların içeriği 3 farklı özellikte olabilir;<br/>  
          <strong>{<GoPrimitiveDot style={{color:"red"}} size={19}/>}Kod yazarak ilerleme</strong>
          <strong>{<GoPrimitiveDot style={{color:"khaki"}} size={19}/>}Dökümantasyon</strong>
          <strong>{<GoPrimitiveDot style={{color:"black"}} size={19}/>}Makale</strong><br/>
          Kaynağın yanında belirtilen bu özellikleri dikkate alarak kendi öğrenme yönteminize en çok uyan kaynağı seçebilirsiniz.  
        </h3>
        </span>

        <p>&nbsp;&nbsp;&nbsp;nereden başlamak istersin;</p>

        <div className={Classes.categories}>
<span><Image alt='react js' src={reactLogo} onClick={() => router.push("Categories/React")}/></span>
<span><Image alt='next js' src={nextLogo} onClick={() => router.push("Categories/Next")}/></span>
<span><Image alt='typescript' src={tsLogo} onClick={() => router.push("Categories/TypeScript")}/></span>
<span><Image alt='complete web' src={nodejsLogo} onClick={() => router.push("Categories/Nodejs")}/></span>
<span><Image alt='complete web' src={webLogo} onClick={() => router.push("Categories/CompleteWeb")}/></span>
<span><Image alt='complete web' src={ReduxLogo} onClick={() => router.push("Categories/Redux")}/></span>
<span><Image alt='complete web' src={axiosLogo} onClick={() => router.push("Categories/Axios")}/></span>
<span><Image alt='complete web' src={sassLogo} onClick={() => router.push("Categories/Sass")}/></span>
<span><Image alt='complete web' src={bootstrapLogo} onClick={() => router.push("Categories/Bootstrap")}/></span>
<span><Image alt='complete web' src={jsonLogo} onClick={() => router.push("Categories/Json")}/></span>
        </div>
      </main>
    </div>
  )
}



