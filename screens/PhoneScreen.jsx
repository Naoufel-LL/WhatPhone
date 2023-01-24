import React from 'react'
import {useEffect}  from 'react'
import {useState}  from 'react'
import { View,Text,Image,Dimensions, Button, TouchableOpacity ,ScrollView,ActivityIndicator} from 'react-native'
import axios from 'axios'
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
  
 
  export default function PhoneScreen({navigation,route}) {
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
    const {url} = route.params
    const [data,setData]=useState([])
    const [loading,setloading]=useState(false)

    useEffect(()=>{
              axios
                .get(url)
                .then(res => {setData(res.data.data);setloading(true);} )
                .catch(err => console.error(err));
    },[])
       if(fontsLoaded){
        return (
          <ScrollView style={{backgroundColor:'#fff'}}>
                            {navigation.setOptions({ title: `${data.phone_name}`})}

                {!loading ? <ActivityIndicator color={Colors.main}></ActivityIndicator> : 
                 <ScrollView>
                    <ScrollView style={{width:'100%',paddingVertical:15}} horizontal showsHorizontalScrollIndicator={true}>
                         {data.phone_images.map((img)=>
                         { return(
                             <View style={{width:500}}>
                                <Image resizeMode='contain' style={{width:'100%',height:300}} source={{uri:img}}></Image>
                             </View>
                          )}
                        )}
                    </ScrollView>
                    <View style={{paddingVertical:50}}>
                        <View style={{flexDirection:'row',alignItems:'center',paddingVertical:10,margin:20,backgroundColor:'#fff',borderRadius:10,shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,width:'90%'}}>
                        <Image resizeMode='contain' style={{width:'50%',height:150}} source={{uri:data.thumbnail}}></Image>
                        <View style={{width:'50%',padding:5}}>
                          {data.brand && <Text><Text style={{color:Colors.main}}>Brand : </Text>{data.brand}</Text>}
                          {data.phone_name && <Text><Text style={{color:Colors.main}}>Phone : </Text>{data.phone_name}</Text>}
                          {data.release_date && <Text><Text style={{color:Colors.main}}></Text>{data.release_date}</Text>}
                          {data.os && <Text><Text style={{color:Colors.main}}>Os : </Text>{data.os}</Text>}
                          {data.storage && <Text><Text style={{color:Colors.main}}>Storage : </Text>{data.storage}</Text>}
                          {data.specifications[2]?.specs[1]?.val && <Text><Text style={{color:Colors.main}}>Weight: </Text>{data.specifications[2]?.specs[1]?.val}</Text>}

                        </View>
                        </View>
                        <View>
                        <View>
                                <View style={{flexDirection:'row',alignContent:'center',alignItems:'center',justifyContent:'center',paddingVertical:20,backgroundColor:Colors.back,marginVertical:20}}>
                                <Image resizeMode='contain' style={{width:50,height:50}} source={require('../assets/icons/camera.png')}></Image>
                                <Text style={{fontFamily:'Poppins_700Bold',fontSize:20,paddingLeft:15,color:Colors.main}}>Camera Specification</Text>
                                </View>
                                 <View style={{padding:15}}>
                                 { data.specifications[6]?.specs[0]?.val && data.specifications[6]?.title == "Main Camera" ?   <Text><Text style={{fontFamily:'Poppins_500Medium',fontSize:16,color:Colors.main}}>Main Camera : </Text>{data.specifications[6]?.specs[0]?.val}</Text> : null}
                                    { data.specifications[7]?.specs[0]?.val &&  data.specifications[7]?.title == "Selfie camera"  ? <Text><Text style={{fontFamily:'Poppins_500Medium',fontSize:16,color:Colors.main}}>Selfie Camera : </Text>{data.specifications[7]?.specs[0]?.val}</Text> : null}
                                    {  data.specifications[6]?.specs[2]?.val && data.specifications[6]?.title == "Main Camera" ?        <Text><Text style={{fontFamily:'Poppins_500Medium',fontSize:16,color:Colors.main}}>Video Quality : </Text>{data.specifications[6]?.specs[2]?.val}</Text> : null} 
                                           </View>
                            </View>
                              {
                                data.specifications[3]?.title == "Display" ? 
                                <View>
                                <View style={{flexDirection:'row',alignContent:'center',alignItems:'center',justifyContent:'center',paddingVertical:20,backgroundColor:Colors.back,marginVertical:20}}>
                                <Image resizeMode='contain' style={{width:50,height:50}} source={require('../assets/icons/display-size.png')}></Image>
                                <Text style={{fontFamily:'Poppins_700Bold',fontSize:20,paddingLeft:15,color:Colors.main}}>Resolution Specification</Text>
                                </View>
                               <View style={{padding:15}}>
                                { data.specifications[3]?.specs[1]?.val &&     <Text><Text style={{fontFamily:'Poppins_500Medium',fontSize:16,color:Colors.main}}>{data.specifications[3]?.specs[1]?.key} : </Text>{data.specifications[3]?.specs[1]?.val}</Text>}
                                {  data.specifications[3]?.specs[2]?.val &&                              <Text><Text style={{fontFamily:'Poppins_500Medium',fontSize:16,color:Colors.main}}>{data.specifications[3]?.specs[2]?.key} : </Text>{data.specifications[3]?.specs[2]?.val}</Text>}
                                { data.specifications[3]?.specs[0]?.val && <Text><Text style={{fontFamily:'Poppins_500Medium',fontSize:16,color:Colors.main}}>{data.specifications[3]?.specs[0]?.key} : </Text> {data.specifications[3]?.specs[0]?.val}</Text>}
                                { data.specifications[2]?.specs[0]?.val && <Text><Text style={{fontFamily:'Poppins_500Medium',fontSize:16,color:Colors.main}}>{data.specifications[2]?.specs[0]?.key} : </Text> {data.specifications[2]?.specs[0]?.val}</Text>}
                                { data.specifications[2]?.specs[1]?.val && <Text><Text style={{fontFamily:'Poppins_500Medium',fontSize:16,color:Colors.main}}>{data.specifications[2]?.specs[1]?.key} : </Text> {data.specifications[2]?.specs[1]?.val}</Text>}
                                { data.specifications[2]?.specs[2]?.val && <Text><Text style={{fontFamily:'Poppins_500Medium',fontSize:16,color:Colors.main}}>{data.specifications[2]?.specs[2]?.key} : </Text> {data.specifications[2]?.specs[2]?.val}</Text>}

                               </View>
                            </View>
                            : null
                              }
                            {
                                data.specifications[11]?.title == "Battery" ?
                                <View>
                            <View style={{flexDirection:'row',alignContent:'center',alignItems:'center',justifyContent:'center',paddingVertical:20,backgroundColor:Colors.back,marginVertical:20}}>
                            <Image resizeMode='contain' style={{width:50,height:50}} source={require('../assets/icons/battery.png')}></Image>
                                <Text style={{fontFamily:'Poppins_700Bold',fontSize:20,paddingLeft:15,color:Colors.main}}>Battery Specification</Text>
                                </View>
                               <View style={{padding:15}}>
                               { data.specifications[11]?.specs[1]?.val && <Text><Text style={{fontFamily:'Poppins_500Medium',fontSize:16,color:Colors.main}}>{data.specifications[11]?.specs[1]?.key} : </Text>{data.specifications[11]?.specs[1]?.val}</Text>       }
                                {  data.specifications[11]?.specs[0]?.val && <Text><Text style={{fontFamily:'Poppins_500Medium',fontSize:16,color:Colors.main}}>{data.specifications[11]?.specs[0]?.key} : </Text> {data.specifications[11]?.specs[0]?.val}</Text>}
                               </View>
                            </View>
                            : null
                            }
                            {
                                 data.specifications[5]?.title == "Memory" ?
                                 <View>
                                 <View style={{flexDirection:'row',alignContent:'center',alignItems:'center',justifyContent:'center',paddingVertical:20,backgroundColor:Colors.back,marginVertical:20}}>
                                 <Image resizeMode='contain' style={{width:50,height:50}} source={require('../assets/icons/folder.png')}></Image>
                                     <Text style={{fontFamily:'Poppins_700Bold',fontSize:20,paddingLeft:15,color:Colors.main}}>Capacity Specification</Text>
                                     </View>
                                    <View style={{padding:15}}>
                                     {   data.specifications[5]?.specs[1]?.val &&                           <Text><Text style={{fontFamily:'Poppins_500Medium',fontSize:16,color:Colors.main}}>{data.specifications[5]?.specs[1]?.key} : </Text>{data.specifications[5]?.specs[1]?.val}</Text>}
                                     { data.specifications[5]?.specs[0]?.val && <Text><Text style={{fontFamily:'Poppins_500Medium',fontSize:16,color:Colors.main}}>{data.specifications[5]?.specs[0]?.key} :</Text> {data.specifications[5]?.specs[0]?.val}</Text>}
                                    </View>
                                 </View>
                                 : null
                            }
                            {
                                data.specifications[0]?.title == "Network" ? <View>
                                <View style={{flexDirection:'row',alignContent:'center',alignItems:'center',justifyContent:'center',paddingVertical:20,backgroundColor:Colors.back,marginVertical:20}}>
                                <Image resizeMode='contain' style={{width:50,height:50}} source={require('../assets/icons/signal.png')}></Image>
                                    <Text style={{fontFamily:'Poppins_700Bold',fontSize:20,paddingLeft:15,color:Colors.main}}>Network Specification</Text>
                                    </View>
                                   <View style={{padding:15}}>
                                    {   data.specifications[0]?.specs[0]?.val &&           <Text><Text style={{fontFamily:'Poppins_500Medium',fontSize:16,color:Colors.main}}>{data.specifications[0]?.specs[0]?.key} : </Text>{data.specifications[0]?.specs[0]?.val}</Text>}
                                    {  data.specifications[0]?.specs[2]?.val && <Text><Text style={{fontFamily:'Poppins_500Medium',fontSize:16,color:Colors.main}}>{data.specifications[0]?.specs[2]?.key} : </Text>{data.specifications[0]?.specs[2]?.val}</Text>}
                                    { data.specifications[0]?.specs[5]?.val && <Text><Text style={{fontFamily:'Poppins_500Medium',fontSize:16,color:Colors.main}}>{data.specifications[0]?.specs[5]?.key}  :</Text> {data.specifications[0]?.specs[5]?.val}</Text>}
                                   </View>
                                </View>
                                :
                                null
                            }
                           { data.specifications[4]?.title == "Platform" 
                            ?  <View>
                            <View style={{flexDirection:'row',alignContent:'center',alignItems:'center',justifyContent:'center',paddingVertical:20,backgroundColor:Colors.back,marginVertical:20}}>
                            <Image resizeMode='contain' style={{width:50,height:50}} source={require('../assets/icons/sys.png')}></Image>
                                <Text style={{fontFamily:'Poppins_700Bold',fontSize:20,paddingLeft:15,color:Colors.main}}>Platform Specification</Text>
                                </View>
                               <View style={{padding:15}}>
                                {   data.specifications[4]?.specs[0]?.val &&           <Text><Text style={{fontFamily:'Poppins_500Medium',fontSize:16,color:Colors.main}}>{data.specifications[4]?.specs[0]?.key} : </Text>{data.specifications[4]?.specs[0]?.val}</Text>}
                                { data.specifications[4]?.specs[1]?.val && <Text><Text style={{fontFamily:'Poppins_500Medium',fontSize:16,color:Colors.main}}>{data.specifications[4]?.specs[1]?.key} : </Text>{data.specifications[4]?.specs[1]?.val}</Text>}
                                { data.specifications[4]?.specs[2]?.val && <Text><Text style={{fontFamily:'Poppins_500Medium',fontSize:16,color:Colors.main}}>{data.specifications[4]?.specs[2]?.key}  :</Text> {data.specifications[4]?.specs[2]?.val}</Text>}
                                { data.specifications[4]?.specs[3]?.val && <Text><Text style={{fontFamily:'Poppins_500Medium',fontSize:16,color:Colors.main}}>{data.specifications[4]?.specs[3]?.key}  :</Text> {data.specifications[4]?.specs[3]?.val}</Text>}
                               </View>
                            </View>
                            : null
                           }
                            <View>
                            <View style={{flexDirection:'row',alignContent:'center',alignItems:'center',justifyContent:'center',paddingVertical:20,backgroundColor:Colors.back,marginVertical:20}}>
                            <Image resizeMode='contain' style={{width:50,height:50}} source={require('../assets/icons/smartphone-call.png')}></Image>
                                <Text style={{fontFamily:'Poppins_700Bold',fontSize:20,paddingLeft:15,color:Colors.main}}>Others Specification</Text>
                                </View>
                               { data.specifications[9]?.title == "Comms" ?
                                 <View style={{padding:15}}>
                                 {   data.specifications[9]?.specs[0]?.val &&           <Text><Text style={{fontFamily:'Poppins_500Medium',fontSize:16,color:Colors.main}}>{data.specifications[9]?.specs[0]?.key} : </Text>{data.specifications[9]?.specs[0]?.val}</Text>}
                                 {  data.specifications[9]?.specs[1]?.val &&  <Text><Text style={{fontFamily:'Poppins_500Medium',fontSize:16,color:Colors.main}}>{data.specifications[9]?.specs[1]?.key} : </Text>{data.specifications[9]?.specs[1]?.val}</Text>} 
                                 {  data.specifications[9]?.specs[2]?.val &&  <Text><Text style={{fontFamily:'Poppins_500Medium',fontSize:16,color:Colors.main}}>{data.specifications[9]?.specs[2]?.key} : </Text>{data.specifications[9]?.specs[2]?.val}</Text>} 
                                 {  data.specifications[9]?.specs[3]?.val &&  <Text><Text style={{fontFamily:'Poppins_500Medium',fontSize:16,color:Colors.main}}>{data.specifications[9]?.specs[3]?.key} : </Text>{data.specifications[9]?.specs[3]?.val}</Text>} 
                                 {  data.specifications[9]?.specs[4]?.val &&  <Text><Text style={{fontFamily:'Poppins_500Medium',fontSize:16,color:Colors.main}}>{data.specifications[9]?.specs[4]?.key} : </Text>{data.specifications[9]?.specs[4]?.val}</Text>} 
                                 {  data.specifications[9]?.specs[5]?.val &&  <Text><Text style={{fontFamily:'Poppins_500Medium',fontSize:16,color:Colors.main}}>{data.specifications[9]?.specs[5]?.key} : </Text>{data.specifications[9]?.specs[5]?.val}</Text>} 

                                </View> : null
                               }
                                { data.specifications[10]?.title == "Features" ?
                                 <View style={{padding:15}}>
                                 {   data.specifications[10]?.specs[0]?.val &&           <Text><Text style={{fontFamily:'Poppins_500Medium',fontSize:16,color:Colors.main}}>{data.specifications[10]?.specs[0]?.key} : </Text>{data.specifications[10]?.specs[0]?.val}</Text>}
                                </View> : null
                               }
                                         {  data.specifications[12]?.specs[0]?.val &&  <Text style={{paddingHorizontal:20}}><Text style={{fontFamily:'Poppins_500Medium',fontSize:16,color:Colors.main}}>{data.specifications[12]?.specs[0]?.key} : </Text>{data.specifications[12]?.specs[0]?.val}</Text>} 
                                         {  data.specifications[12]?.specs[1]?.val &&  <Text style={{paddingHorizontal:20}}><Text style={{fontFamily:'Poppins_500Medium',fontSize:16,color:Colors.main}}>{data.specifications[12]?.specs[1]?.key} : </Text>{data.specifications[12]?.specs[1]?.val}</Text>} 
                                         {  data.specifications[12]?.specs[2]?.val &&  <Text style={{paddingHorizontal:20}}><Text style={{fontFamily:'Poppins_500Medium',fontSize:16,color:Colors.main}}>{data.specifications[12]?.specs[2]?.key} : </Text>{data.specifications[12]?.specs[2]?.val}</Text>} 
                                         {  data.specifications[12]?.specs[3]?.val &&  <Text style={{paddingHorizontal:20}}><Text style={{fontFamily:'Poppins_500Medium',fontSize:16,color:Colors.main}}>{data.specifications[12]?.specs[3]?.key} : </Text>{data.specifications[12]?.specs[3]?.val}</Text>} 
                                         {  data.specifications[12]?.specs[4]?.val &&  <Text style={{paddingHorizontal:20}}><Text style={{fontFamily:'Poppins_500Medium',fontSize:16,color:Colors.main}}>{data.specifications[12]?.specs[4]?.key} : </Text>{data.specifications[12]?.specs[4]?.val}</Text>} 


                            </View>
                        </View>
                    </View>
                    </ScrollView>
                }
          </ScrollView>
        )
       }
 
}
