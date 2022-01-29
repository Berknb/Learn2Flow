import Classes from '../styles/Navbar.module.scss'
import Image from 'next/image'
import { PropNav } from '../types'
import {AiFillHome} from 'react-icons/ai'
import { useRouter } from 'next/router'
import SearchBar from './SearchBar'

export default function Navbar(props : PropNav) {
    const router = useRouter();
  return (
  <nav className={Classes.mainNav}>
      <div className={Classes.icon}>
          <AiFillHome size={30} className={Classes.homeBtn} onClick={() => router.push("/")}/>
      <section className={Classes.NavLogo}>
          <Image alt='logo' src={props.logo} width={props.width} height={props.height}/>
      </section>
      </div>
      <section className={Classes.searchBar}>
          <SearchBar/>
      </section>
  </nav>
    )
}
