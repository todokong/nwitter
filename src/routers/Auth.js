import React, { useState } from "react";
import { 
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithPopup,
} from "firebase/auth";

const Auth = () => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ newAccount, setNewAccount ] = useState(true);
    const [ error, setError] = useState("");
    const onChange = (e) => {
        const {target: {name, value}} = e;
        if(name === "email"){
            setEmail(value);
        }else if(name === "password"){
            setPassword(value)
        }
        console.log(e.target.name);
    }
    const onSubmit = async (e) => {
        console.log("submit")
        const auth = getAuth();
        e.preventDefault();
        try {
            let data;
            if(newAccount){
                data = await createUserWithEmailAndPassword(auth, email, password);
            } else {
                data = await signInWithEmailAndPassword(auth, email, password);
            }
            console.log(data)
        } catch (error) {
            console.log(error)
            setError(error.message)
        }
    }
    const toggleAccount = () => setNewAccount(prev => !prev);
    const onSocialClick = async e => {
        const auth = getAuth();
        const {target: {name}} = e;
        let provider;
        if(name === "google"){
            provider = new GoogleAuthProvider();
        }else if(name === "github"){
            provider = new GithubAuthProvider();
        }
        const result = await signInWithPopup(auth, provider);
        console.log(result)
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    name="email"
                    type="email"
                    placeholder="Email" 
                    value={email} 
                    onChange={onChange}
                    required 
                />
                <input 
                    name="password"
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={onChange}
                    required 
                />
                <input 
                    type={"submit"} 
                    value={newAccount ? "Create Account" : "Log In"}
                />
                {error}
            </form>
            <span onClick={toggleAccount}>{newAccount ? "Sign In" : "Create Account"}</span>
            <div>
                <button name="google" onClick={onSocialClick}>
                    Continue with Google
                </button>
                <button name="github" onClick={onSocialClick}>
                    Continue with GitHub
                </button>
            </div>
        </div>
    )
};

export default Auth;