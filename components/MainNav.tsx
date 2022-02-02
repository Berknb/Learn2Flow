import Classes from './styles/MainNav.module.scss'
import Image from 'next/image'
import { PropNav } from '../types'
import Popup from './Popup'
import { useState } from 'react'
import {GrMail, GrLogout} from 'react-icons/gr'
import {BiUser} from 'react-icons/bi'
import { useRouter } from 'next/router'


export default function MainNav(props : PropNav) {
    const [popup,setPopup] = useState(false);
    const router = useRouter();

  return (
  <nav className={Classes.mainNav}>
      <section className={Classes.NavLogo} onClick={()=>router.push("/")}>
          <Image alt='logo' src={props.logo} width={props.width} height={props.height}/>
      </section>

      <section className={Classes.feedback} onClick={() => {setPopup(true)}}>
          <GrMail size={20}/>
          <p>Öneri ve fikirlerinizi iletebilirsiniz!</p>
      </section>
      <Popup trigger={popup} setTrigger={setPopup}/>

      <section>
          <BiUser size={25}/>
      </section>
  </nav>
    )
}