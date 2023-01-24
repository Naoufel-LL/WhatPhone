import React from 'react'
import { View,Text,Image,Dimensions, Button, TouchableOpacity } from 'react-native'
import Colors from '../constants/Variables'
const {height} = Dimensions.get("window")
import {
    useFonts,
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  } from '@expo-google-fonts/poppins';
  
 
  export default function Start({navigation}) {
    let [fontsLoaded] = useFonts({
      Poppins_100Thin,
      Poppins_100Thin_Italic,
      Poppins_200ExtraLight,
      Poppins_200ExtraLight_Italic,
      Poppins_300Light,
      Poppins_300Light_Italic,
      Poppins_400Regular,
      Poppins_400Regular_Italic,
      Poppins_500Medium,
      Poppins_500Medium_Italic,
      Poppins_600SemiBold,
      Poppins_600SemiBold_Italic,
      Poppins_700Bold,
      Poppins_700Bold_Italic,
      Poppins_800ExtraBold,
      Poppins_800ExtraBold_Italic,
      Poppins_900Black,
      Poppins_900Black_Italic,
    });
       if(fontsLoaded){
        return (
          <View style={{marginTop:'20%',alignItems:'center',backgroundColor:Colors.back,height:'100%',position:'relative'}}>
                     <Image resizeMode='contain' style={{height:height/2.5,width:'90%'}} source={require('../assets/start.png')}></Image>
                      <Text  style={{fontSize:34,fontWeight:'700',marginTop:'15%',fontFamily:'Poppins_700Bold'}}>Welcome To WhatPhone</Text>
                      <Text style={{fontWeight:'bold',color:'#3d3d3d',paddingVertical:10}}>WhatPhone Made With 🧡 By Naoufel Bahassoune</Text>
                      
                      <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={{paddingHorizontal:70,paddingVertical:30,marginTop:'30%',backgroundColor:Colors.main,borderRadius:10}}>
                          <Text style={{color:'#fff',fontSize:17,fontWeight:'700'}}>Start The App</Text>
                      </TouchableOpacity>
          </View>
        )
       }
 
}
