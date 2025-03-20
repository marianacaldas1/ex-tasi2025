import React from 'react'
import axios from 'axios'

const App = () => {
    var [ dados, setDados ] = React.useState([])

    const buscarDados = async () => {
        var url = "https://rickandmortyapi.com/api/character"

        await axios.get(url)
            .then(resposta => {
                console.log(resposta.data)
                setDados(resposta.data.results) 
            })
            .catch(error => {
                console.log("Erro ao buscar dados", error) 
            })
    }

    return(
        <div>
            <input type="button"
                   value="Buscar"
                   onClick={ () => buscarDados() }
            />
        </div>
    )
}

export default App
