import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {View, Text, TouchableOpacity} from 'react-native';
import LoadingComponent from '../components/loading';
import ErrorComponent from '../components/error';
import PokeList from '../components/pokeList';


function HomeScreen({ navigation }) {
  const [next, setNext] = useState('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151');
  const [previous, setPrevious] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([])
  useEffect(async () => {
    await getPokemons(next)
    }, []);
  
  const getPokemons = async (send) => {
    setLoading(true)
    await axios.get(send)
      .then(response => {
        let pokemons = response.data.results;
        let nextPokemons = response.data.next;
        let previousPokemons;
        if (response.data.previous === null){
          previousPokemons = ''
        }else{
          previousPokemons = response.data.previous
        } ;
        setNext(nextPokemons);
        setPrevious(previousPokemons);
        setPokemons(pokemons);
      })
      .catch(e => {
        setError(true)
      })
      setLoading(false)
  }
    return (
      <View style={{flex:1, backgroundColor:'#56C4C1', borderWidth:10, borderColor:'#B0B0B0'}}>
        {
          loading? <LoadingComponent/> : 
          (error? <ErrorComponent/> 
            :
          <View style={{flex:1}}>
            <Text>Search by name or Pokedex number.</Text>
            <PokeList detailSelected ={(selected)=>navigation.navigate('Detail', { url: selected})} pokemons={pokemons}/> 
            <View>
              <TouchableOpacity  disabled={(previous === '')} style={{padding:10}} onPress={()=>getPokemons(previous)}>
                <Text>previous</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{padding:10}} onPress={()=>getPokemons(next)}>
                <Text>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
          )
        }
      </View>
      );
}

export default HomeScreen
