import React from "react";
//arrow function
/*
function App() {}
*/

const App = () =>
{
var [ valor, setValor ] = React.useState(0)

    var numero = 4
    numero = numero * 8

    const Clique = () => {
        numero = numero + 10
        setValor( valor + 1 )
        console.log(numero)
    }

    return (
        <div>
            <h1>Olá Mundo</h1>
            <h2>Hoje é quinta</h2>
            <h3>{numero}</h3>
            <input type='button'
                onClick={() => { Clique() }}
            value='Clique aqui'
            />
            <h3>{valor}</h3>
        </div>
    )
}

export default App