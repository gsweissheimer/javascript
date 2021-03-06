import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";

import './style.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {

    return (

        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG</p>
                    <Link to="/">
                        <FiArrowLeft  size={16} color="#E02041" />
                        Voltar para o logon
                    </Link>

                </section>
                <form action="">
                    <input type="text" placeholder="Nome da Ong"/>
                    <input type="email" placeholder="E-mail"/>
                    <input type="text" placeholder="Whats App"/>

                    <div className="input-group">
                        <input type="text" placeholder="Cidade"/>
                        <input type="text" placeholder="UF" style={{ width: 80 }}/>
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
        
    )
    
}