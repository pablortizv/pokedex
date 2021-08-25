import React from 'react'
import {View, ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/styles';

function Stats(props) {
    var stat = props.stat;
    var value = (stat.base_stat / 180);
    var name = stat.stat.name.replace(/-/g, ' ');
    return (
        <View style={styles.statView}>
            <View style={[styles.stat, {backgroundColor:(value > .9? '#46A456': '#FDFDFD')}]}></View>
            <View style={[styles.stat, {backgroundColor:(value > .8? '#46A456': '#FDFDFD')}]}></View>
            <View style={[styles.stat, {backgroundColor:(value > .7? '#46A456': '#FDFDFD')}]}></View>
            <View style={[styles.stat, {backgroundColor:(value > .6? '#46A456': '#FDFDFD')}]}></View>
            <View style={[styles.stat, {backgroundColor:(value > .5? '#46A456': '#FDFDFD')}]}></View>
            <View style={[styles.stat, {backgroundColor:(value > .4? '#46A456': '#FDFDFD')}]}></View>
            <View style={[styles.stat, {backgroundColor:(value > .3? '#46A456': '#FDFDFD')}]}></View>
            <View style={[styles.stat, {backgroundColor:(value > .2? '#46A456': '#FDFDFD')}]}></View>
            <View style={[styles.stat, {backgroundColor:(value > .1? '#46A456': '#FDFDFD')}]}></View>
            <View style={[styles.stat, {backgroundColor:(value > .0? '#46A456': '#FDFDFD')}]}></View>
            <View><Text style={[styles.statText, styles.textCenter]}>{name}</Text></View>
        </View>
    )
}

export default Stats
