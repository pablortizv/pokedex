import React from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import styles from '../styles/styles';

function PokeList(props) {

    return (
        <ScrollView style={styles.flex}>
             {props.pokemons.map((pokemon, i) => (
                    <TouchableOpacity  
                        key={i} 
                        onPress={() => props.detailSelected(pokemon.url)} 
                        style={[styles.rowView,styles.btnPokeList]}
                    >
                        <Icon name="pokeball" size={30} color="#0072B0" />
                        <Text style={styles.pokeName}> {pokemon.name}</Text>
                     </TouchableOpacity>
             ))}
        </ScrollView>
    )
}

export default PokeList
