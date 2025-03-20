import React, { useState } from 'react';
import Filho from './component/Filho';

const App = () => {
  const [valor, setValor] = useState(''); 
  const [nome, setNome] = useState('');    
  const [corFundo, setCorFundo] = useState('green'); 

  const alterarCorDeFundo = (nome) => {
    if (nome.toLowerCase() === 'azul') {
      setCorFundo('blue');
    } else if (nome.toLowerCase() === 'vermelho') {
      setCorFundo('red');
    } else {
      setCorFundo('green'); 
    }
  };

  return (
    <div style={{ background: corFundo, minHeight: '100vh' }}>
      <input
        type="text"
        placeholder="Digite algo"
        onChange={(e) => setValor(e.target.value)}
      />
      <Filho texto={valor} />

      <input
        type="text"
        placeholder="Digite o nome"
        onChange={(e) => {
          setNome(e.target.value);
          alterarCorDeFundo(e.target.value); 
        }}
      />
    </div>
  );
};

export default App;
