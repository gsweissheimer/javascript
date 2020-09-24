import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from "react-icons/fi";

import './style.css';

import logoImg from '../../assets/logo.svg';
import herosImg from '../../assets/heroes.png';

export default function Logon() {

    return (

        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Heroes" srcset=""/>
                    
                <form action="">
                    <h1>Faça seu logon</h1>

                    <input type="text" placeholder="Sua Id" />
                    <button className="button" type="submit">Entrar</button>

                    <Link to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={herosImg} alt="Heroes" srcset=""/>
        </div>
        
    )
    
}