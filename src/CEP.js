import React, { useState } from 'react';
import axios from 'axios';
import Blog from './Blog';

const EnderecoForm = () => {
  const [cep, setCep] = useState('');
  const [enderecoData, setEnderecoData] = useState({
    endereco: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

  const handleCepChange = (e) => setCep(e.target.value);

  const handleBlurCep = async () => {
    if (cep.length === 8) {
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        const { logradouro, bairro, localidade, uf } = response.data;
        setEnderecoData({
          endereco: logradouro,
          bairro: bairro,
          cidade: localidade,
          estado: uf,
        });
      } catch (error) {
        console.error("CEP digitado inválido", error);
      }
    } else {
      alert("Digite um CEP válido.");
    }
  };

  return (
    <div>
      <h2>Digite seu CEP para consultar</h2>
      <form>
        <div>
          <label>CEP:</label>
          <input
            type="text"
            value={cep}
            onChange={handleCepChange}
            onBlur={handleBlurCep}
            maxLength="8"
            placeholder="Digite o CEP"
          />
        </div>
        {['endereço', 'bairro', 'cidade', 'estado'].map((field) => (
          <div key={field}>
            <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
            <input
              type="text"
              value={enderecoData[field]}
              disabled
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            />
          </div>
        ))}
      </form>
      <Blog enderecoData={enderecoData} />
    </div>
  );
};

export default EnderecoForm;
