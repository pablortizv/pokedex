import React from 'react'
import { ScrollView, Text, View, TouchableOpacity } from 'react-native'


function PokeList(props) {

    return (
        <ScrollView style={{flex:1, borderWidth:1}}>
             {props.pokemons.map((pokemon, i) => (
                     <TouchableOpacity  
                        key={i} 
                        onPress={() => props.detailSelected(pokemon.url)} 
                        style={{flex:1, padding:5, borderBottomWidth:2, borderColor:'#225B68'}}
                    >
                        <Text style={{fontSize:25, color:'#225B68'}}>{pokemon.name}</Text>
                     </TouchableOpacity>
             ))}
        </ScrollView>
    )
}

export default PokeList
