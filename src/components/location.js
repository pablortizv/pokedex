import React, {useState, useEffect} from 'react';
import {View,Text} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import styles from '../styles/styles';

function Location(props) {
    const [locations, setLocations] = useState([]);
    const [errorText, setErrorText] = useState('No data');
    useEffect(() => {
        getLocations();
    }, [])
    const getLocations = async() => {
        await axios.get('https://pokeapi.co/api/v2/pokemon/'+ props.id  + '/encounters')
        .then(response => {
            setLocations(response.data)
        })
        .catch(e => {
            setErrorText('Error to get locations')
        })
    }
    return (
        <View>
            <Text  style={styles.statText}>Locations:</Text>
            {
            locations.length === 0? <Text style={{textAlign:'center'}}>{errorText}</Text>
            :
            locations.map((location, i) => (
                <View  key={i} style={{flexDirection:'row', flex:1,}}>
                    <Icon name='pokemon-go' size={30} />
                    <View style={styles.flex}>
                    <Text style={[styles.flex, styles.wrap, styles.statText]}>{(location.location_area.name).replace(/-/g, ' ')}</Text>
                    </View>
                </View>
             ))
            }
        </View>
    )
}

export default Location
