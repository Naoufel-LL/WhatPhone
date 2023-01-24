import {React,useEffect,useState} from 'react'
import { View,Text,Image,Dimensions, Button, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import Colors from '../constants/Variables'
import axios from 'axios'
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
  
 
  export default function BrandScreen({navigation,route}) {
    const {brand} = route.params
    const [data,setData]=useState([])
    const [page,setPage] = useState(1)
    const [nbrpage,setnbrPage] = useState()
    const [loading,setLoading] = useState(false)
    const url = 'https://phone-specs-api.azharimm.dev/brands/'+brand+'?page='+page
   
   useEffect(()=>{
         axios
           .get(url)
           .then(res => {setData(res.data.data);setnbrPage(data.last_page);setLoading(true)})
           .catch(err => console.error(err));
   },[page])
   function pagination(nbr){
            var pgn =[]
          for(let i=1;i<=nbr;i++){
            
            pgn.push(
                <View>
                <TouchableOpacity onPress={()=>{setPage(i);setLoading(false)}} style={{width:50,height:50,alignContent:'center',alignItems:'center',backgroundColor:Colors.main,margin:20,justifyContent:'center',borderRadius:10}}>
                  <Text style={{color:'#fff'}}>{i}</Text>
                </TouchableOpacity>
                </View>
              )            
          }
         
          return pgn
   }
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
          <ScrollView style={{backgroundColor:'#fff',height:'100%',position:'relative'}}>
                    <Text style={{fontFamily:'Poppins_800ExtraBold',fontSize:27,padding:10,}}>All Devices</Text>
                    {!loading ? <ActivityIndicator color={Colors.main}></ActivityIndicator> :
                    <View>
                                      {navigation.setOptions({ title: `${data.title}__Page ${page}`})}

                    <View style={{flexDirection:'row',flexWrap:'wrap',width:'100%',alignItems:'center',alignContent:'center',justifyContent:'center'}}>
                         {data.phones.map((phone)=>{
                        return(
                            <View  key={phone.phone_name}>
                                <TouchableOpacity onPress={()=>{navigation.navigate('PhoneScreen',{url:phone.detail})}} style={{width:130,marginHorizontal:30,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,}}    >
                                <Image resizeMode='contain' style={{height:200,width:'100%'}} source={{uri:phone.image}}></Image>
                                <Text style={{fontFamily:'Poppins_300Light',paddingHorizontal:5}}>{phone.phone_name}</Text>
                                </TouchableOpacity>

                             </View>
                        )
                    })}
                      
                    </View>
                    <View style={{justifyContent:'center',alignContent:'center',flexDirection:'row',marginTop:20,flexWrap:'wrap'}}>
                    {pagination(data.last_page)}

                    </View>
                    </View>               

                    }
          </ScrollView>
        )
       }
 
}
