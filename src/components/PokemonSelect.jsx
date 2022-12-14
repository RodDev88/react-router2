import { useState, useEffect } from "react";
import { useNavigate } from "react-router";



const PokemonSelect = () => {
    const endpoint = 'https://pokeapi.co/api/v2/pokemon'
    const navigate = useNavigate()
    const [results, setResults] = useState([])
    const [selectedPokemon, setSelectedPokemon] = useState('')

    const irAPokemon = () => {
        if (selectedPokemon === '') {return}

        navigate(`/pokemon/${selectedPokemon}`)
    }

    useEffect(() =>  {
        fetch(endpoint).then(resp => resp.json())
        .then(data => {
            setResults(data.results.map(result => result.name))
        })
    }, [])

    return (
        <>
        <h1>Selecciona un Pokemon</h1>
        <select onChange={(e) => setSelectedPokemon(e.target.value)}>
            <option value='' disabled>
                Selecciona tu Pokemon
            
            </option>

            {
                results.map(name => {
                    return  <option key={name} value={name}>{name}</option>

                })
            }
        </select>
         <button onClick={irAPokemon}>Ver detalles</button>
        </>
    )
}

export default PokemonSelect;