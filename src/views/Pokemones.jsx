import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
//importando navigate y useState

import PokemonSelected from "../components/PokemonSelected"
//importando componente que llevara la informacion de imagenes y habilidades

//creando la funcion pokemon para poder importarla al app
function Pokemones(props) {
    const [pokemons, setPokemons] = useState([])
    const [pokemonUser, setPokemonUser] = useState("")
    const navigate = useNavigate()
    const api = "https://pokeapi.co/api/v2/pokemon"

    const pokemonList = async () => {
        const response = await fetch(api)
        const data = await response.json();
        console.log(data.results)
        setPokemons(data.results)
    }
    //creando la lista de pokemon con la api

    const pokemonInformation = async () => {
        if (!pokemonUser) return alert("debes elegir un pokemon");

        navigate(`/pokemon/${pokemonUser}`)
    }
    //ocupamos useNavigate ya que nos permite navegar cuando ocurre algún cambio en el estado

    useEffect(() => {
        pokemonList()
    }, [])
    //

    return (<div className="pokemonSelect">
        <h1>Selecciona a un pokemon</h1>
        <select onChange={((e) => setPokemonUser(e.target.value))}>
            <option value="" >Pokemones</option>
            {pokemons.map(({ name }, i) => (
                <option key={i} value={name}>{name}</option>
            ))}
        </select>
        <button onClick={pokemonInformation}>Ver Detalles</button>
    </div>)
}
export default Pokemones