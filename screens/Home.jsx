import {React,useEffect,useState} from 'react'
import { View,Text,Image,Dimensions, Button, TouchableOpacity,ScrollView,FlatList,ActivityIndicator } from 'react-native'
import Colors from '../constants/Variables'
import axios from 'axios'
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
import NewsItem from '../components/NewsItem';
  
 
  export default function Home({navigation}) {
    const [data,setData] = useState([])
    const [news,setNews] = useState([
      {
        "title": "2023 New Phones: The Best Coming From Samsung, Apple, Google and More",
        "author": "Lisa Eadicicco",
        "published_date": "2023-01-14 18:15:00",
        "published_date_precision": "timezone unknown",
        "link": "http://www.msn.com/en-us/news/technology/2023-new-phones-the-best-coming-from-samsung-apple-google-and-more/ar-AA15b5U7",
        "clean_url": "msn.com",
        "excerpt": "From the Samsung Galaxy S23 to the Google Pixel 7A, these are the phones we're most looking forward to seeing this year.",
        "summary": "The year has just begun, but we're already expecting several new phones from companies like Samsung and OnePlus to arrive in a matter of weeks. Though it's hard to predict exactly what's in store for the smartphone industry in 2023, it's possible to make some educated guesses, since companies like Apple, Google and Samsung mostly stick to the same launch routine each year.\nThe iPhone 15 lineup, for example, is expected to arrive in September -- possibly with USB-C charging for the first time. The Galaxy S23 will likely be one of the first new phones we see in 2023, considering the tech giant is holding an Unpacked event on Feb.",
        "rights": "msn.com",
        "rank": 100,
        "topic": "tech",
        "country": "US",
        "language": "en",
        "authors": "Lisa Eadicicco,What we're expecting:",
        "media": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA15brPb.img?h=630&w=1200&m=6&q=60&o=t&l=f&f=jpg",
        "is_opinion": false,
        "twitter_account": null,
        "_score": 10.873761,
        "_id": "5be576357cce2c7402a9ecb1cac82477"
      },
      {
      "title": "Everything We Know About the Samsung Galaxy S23",
      "author": "Andrew Lanxon",
      "published_date": "2023-01-14 17:45:00",
      "published_date_precision": "timezone unknown",
      "link": "http://www.msn.com/en-us/news/technology/everything-we-know-about-the-samsung-galaxy-s23/ar-AA15BlgW",
      "clean_url": "msn.com",
      "excerpt": "The S23 is expected to be announced at Samsung's next Unpacked event.",
      "summary": "It's almost February, which means it's time to turn our attention to what's next for Samsung. The company just announced its next Unpacked event will take place on Feb. 1, and the Galaxy S23 lineup is expected to be the star of the show.\nThe Samsung Galaxy S22 range includes some of our top phones from 2022. The base S22 impressed as a more affordable option, the S22 Plus is a superb all-rounder while the all-powerful S22 Ultra blew us away with its stellar camera skills. We even gave the Plus and Ultra CNET Editors' Choice Awards.",
      "rights": "msn.com",
      "rank": 100,
      "topic": "tech",
      "country": "US",
      "language": "en",
      "authors": "Andrew Lanxon",
      "media": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA15Bsk7.img?h=630&w=1200&m=6&q=60&o=t&l=f&f=jpg",
      "is_opinion": false,
      "twitter_account": null,
      "_score": 26.351477,
      "_id": "5b1d6b8784cb3baf0f3a98fa10ea8806"
    },
  {
    "title": "Apple Should Bring These Features to the iPhone 15",
    "author": "Lisa Eadicicco",
    "published_date": "2023-01-18 14:00:00",
    "published_date_precision": "timezone unknown",
    "link": "http://www.msn.com/en-us/news/technology/apple-should-bring-these-features-to-the-iphone-15/ar-AA13V2Ly",
    "clean_url": "msn.com",
    "excerpt": "Commentary: USB-C charging, Touch ID and more uses for the Dynamic Island are on my wish list.",
    "summary": "With the iPhone 14 Pro and Pro Max, Apple gave us many of the features we've been waiting for. These include an always-on display and better multitasking thanks to Apple's Dynamic Island. But there are a few ways Apple could take things further with the iPhone 15.\nFor example, the company could do a better job of bringing certain Pro-exclusive features down to its less-expensive iPhone models. Samsung frequently does this with its cheaper phones, and I'd like to see Apple embrace this approach more fully, too.",
    "rights": "msn.com",
    "rank": 100,
    "topic": "tech",
    "country": "US",
    "language": "en",
    "authors": "Lisa Eadicicco",
    "media": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA13c9uA.img?h=630&w=1200&m=6&q=60&o=t&l=f&f=jpg",
    "is_opinion": false,
    "twitter_account": null,
    "_score": 12.424223,
    "_id": "ca4a63d6ef226a9959ff79905fffe962"
  },
  {
      "title": "Samsung Galaxy S23 Needs These Features",
      "author": "Lisa Eadicicco",
      "published_date": "2023-01-14 18:00:00",
      "published_date_precision": "timezone unknown",
      "link": "http://www.msn.com/en-us/news/technology/samsung-galaxy-s23-needs-these-features/ar-AA13GEan",
      "clean_url": "msn.com",
      "excerpt": "Commentary: Samsung should improve on some of the flagship phone's basics.",
      "summary": "Samsung's Galaxy S22 features a fresh design and an upgraded camera that's better at seeing in the dark. But there's plenty of room for Samsung to further upgrade with the Galaxy S23, expected to arrive in February.\nIn particular, I'd like to see longer-lasting batteries, more photographic features that take advantage of the Galaxy S family's impressive cameras and faster charging that doesn't require an expensive adapter.\nSamsung typically releases new Galaxy S devices in the first couple of months of the year, and it will likely maintain that schedule in 2023.",
      "rights": "msn.com",
      "rank": 100,
      "topic": "tech",
      "country": "US",
      "language": "en",
      "authors": "Lisa Eadicicco",
      "media": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA16e85d.img?h=630&w=1200&m=6&q=60&o=t&l=f&f=jpg",
      "is_opinion": false,
      "twitter_account": null,
      "_score": 24.413496,
      "_id": "03987be384d7376ed775dcbcdc672494"
    },
  {
    "title": "Your iPhone Has a One-Handed Keyboard. Here's How to Unlock It",
    "author": "Sareena Dayaram",
    "published_date": "2023-01-15 19:15:00",
    "published_date_precision": "timezone unknown",
    "link": "http://www.msn.com/en-us/news/technology/your-iphone-has-a-one-handed-keyboard-here-s-how-to-unlock-it/ar-AA16g9Tb",
    "clean_url": "msn.com",
    "excerpt": "Can you type on your iPhone with one hand? This setting change makes it way easier.",
    "summary": "Big iPhones are here to stay. Apple has continued to size-up its iconic phone since it launched the original 3.5-inch iPhone in 2007. Now, the iPhone 14 Pro Max is nearly double that size, spanning a whopping 6.7 inches. Using an iPhone with a sprawling display makes for a solid experience, especially when watching Netflix or reading the news. But large screens have their trade-offs: For one thing, it's much harder to type on them without using both hands.\nIf you're having trouble typing out your thoughts single-handedly, there's a one-handed iPhone keyboard you can access quicker than you think.",
    "rights": "msn.com",
    "rank": 100,
    "topic": "tech",
    "country": "US",
    "language": "en",
    "authors": "Sareena Dayaram",
    "media": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA16a8Ml.img?h=630&w=1200&m=6&q=60&o=t&l=f&f=jpg",
    "is_opinion": false,
    "twitter_account": null,
    "_score": 11.835233,
    "_id": "74bf2119ccbc0677555532ba0d7decfd"
  },
  {
    "title": "Pixel 7 vs. iPhone 14 vs. Galaxy S22: The Big Three Phones of 2022 Compared",
    "author": "Sareena Dayaram",
    "published_date": "2023-01-16 14:00:00",
    "published_date_precision": "timezone unknown",
    "link": "http://www.msn.com/en-us/news/technology/pixel-7-vs-iphone-14-vs-galaxy-s22-the-big-three-phones-of-2022-compared/ar-AA12GvUp",
    "clean_url": "msn.com",
    "excerpt": "Samsung, Apple, and Google's flagship offerings set the bar for phones in 2022. Here's how they compare, spec by spec.",
    "summary": "The big three flagship phones for 2022 were unveiled across last year, kicking off with Samsung's offering, followed by Apple in September and finally Google. Each of the three phones received good reviews, but figuring out which is right for you can be complicated.\nThe $599 (£599, AU$999) Pixel 7 is Google's latest flagship, built to compete with established phone leaders like Apple's iPhone 14 and Samsung's Galaxy S22. New to the Pixel 7 is the Tensor G2 processor, a camera with improved zoom, face unlock and updated design.",
    "rights": "msn.com",
    "rank": 100,
    "topic": "tech",
    "country": "US",
    "language": "en",
    "authors": "Sareena Dayaram",
    "media": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA14vkhX.img?h=630&w=1200&m=6&q=60&o=t&l=f&f=jpg",
    "is_opinion": false,
    "twitter_account": null,
    "_score": 11.551315,
    "_id": "6ff205eb6502854fab76ccfc143c7934"
  }])
    const  [loading,setLoading] = useState(false)
    useEffect(()=>{
        axios
          .get("https://phone-specs-api.azharimm.dev/latest")
          .then(res => {setData(res.data.data.phones);setLoading(true);} )
          .catch(err => console.error(err));
    },[])
    const {height} = Dimensions.get("window")
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
            <ScrollView style={{paddingTop:'2%',backgroundColor:'#fff',height:'100%',position:'relative'}}>
                 {!loading ? <ActivityIndicator color={Colors.main}></ActivityIndicator> : 
                 
                 <ScrollView>
                    <Text style={{fontFamily:'Poppins_700Bold',fontSize:27,padding:10,}}>Latest Devices</Text>                
                   <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {data.map((phone)=>{
                        return(
                            <View key={phone.phone_name}>
                                <TouchableOpacity onPress={()=>{navigation.navigate('PhoneScreen',{url:phone.detail})}}  style={{width:130,marginHorizontal:10}}>
                                <Image resizeMode='contain' style={{height:200,width:'100%'}} source={{uri:phone.image}}></Image>
                                <Text style={{fontFamily:'Poppins_300Light',paddingHorizontal:5}}>{phone.phone_name}</Text>
                                </TouchableOpacity>

                             </View>
                        )
                    })}
                 </ScrollView>
                  <Text style={{fontFamily:'Poppins_700Bold',fontSize:27,padding:10}}>Brands</Text>
                  <View style={{flexDirection:'row',flexWrap:'wrap',alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('BrandScreen',{brand:'apple-phones-48'})}}>
                    <View style={{width:80,height:80,borderRadius:50,backgroundColor:'#fff',alignItems:'center',justifyContent:'center',margin:10,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,elevation: 5,}}>
                      <Image resizeMode='contain' style={{width:50,height:50,padding:10}} source={require('../assets/brands/apple.png')}></Image>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate('BrandScreen',{brand:'samsung-phones-9'})}}>
                    <View style={{width:80,height:80,borderRadius:50,backgroundColor:'#fff',alignItems:'center',justifyContent:'center',margin:10,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,}}>
                      <Image resizeMode='contain' style={{width:50,height:50,padding:10}} source={require('../assets/brands/samsung.png')}></Image>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate('BrandScreen',{brand:'huawei-phones-58'})}}>
                    <View style={{width:80,height:80,borderRadius:50,backgroundColor:'#fff',alignItems:'center',justifyContent:'center',margin:10,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,}}>
                      <Image resizeMode='contain' style={{width:50,height:50,padding:10}} source={require('../assets/brands/huawei.png')}></Image>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate('BrandScreen',{brand:'htc-phones-45'})}}>
                    <View style={{width:80,height:80,borderRadius:50,backgroundColor:'#fff',alignItems:'center',justifyContent:'center',margin:10,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,}}>
                      <Image resizeMode='contain' style={{width:50,height:50,padding:10}} source={require('../assets/brands/htc.png')}></Image>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate('BrandScreen',{brand:'asus-phones-46'})}}>
                    <View style={{width:80,height:80,borderRadius:50,backgroundColor:'#fff',alignItems:'center',justifyContent:'center',margin:10,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,}}>
                      <Image resizeMode='contain' style={{width:50,height:50,padding:10}} source={require('../assets/brands/asus.png')}></Image>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate('BrandScreen',{brand:'nokia-phones-1'})}}>
                    <View style={{width:80,height:80,borderRadius:50,backgroundColor:'#fff',alignItems:'center',justifyContent:'center',margin:10,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,}}>
                      <Image resizeMode='contain' style={{width:50,height:50,padding:10}} source={require('../assets/brands/nokia.png')}></Image>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate('BrandScreen',{brand:'oppo-phones-82'})}}>
                    <View style={{width:80,height:80,borderRadius:50,backgroundColor:'#fff',alignItems:'center',justifyContent:'center',margin:10,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,}}>
                      <Image resizeMode='contain' style={{width:50,height:50,padding:10}} source={require('../assets/brands/oppo.png')}></Image>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate('BrandScreen',{brand:'xiaomi-phones-80'})}}>
                    <View style={{width:80,height:80,borderRadius:50,backgroundColor:'#fff',alignItems:'center',justifyContent:'center',margin:10,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,}}>
                      <Image resizeMode='contain' style={{width:50,height:50,padding:10,borderRadius:50}} source={require('../assets/brands/xiaomi.png')}></Image>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate('BrandScreen',{brand:'google-phones-107'})}}>
                    <View style={{width:80,height:80,borderRadius:50,backgroundColor:'#fff',alignItems:'center',justifyContent:'center',margin:10,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,}}>
                      <Image resizeMode='contain' style={{width:50,height:50,padding:10}} source={require('../assets/brands/google.png')}></Image>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate('BrandScreen',{brand:'infinix-phones-119'})}}>
                    <View style={{width:80,height:80,borderRadius:50,backgroundColor:'#fff',alignItems:'center',justifyContent:'center',margin:10,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,}}>
                      <Image style={{width:50,height:50,padding:10}} source={require('../assets/brands/infinix.jpg')}></Image>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate('BrandScreen',{brand:'zte-phones-62'})}}>
                    <View style={{width:80,height:80,borderRadius:50,backgroundColor:'#fff',alignItems:'center',justifyContent:'center',margin:10,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,}}>
                      <Image resizeMode='contain' style={{width:50,height:50,padding:10}} source={require('../assets/brands/zte.png')}></Image>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate('BrandScreen',{brand:'lg-phones-20'})}}>
                    <View style={{width:80,height:80,borderRadius:50,backgroundColor:'#fff',alignItems:'center',justifyContent:'center',margin:10,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,}}>
                      <Image style={{width:50,height:50,padding:10}} source={require('../assets/brands/lg.png')}></Image>
                    </View>
                    </TouchableOpacity>
                  </View>
                  <View style={{flexDirection:'row',alignItems:'center'}}> 
                  <Text style={{fontFamily:'Poppins_700Bold',fontSize:27,padding:10,}}>News</Text>                
                  <TouchableOpacity onPress={()=>navigation.navigate('News')}>
                    <Text style={{fontFamily:'Poppins_400Regular_Italic',fontSize:18,color:Colors.main,borderBottomWidth:1,borderBottomColor:Colors.main}}>More News</Text>
                  </TouchableOpacity>
                  </View>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                      {news.map((n)=>{
                           return(
                            <View>
                              <TouchableOpacity style={{width:'100%'}} onPress={()=>navigation.navigate('ArticleScreen',{data:n})}>
                              <NewsItem key={n._id} data={n} />
                              </TouchableOpacity>
                              </View>
                           )
                      })}
                    </View>
                    <View style={{marginVertical:20}}>
                    </View>
                  </ScrollView>
                 }
            </ScrollView>
          )
      }
       
 
}
