import emailjs from 'emailjs-com'
import Classes from './styles/Feedback.module.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

export default function Feedback(){
    const notifySuccess = () => toast.success("Mesajınız iletildi!");
    const notifyError = () => toast.error("Lütfen önce alanları doldurun");
    const [sending,setSending] = useState(false)

    function sendMail(e:any){
        e.preventDefault();
        (e.target.message.value && e.target.name.value && e.target.userEmail.value) === "" ? 
        notifyError():
        (   setSending(true),
            emailjs.sendForm('service_9t3n059','template_1gcvppf',e.target,'user_xTGtzTjo0PkEIgMSfHnqv').then(res=>{
            console.log(res)
            setSending(false)
            notifySuccess()
        }).catch(err => console.log(err))
        )

    }
    return(
        <div className={Classes.container}>
            <h1>İletişim formu</h1>
            <form onSubmit={sendMail}>
                <label>isminiz:</label>
                <input type="text" name="name"/>

                <label>Email adresiniz:</label>
                <input type="email" name="userEmail"/>

                <label>Mesajınız:</label>
                <textarea name="message" rows={4}/>
                <button>Gönder</button>
            </form>
            <ToastContainer autoClose={1700} position="bottom-right" closeOnClick pauseOnHover={false}/>
            {sending && <p>Mesajınız iletiliyor...</p>}
        </div>
    )
}