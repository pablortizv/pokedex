import React, {useState, useEffect} from 'react'
import {View, ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Stats from './stats';

function DetailPokemon(props) {
    const [male, setMale] = useState(true)
    const [front, setFront] = useState(true)
    const [imageSelected, setImageSelected] = useState(props.pokemonDetails.sprites.front_default)
    useEffect(() => {
        imageSelector()
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
    return (
        <ScrollView style={{flex:1}}>
            <Text style={{textAlign:'center'}}>#{props.pokemonDetails.id} {props.pokemonDetails.name}</Text>
            <View style={{flexDirection:'row', paddingHorizontal:5}}>
                <TouchableOpacity onPress={() => setFront(!front)}>
                    <Icon name="rotate-left" size={45} color="#0072B0" />
                </TouchableOpacity>
                
                <View style={{flex:1}}><Image style={{ height: 250, resizeMode:'contain' }}
                    source={{ uri: (imageSelected)}}
                /></View>
                <TouchableOpacity onPress={() => setFront(!front)}>
                    <Icon name="rotate-right" size={45} color="#0072B0" />
                </TouchableOpacity>
            </View>
            <Text>Gender:</Text>
            <View style={{flexDirection:'row', justifyContent:'center'}}>
                <TouchableOpacity disabled={(props.pokemonDetails.sprites.front_female === null)} onPress={() => setMale(!male)}>
                    <Icon name="pokeball" size={45} color="#0072B0" />
                </TouchableOpacity>
                <TouchableOpacity disabled={(props.pokemonDetails.sprites.front_female === null)} onPress={() => setMale(!male)}>
                    <Icon name="pokeball" size={45} color="#DD2D51" />
                </TouchableOpacity>
            </View>
            <View style={{flexWrap:'wrap', flexDirection:'row', backgroundColor:'#225B68'}}>
                <View style={{flexDirection:'column', flex:1}}>
                    <Text style={{textAlign:'center', color:'#56C4C1'}}>Height: {props.pokemonDetails.height}"</Text>
                </View>
                <View style={{flexDirection:'column', flex:1}}>
                    <Text style={{textAlign:'center', color:'#56C4C1'}}>Weight: {props.pokemonDetails.weight} lbs</Text>
                </View>
            </View>
            <Text>Type:</Text>
            <View style={{flexWrap:'wrap', flexDirection:'row'}}>
                {props.pokemonDetails.types.map((type, i) => (
                    <View key={i} style={{flexDirection:'column', width:'50%', backgroundColor:'red'}}>
                        <Text style={{textAlign:'center', color:'#56C4C1'}}>{type.type.name}</Text>
                    </View>
                ))}
             </View>
             <ScrollView horizontal={true} style={{flexDirection:'row', paddingHorizontal:5}}>
                {props.pokemonDetails.stats.map((stat, i) => (
                    <Stats key={i} stat={stat} />
                ))}
             </ScrollView>
         </ScrollView>
    )
}

export default DetailPokemon
