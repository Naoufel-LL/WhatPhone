import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './screens/Start';
import Home from './screens/Home';
import BrandScreen from './screens/BrandScreen'
import Colors from './constants/Variables';
import PhoneScreen from './screens/PhoneScreen';
import NewsPage from './screens/NewsPage'
import News from './screens/News'

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Start'>
        <Stack.Screen name="Start" component={Start} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="Home" component={Home} options={{ headerStyle: {
              backgroundColor: Colors.main,color:'#fff'
           } ,titleStyle:{color:'white'},  headerTitleStyle: {
            color:'#fff',
          },headerTitleAlign:'center'}}></Stack.Screen>
          <Stack.Screen name="BrandScreen" component={BrandScreen} options={{ headerStyle: {
              backgroundColor: Colors.main,color:'#fff'
           } ,titleStyle:{color:'white'},  headerTitleStyle: {
            color:'#fff',
          },headerTitleAlign:'center'}}></Stack.Screen>
          <Stack.Screen name="PhoneScreen" component={PhoneScreen} options={{ headerStyle: {
              backgroundColor: Colors.main,color:'#fff'
           } ,titleStyle:{color:'white'},  headerTitleStyle: {
            color:'#fff',
          },headerTitleAlign:'center'}}></Stack.Screen>
             <Stack.Screen name="News" component={News} options={{ headerStyle: {
              backgroundColor: Colors.main,color:'#fff'
           } ,titleStyle:{color:'white'},  headerTitleStyle: {
            color:'#fff',
          },headerTitleAlign:'center'}}></Stack.Screen>
             <Stack.Screen name="ArticleScreen" component={NewsPage} options={{ headerStyle: {
              backgroundColor: Colors.main,color:'#fff'
           } ,titleStyle:{color:'white'},  headerTitleStyle: {
            color:'#fff',
          },headerTitleAlign:'center'}}></Stack.Screen>
          
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
