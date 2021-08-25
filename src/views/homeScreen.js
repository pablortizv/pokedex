import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {View} from 'react-native';
import LoadingComponent from '../components/loading';
import ErrorComponent from '../components/error';
import PokeList from '../components/pokeList';
import NavigationButtons from '../components/navigation';
import styles from '../styles/styles';


function HomeScreen({ navigation }) {
  const [next, setNext] = useState('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151');
  const [previous, setPrevious] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([])
  useEffect( () => {
    getPokemons(next)
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
      <View style={styles.viewScreen}>
        {
          loading? <LoadingComponent/> : 
          (error? <ErrorComponent/> 
            :
          <View style={styles.flex}>
            <PokeList detailSelected ={(selected)=>navigation.navigate('Detail', { url: selected})} pokemons={pokemons}/> 
            <NavigationButtons 
              backTitle={'Previous'}
              nextTitle={'Next'}
              actionBack={() => {getPokemons(previous)}}
              actionNext={() => {getPokemons(next)}}
              disabled={(previous === '')}
            />
          </View>
          )
        }
      </View>
      );
}

export default HomeScreen
