import React from 'react'
import { useState } from "react";
import "./Login.scss"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [warning, setWarning] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email !== localStorage.getItem("UserEmail") || password !== localStorage.getItem("UserPassword")) {
            setWarning("Nome de usuário ou senha incorretos.");
        } else {
            setWarning("");
            setEmail("");
            setPassword("");
        }
    }

    return (
        <div className="container">
            <div className="message">
                <h1>Para continuar, faça login no Spotify.</h1>
            </div>
            <div className="warning">{warning}</div>
            <form className="form" onSubmit={handleSubmit}>
                <h1>Endereço de E-mail?</h1>
                <input type="email" placeholder="digite seu e-mail..." value={email}
                onChange={(e) => {setEmail(e.target.value)}}/>
                <h1>Senha</h1>
                <input type="password" placeholder="digite sua senha..." value={password}
                onChange={(e) => setPassword(e.target.value)}/>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login