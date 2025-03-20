import React from "react";

// arrow function
const App = () => {
  const [frase, setFrase] = React.useState(""); // estado para armazenar a frase digitada

  const mostrarFrase = () => {
    alert(frase); // Exibe a frase usando um alert
  };

  return (
    <div>
      <h1>Olá Mundo</h1>
      <h2>Digite uma frase abaixo:</h2>

      {/* Adicionando o campo de texto para o usuário digitar a frase */}
      <div>
        <input
          type="text"
          value={frase} // A frase no input vai ser controlada pelo estado
          onChange={(e) => setFrase(e.target.value)} // Atualiza o estado com a frase digitada
          placeholder="Digite uma frase aqui"
        />
        <input
          type="button"
          value="Mostrar Frase"
          onClick={mostrarFrase} // Quando o botão for clicado, exibe a frase
        />
      </div>
    </div>
  );
};

export default App;
