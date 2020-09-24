import React from 'react';
import api from '../../services/api';


import './style.css';

function DevItem({ dev }) {

    async function editDev() {

        console.log('Edit');

    }

    async function deleteDev() {

        handleDeleteDev(dev._id);

    }

    async function handleDeleteDev(data) {

        console.log(data);
  
        const response = await api.delete('/devs?_id=' + data);

        console.log(response);
  
    }

    return (

        <li className="dev-item">
            <header>
            <img src={dev.avatar_url} alt={dev.name}/>
            <div className="user-info">
                <strong>{dev.name}</strong>
                <span>{dev.techs.join(', ')}</span>
            </div>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no github</a>
            <div className="actions">
                <button className="edit" onClick={editDev}>Editar</button>
                <button className="delete" _id={dev._id} onClick={deleteDev}>Deletar</button>
            </div>
        </li>

    )

}

export default DevItem;