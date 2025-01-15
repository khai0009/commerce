
import { View, StyleSheet,Text,Image, Button } from 'react-native';
import Screen from '../../Home/screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from '@expo/vector-icons/Feather';
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from 'react';
import {  useNavigation } from 'expo-router';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/Home/type';
import { createStackNavigator, Header } from '@react-navigation/stack';
import Search from '@/Home/Search';

SplashScreen.preventAutoHideAsync();
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ProductListScreen'>;
const Stack = createStackNavigator();

export default function HomeScreen() {
    
  
  const [fontsLoaded, setFontsLoaded] = useState(false);
  
  const loadFonts = async () => {
    await Font.loadAsync({
      "Pacifico": require("@/assets/fonts/Pacifico.ttf"),
      "early-sunday": require("@/assets/fonts/early-sunday.otf"),
    });
    setFontsLoaded(true);
  };
  
  useEffect(() => {
    loadFonts();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync(); // Ẩn splash screen khi font đã tải xong
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return (<></>);
  } 
  

  return (
    
    <SafeAreaView style={{flex: 1}}  onLayout={onLayoutRootView} >
      <Stack.Navigator initialRouteName='Top' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Top" component={Screen}/>
        <Stack.Screen name="SearchScreen"  component={Search}/>
      </Stack.Navigator>
    
      </SafeAreaView>
  );
}
