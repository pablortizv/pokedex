import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/styles';
import {typePokemonColor} from '../styles/styleTypePokemon'
function TypePokemon(props) {
    return (
        <View style={{flex:1}}>
            <Text style={styles.statText}>Type:</Text>
            <View style={{flexWrap:'wrap', flexDirection:'row'}}>
                {props.types.map((type, i) => (
                    <View key={i} style={[styles.typePokeView, { backgroundColor: typePokemonColor[type.type.name].color}]} >
                        <Text style={[styles.statText, styles.textCenter]}>{type.type.name}</Text>
                    </View>
                ))}
            </View>
        </View>
    )
}

export default TypePokemon
