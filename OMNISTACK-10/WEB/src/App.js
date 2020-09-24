import React, { useEffect, useState } from 'react';
import api from './services/api';

import './global.css';
import './app.css';
import './sidebar.css';
import './main.css';

// 3 conceitos principais do React
// componente: função que retorna html, css e/ou JS ("function App()" é um componente)
// estado: informação mantida pelo componente que será manipulada pelo componente (imutabilidade)
// propriedade: são os atributos do html (informações que o componente pai passa para o componente filho)

import DevForm from './components/DevForm/';

import DevItem from './components/DevItem/';

function App() {

  const [devs, setDevs] = useState([]);

  useEffect(() => {

    async function loadDevs() {

      const response = await api.get('/devs');

      setDevs(response.data);

    }

    loadDevs();

  }, []);

  async function handleAddDev(data) {

    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]);

  }

  return (
    
    <div id="app">

      <aside>

        <strong>Cadatrar</strong>

        <DevForm onSubmit={handleAddDev} />

      </aside>

      <main>
        <ul>

          {devs.map( dev => (

            <DevItem key={dev._id} dev={dev} />

          ))}

        </ul>
      </main>

    </div>

  );
}

export default App;
