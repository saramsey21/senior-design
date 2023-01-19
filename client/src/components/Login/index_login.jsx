import React, { useState } from "react"
import lyfeonLogo from '../../assets/lyfeon-green.png'
import googleLogo from '../../assets/google-logo.png'
import './login.css';
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return(
        <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <img className="mt-24 mb-10" src={lyfeonLogo} alt="" width="230" height="69" />
            <h2 className="mb-5 font-bold text-3xl text-[#525252]">Login to your Account</h2>
            <button className="border-2 rounded-[5px] px-16 py-3">
                <img className="float-left mr-5" src={googleLogo} alt="" width="20" height="20" />
                <p className="float-right font-bold text-[#828282]">Continue with Google</p>
            </button>
            <p className="m-10 font-semibold text-[#A1A1A1]">---------- or Sign in with Email ----------</p>
            <div className="auth-form-container">
                <form onSubmit={handleSubmit}>
                    <div className="text-left text-[#828282]">
                        <label className="font-semibold" htlmfor="email">Email</label>
                        <input className="mb-6 border-2 w-full rounded-[5px] px-2 py-2" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="myemailaddress@gmail.com" id="email" name="email" />
                        <label className="font-semibold" htlmfor="password">Password</label>
                        <input className="border-2 w-full rounded-[5px] px-2 py-2" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                    </div>
                    <div className="mt-2">
                        <p className="float-left text-[#A1A1A1]"><input className="accent-lyfeon-green checked:checkmark-white" type="checkbox" />  Remember Me</p>
                        <button className="float-right text-semibold text-lyfeon-green">Forgot Password?</button>
                    </div>
                    <button className="mt-10 mb-24 w-full font-extrabold text-lg text-white bg-lyfeon-green rounded-[6px] px-16 py-3" type="submit">Log In</button>
                </form>
                <div className="mt-24">
                    <p className="text-[#828282]">Not registered yet?</p>
                    <button className="text-semibold text-lyfeon-green" onClick={() => props.onFormSwitch('register')}>Create an account</button>
                </div>
            </div>
        </div>
    )
}
