import Classes from './styles/Popup.module.scss'
import {BiArrowBack} from 'react-icons/bi'
import Feedback from './Feedback'

function Popup(props:any) {
if(props.trigger === true){
    return (
        <div className={Classes.popup}>
            <div className={Classes.popupInner}>
                <label className={Classes.popupCloseBtn} onClick={() => props.setTrigger(false)}><BiArrowBack size={30}/></label>
                <Feedback/>
                {props.children}
            </div>
        </div>
    )
}else{return null}
}

export default Popup