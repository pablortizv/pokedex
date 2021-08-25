import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import styles from '../styles/styles';

function NavigationButtons(props) {
    return (
        <View style={styles.navigation}>
            <TouchableOpacity  disabled={props.disabled} style={styles.pad} onPress={()=>props.actionBack()}>
                <Text style={[styles.secondText, (props.disabled && {opacity:0.3})]}><Icon  name="arrow-left-drop-circle" size={20} color="#225B68" /> {props.backTitle}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.pad} onPress={()=>props.actionNext()}>
                <Text style={styles.secondText}>{props.nextTitle} <Icon  name="arrow-right-drop-circle" size={20} color="#225B68" /></Text>
            </TouchableOpacity>
        </View>
    )
}

export default NavigationButtons
