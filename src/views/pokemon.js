import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {View} from 'react-native';
import LoadingComponent from '../components/loading';
import ErrorComponent from '../components/error';
import DetailPokemon from '../components/detailPokemon';

function Pokemon({ route, navigation }) {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [pokemonDetails, setPokemonDetails] = useState('')
    const { url } = route.params;
      useEffect( async() => {
        setLoading(true)
        await axios.get(url)
        .then(response => {
            setPokemonDetails(response.data)
        })
        .catch(e => {
          setError(true)
        })
        setLoading(false)
    }, [])
    return (
        <View style={{flex:1, backgroundColor:'#56C4C1', borderWidth:10, borderColor:'#B0B0B0'}}>
            {
                loading? <LoadingComponent/> : 
                (error? <ErrorComponent/> 
                    :   
                    <DetailPokemon pokemonDetails={pokemonDetails} />
                )
                }
        </View>
    )
}

export default Pokemon
