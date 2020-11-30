import React, { useContext, useState, useEffect } from 'react'
import './HomeView.css'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../utils/context/UserContext'
import Axios from 'axios'
import PokemonService from '../../routes/shared/api/service/PokemonService'

export const HomeView = () => {
    const history = useHistory();
    const [loggedInUser, setLoggedinUser] = useContext(UserContext)
    const [randomPokemonCharacter, setRandomPokemonCharacter] = useState ()

    const fetchRandomPokemonCharacter = async () =>{
      try {
        const response = await PokemonService.getRandomPokemonCharacter()
        setRandomPokemonCharacter(response.data)
      }catch (error) {
        console.log(error)
      }
    }
useEffect (() => {
  fetchRandomPokemonCharacter()
  }, [])



    return loggedInUser
    
        ? <div className="homeContainer">
            <h1>Welcome: {loggedInUser}</h1>
            <h1>Home Page</h1>
          </div>
        : <div className="homeContainer">
            <h1>Home Page</h1>
            <br />
            <button className="pokemoncharactersbutton" onClick={() => history.push("/pokemoncharacters")}>Pokémon characters Page</button>
          </div>

    
  }


