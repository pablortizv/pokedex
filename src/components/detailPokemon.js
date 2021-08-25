import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Stats from './stats';
import NavigationButtons from '../components/navigation';
import TypePokemon from './typePokemon';
import Location from './location';
import styles from '../styles/styles';

function DetailPokemon(props) {
    const [male, setMale] = useState(true);
    const [front, setFront] = useState(true);
    const [imageSelected, setImageSelected] = useState(props.pokemonDetails.sprites.front_default);
    
    useEffect(() => {
        imageSelector();
        
    });
    const imageSelector = () => {
        if(male === true){
            if(front === true){
                setImageSelected(props.pokemonDetails.sprites.front_default);
            } else {
                setImageSelected(props.pokemonDetails.sprites.back_default);
            }
        } else if(front === true){
                setImageSelected(props.pokemonDetails.sprites.front_female);
            } else {
                setImageSelected(props.pokemonDetails.sprites.back_female);
                }
    }
    const changePokeSelected = (id) => {
            var url = 'https://pokeapi.co/api/v2/pokemon/' + id + '/';
        props.changePokemon(url)
    }
    
    return (
        <ScrollView style={{flex:1}}>
            <NavigationButtons 
              backTitle={(props.pokemonDetails.id === 1)? '' : '# ' + (props.pokemonDetails.id - 1)}
              nextTitle={'# ' + (props.pokemonDetails.id + 1)}
              actionBack={() => {changePokeSelected((props.pokemonDetails.id - 1))}}
              actionNext={() => {changePokeSelected((props.pokemonDetails.id + 1))}}
              disabled={(props.pokemonDetails.id === 1)}
            />
            <Text style={[styles.textCenter, styles.pokeName]}>#{props.pokemonDetails.id} {props.pokemonDetails.name}</Text>
            <View style={styles.rowView}>
                <TouchableOpacity onPress={() => setFront(!front)}>
                    <Icon name="rotate-left" size={45} color="#0072B0" />
                </TouchableOpacity>
                
                <View style={{flex:1}}><Image style={styles.pokeImage}
                    source={{ uri: (imageSelected)}}
                /></View>
                <TouchableOpacity onPress={() => setFront(!front)}>
                    <Icon name="rotate-right" size={45} color="#0072B0" />
                </TouchableOpacity>
            </View>
            <Text style={styles.statText}>Gender:</Text>
            <View style={styles.gender}>
                <TouchableOpacity disabled={(props.pokemonDetails.sprites.front_female === null)} onPress={() => setMale(true)}>
                    <Icon name="pokeball" size={45} color="#0072B0" />
                </TouchableOpacity>
                <TouchableOpacity disabled={(props.pokemonDetails.sprites.front_female === null)} onPress={() => setMale(false)}>
                    <Icon name="pokeball" size={45} color="#DD2D51" />
                </TouchableOpacity>
            </View>
            <View style={styles.infoPokeView}>
                <View style={styles.flex}>
                    <Text style={styles.infoText}>Height: {props.pokemonDetails.height}"</Text>
                </View>
                <View style={styles.flex}>
                    <Text style={styles.infoText}>Weight: {props.pokemonDetails.weight} lbs</Text>
                </View>
            </View>
            <TypePokemon types={props.pokemonDetails.types}/>
            <ScrollView horizontal={true} style={styles.rowView}>
            {props.pokemonDetails.stats.map((stat, i) => (
                <Stats key={i} stat={stat} />
            ))}
            </ScrollView>
             <Location id={props.pokemonDetails.id} />
         </ScrollView>
    )
}

export default DetailPokemon
