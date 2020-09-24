import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from "react-icons/fi";

import './style.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {

    return (

        <div className="profile-container">
            <div className="content">
                <header>
                    <img src={logoImg} alt="Be The Hero"/>
                    <span>Bem vinda, APAE</span>
                    
                    <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                    <button type="button">
                        <FiPower size={18} color="#E02041" />
                    </button>
                </header>

                <h1>Casos Cadastrados</h1>

                <ul>
                    <li>
                        <strong>Caso:</strong>
                        <p>Caso Teste</p>

                        <strong>Descrição:</strong>
                        <p>Descrição Teste</p>

                        <strong>Valor:</strong>
                        <p>R$ 120,00</p>

                        <button type="button"><FiTrash2 size={16} color="#a8a8b3" /></button>
                    </li>
                    <li>
                        <strong>Caso:</strong>
                        <p>Caso Teste</p>

                        <strong>Descrição:</strong>
                        <p>Descrição Teste</p>

                        <strong>Valor:</strong>
                        <p>R$ 120,00</p>

                        <button type="button"><FiTrash2 size={16} color="#a8a8b3" /></button>
                    </li>
                    <li>
                        <strong>Caso:</strong>
                        <p>Caso Teste</p>

                        <strong>Descrição:</strong>
                        <p>Descrição Teste</p>

                        <strong>Valor:</strong>
                        <p>R$ 120,00</p>

                        <button type="button"><FiTrash2 size={16} color="#a8a8b3" /></button>
                    </li>
                    <li>
                        <strong>Caso:</strong>
                        <p>Caso Teste</p>

                        <strong>Descrição:</strong>
                        <p>Descrição Teste</p>

                        <strong>Valor:</strong>
                        <p>R$ 120,00</p>

                        <button type="button"><FiTrash2 size={16} color="#a8a8b3" /></button>
                    </li>
                </ul>
            </div>
        </div>
        
    )
    
}