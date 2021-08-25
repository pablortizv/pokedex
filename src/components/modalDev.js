import React from 'react';
import {View, Text, TouchableOpacity, Modal, Image} from 'react-native';
import styles from '../styles/styles';
import Stats from './stats';

function ModalDev(props) {
    const statsDev = [
        {
            "base_stat": 130,
            "stat": {
                "name": "React"
            }
        },
        {
            "base_stat": 120,
            "stat": {
                "name": "React Native"
            }
        },
        {
            "base_stat": 60,
            "stat": {
                "name": "Nodejs"
            }
        },
        {
            "base_stat": 160,
            "stat": {
                "name": "Css"
            }
        },
    ]
    return (
        <Modal
          animationType="slide"
          transparent={true}
          visible={props.modal}
          onRequestClose={() => props.onRequestClose()}
        >
          <View style={[styles.modalView, styles.viewScreen]}>
            <Image style={styles.pokeImage}
                source={{ uri: ('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png')}}
            />
            <View style={[styles.flex, styles.pad]}>
                <View style={styles.rowView}>
                    {statsDev.map((stat, i) => (
                        <Stats key={i} stat={stat} />
                    ))}
                </View>
                <Text style={styles.pokeName}>App created by Pablo Ortiz</Text>
                <Text style={styles.secondText}>Mail: pablortizv@gmail.com</Text>
                <Text style={styles.secondText}>Phone: +52(Mex) 8116638968 </Text>
                <Text style={styles.secondText}>github: github.com/pablortizv</Text>
            </View>
            <TouchableOpacity 
                style={styles.btnBack}
                onPress={() => props.onRequestClose()}
            >
                <Text style={[styles.btnBackText, styles.textCenter]}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
    )
}

export default ModalDev
