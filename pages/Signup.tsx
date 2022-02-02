import {SignGoogle} from '../initFirebase'
import { useRef, useState } from 'react';
import { SignupEmail, useAuth} from '../initFirebase'
import Link from 'next/link';
import Classes from '../styles/auth.module.scss'
import {FcGoogle} from 'react-icons/fc'

function Signup() {
const [loading, setLoading] = useState(false);
const currentUser = useAuth();

const emailRef = useRef<HTMLInputElement>(null);
const passwordRef = useRef<HTMLInputElement>(null);

async function handleSignupEmail(){
    setLoading(true);
    try{
await SignupEmail(emailRef.current?.value, passwordRef.current?.value)
    } catch {
        alert("Email adresinizi doğru girdiğinizden emin olun ve en az 6 karakterlik bir şifre girin ! ");
        setLoading(false);
    }
 }

    return (
            <div className={Classes.container}>
                <form className={Classes.card}>
                    <h2>Yeni hesap oluştur<hr/></h2>
                        <label>Email</label>
                        <input type="email" ref={emailRef} placeholder='Email'/>
                        <label>şifre</label>
                        <input type="password" ref={passwordRef} placeholder='şifre'/>
                    <section className={Classes.submit}>
                    <button type="submit" disabled={loading || currentUser} onClick={handleSignupEmail}>
                       Kayıt ol
                    </button>
                        <label onClick={SignGoogle} className={Classes.google}><FcGoogle size={30}/>Google ile giriş yap</label>
              </section>
              <label>Hesabın var mı?<Link href='/Login'> Giriş yapmak için tıkla</Link></label>
                    </form>
                </div> 
    )
}

export default Signup


