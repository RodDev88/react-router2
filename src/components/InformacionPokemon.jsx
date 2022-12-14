import { useParams } from "react-router";
import { useEffect, useState } from "react";

const InformacionPokemon = () =>  {

    const endpoint = 'https://pokeapi.co/api/v2/pokemon'
    const { id } = useParams()
    const [pokemon, setPokemon] = useState({})

    

    useEffect (() => {
    fetch(`${endpoint}/${id}`).then(resp => resp.json())
       .then(data => {
           setPokemon(data)
        })
    },[id])

    return (
        
         <ul>
         <li>{pokemon.name}</li>
        </ul>
    )
}

export default InformacionPokemon;