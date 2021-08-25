import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import LoadingComponent from '../components/loading';
import ErrorComponent from '../components/error';
import DetailPokemon from '../components/detailPokemon';
import styles from '../styles/styles'

function Pokemon({ route, navigation }) {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [pokemonDetails, setPokemonDetails] = useState('');

    const { url } = route.params;
      useEffect( async() => {
        getDetailPokemon(url)
    }, [])
    const getDetailPokemon = async (url) => {
        setLoading(true)
        await axios.get(url)
        .then(response => {
            setPokemonDetails(response.data)
        })
        .catch(e => {
          setError(true)
        })
        setLoading(false)
    }
    return (
        <View style={styles.viewScreen}>
            {
            loading? <LoadingComponent/> : 
                (error? <ErrorComponent/> 
                :
                <View style={styles.flex}>
                    <TouchableOpacity style={[styles.rowView, styles.btnBack]} onPress={() => navigation.goBack()}>
                        <Icon name={'keyboard-backspace'} size={20} />
                        <Text style={styles.btnBackText}>Back</Text>
                    </TouchableOpacity >
                    <DetailPokemon pokemonDetails={pokemonDetails} changePokemon={(url) => getDetailPokemon(url)}/>
                </View>
                )
            }
        </View>
    )
}

export default Pokemon
