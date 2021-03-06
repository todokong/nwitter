import React, { useState } from "react";

const Auth = () => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const onChange = (event) => {
        const {target: {name, value}} = event;
        if(name ==="email"){
            setEmail(value);
        }else if(name ==="password"){
            setPassword(value)
        }
        console.log(event.target.name);
    }
    const onSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    name="email"
                    type="text" 
                    placeholder="Email" 
                    value={email} 
                    onChange={onChange}
                    required 
                />
                <input 
                    name="password"
                    type={"password"} 
                    placeholder="Password" 
                    value={password} 
                    onChange={onChange}
                    required 
                />
                <input 
                    type={"submit"} 
                    value="Log In" 
                />
            </form>
            <div>
                <button>Continue with Google</button>
                <button>Continue with GitHub</button>
            </div>
        </div>
    )
};

export default Auth;