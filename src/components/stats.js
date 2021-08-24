import React from 'react'
import {View, ScrollView, Text, Image, TouchableOpacity} from 'react-native';

function Stats(props) {
    var stat = props.stat;
    var value = (stat.base_stat / 180);
    var name = stat.stat.name.replace(/-/g, ' ');
    return (
        <View style={{flexDirection:'column', flex:1, marginTop:10, paddingHorizontal:5, width:65}}>
            <View style={{height:10,marginBottom:1, backgroundColor:(value > .9? 'green': 'white'), width:'100%'}}></View>
            <View style={{height:10,marginBottom:1, backgroundColor:(value > .8? 'green': 'white'), width:'100%'}}></View>
            <View style={{height:10,marginBottom:1, backgroundColor:(value > .7? 'green': 'white'), width:'100%'}}></View>
            <View style={{height:10,marginBottom:1, backgroundColor:(value > .6? 'green': 'white'), width:'100%'}}></View>
            <View style={{height:10,marginBottom:1, backgroundColor:(value > .5? 'green': 'white'), width:'100%'}}></View>
            <View style={{height:10,marginBottom:1, backgroundColor:(value > .4? 'green': 'white'), width:'100%'}}></View>
            <View style={{height:10,marginBottom:1, backgroundColor:(value > .3? 'green': 'white'), width:'100%'}}></View>
            <View style={{height:10,marginBottom:1, backgroundColor:(value > .2? 'green': 'white'), width:'100%'}}></View>
            <View style={{height:10,marginBottom:1, backgroundColor:(value > .1? 'green': 'white'), width:'100%'}}></View>
            <View style={{height:10,marginBottom:1, backgroundColor:(value > .0? 'green': 'white'), width:'100%'}}></View>
            <View><Text style={{textAlign:'center', color:'#225B68'}}>{name}</Text></View>
        </View>
    )
}

export default Stats
