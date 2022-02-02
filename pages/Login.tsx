import { logout, login ,useAuth } from '../initFirebase';
import {FcGoogle} from 'react-icons/fc'
import {SignGoogle} from '../initFirebase'
import { useRef, useState } from 'react';
import Classes from "../styles/auth.module.scss";
import Link from 'next/link';



export default function SignUp() { 

const [loading, setLoading] = useState(false);
const currentUser = useAuth();

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    async function handleLogin(){
        setLoading(true);
        try{
 await login(emailRef.current?.value, passwordRef.current?.value)
        } catch {
            alert("Şifrenizi doğru girdiğinizden emin olun (capslock açık mı kapalı mı kontrol edin) ve Emailinizi doğru girdiğinizden emin olun!")
            setLoading(false);
        }
     }
    async function handleLogout(){
        setLoading(true)
        try{
            await logout();
        }catch{
        }
setLoading(false)
    }
 
    return (
            <div className={Classes.container}>
                <form className={Classes.card}>
                    <h2>Giriş yap<hr/></h2>
                        <label>Email</label>
                        <input type="email" ref={emailRef} placeholder='Email'/>
                        <label>Şifre</label>
                        <input type="password" ref={passwordRef} placeholder='şifre'/>
                     
                    <section className={Classes.submit}>
                    <button type="submit" disabled={loading || currentUser} onClick={handleLogin}>
                        Giriş
                    </button>
                    <label onClick={SignGoogle} className={Classes.google}><FcGoogle size={30}/>Google ile giriş yap</label>
                    {/* <button type="submit" disabled={!currentUser} onClick={handleLogout}>
                        Log out 
                    </button> */}
                    
                    
              </section>
              <label>Hesabın yok mu? <Link href='/Signup'>Kayıt olmak için tıkla</Link></label>
                    </form>
                </div>
               
            
      
        
    )
}