import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Card from "./Card";

function PokemonSelect() {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {

        const details = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const data = await response.json();
            setPokemon(data);
        };

        details()
    }, [])

    const { stats = [], sprites = {}, } = pokemon


    return (<div>
        <Card image={sprites.other?.home.front_default} stats={pokemon.stats} name={name} />
    </div>)
}
export default PokemonSelect