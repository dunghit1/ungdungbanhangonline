import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
 import Home from'./Screen/Home';
 import login from './login/login';
//  import Loading from './Screen/Loading';
 import CustomDrawerContent from './CustomDrawer/CustomDrawerContent'
 import { createStackNavigator } from '@react-navigation/stack';
import Mater from './AoThun/Mater';
import Registration from './login/Registration';
import Search from './Screen/Search';
import sliderbox from './slideshow/sliderbox';
import FalseGod from './AoThun/FalseGod';
import Dok from './AoThun/Dok';
import Dandermall from './AoThun/Dandermall';
import ADLV from './AoThun/ADLV';
import SkyHigh from './AoWash/SkyHigh';
import NikeSb from './QuanDui/NikeSb';
import Adidas from './QuanDui/Adidas';
import Nike from './QuanDui/Nike';
import FG from './QuanDui/FG';
import Assential from './QuanDui/Assential';
import Braap from './AoWash/Braap';
import MusTang from './AoWash/MusTang';
import SupperDogs from './AoWash/SupperDogs';
import HorrorProject from './AoWash/HorrorProject';
 const HomeStack =createStackNavigator();

 function HomeStackScreen(){
   
return(
   <HomeStack.Navigator screenOptions={{
      headerShown: false
    }} >
      <HomeStack.Screen name="Home" component={Home} /> 
      <HomeStack.Screen name="Mater" component={Mater}/>
      <HomeStack.Screen name="Search" component={Search}/>
      <HomeStack.Screen name="FalseGod" component={FalseGod}/>
      <HomeStack.Screen name="Dok" component={Dok}/>
      <HomeStack.Screen name="Dandermall" component={Dandermall}/>
      <HomeStack.Screen name="ADLV" component={ADLV}/>
      <HomeStack.Screen name="SkyHigh" component={SkyHigh}/>
      <HomeStack.Screen name="NikeSb" component={NikeSb}/>
      <HomeStack.Screen name="Adidas" component={Adidas}/>
      <HomeStack.Screen name="Nike" component={Nike}/>
      <HomeStack.Screen name="FG" component={FG}/>
      <HomeStack.Screen name="Assential" component={Assential}/>
      <HomeStack.Screen name="Braap" component={Braap}/>
      <HomeStack.Screen name="MusTang" component={MusTang}/>
      <HomeStack.Screen name="SupperDogs" component={SupperDogs}/>
      <HomeStack.Screen name="HorrorProject" component={HorrorProject}/>
      <HomeStack.Screen name="Regis" component={Registration}/>
   </HomeStack.Navigator>
);

  

   
 }

 const Drawer =createDrawerNavigator();
function App () {
 return (
  <NavigationContainer>
   <Drawer.Navigator initialRouteName="login" drawerContent={props => <CustomDrawerContent {...props} />}>
      {/* <Drawer.Screen name="Loading" component={Loading}/> */}
      <Drawer.Screen name="login" component={login}/>
      <Drawer.Screen name="HomeStack" component={HomeStackScreen}/>
   </Drawer.Navigator>
  </NavigationContainer>
 );
  
}
export default App;