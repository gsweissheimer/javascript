import React from "react";

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => {

    return (
        
        
        <article className="teacher-item">
            <header>
                <img src="https://i1.sndcdn.com/avatars-000231076699-90f7pt-t500x500.jpg" alt="Foto de perfil"/>
                <div>
                    <strong>Guilherme Weissheimer</strong>
                    <span>React Native</span>
                </div>
            </header>

            <p>
                Tempor aliquip enim ut quis aliquip sint amet duis voluptate minim. Labore qui deserunt Lorem magna commodo excepteur reprehenderit aute aute velit excepteur velit.<br />Cillum exercitation consectetur dolore et id officia nulla sunt ut elit ex voluptate excepteur.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button>
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>

    )
    
}

export default TeacherItem;