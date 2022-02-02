import Classes from './styles/SearchBar.module.scss'
import {GoSearch} from 'react-icons/go'

export default function SearchBar() {
    
  return (
      <div className={Classes.container}>
          <input type="text" placeholder='Ne aramıştınız ?' />
          <button><GoSearch size={25}/></button>
      </div>
  )
}
