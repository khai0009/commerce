import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View,Image,Text,StyleSheet } from "react-native";
import { RootStackParamList } from "./type";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ProductListScreen'>;
const Top= (): React.JSX.Element=>{
  
    const navigation = useNavigation<NavigationProp>();
    return ( <View style={top.menu}>
      
      <View style={top.searchp}>
      
      <View style={{width:'auto',flexDirection: 'row',marginLeft: 140,marginRight: 75 }}>
      <Image source={require("@/assets/images/cafexanhlogo.png")} style={{ width: 27, height: 27,marginTop: 7 }} ></Image>
      <Text style={{color: 'green',fontFamily: 'Pacifico',fontSize: 25}}>Xanh Cafe</Text>
      </View>
     
      <Feather name="search" size={25} color="black" onPress={()=>navigation.navigate('SearchScreen')} style={top.iconsearch}/> 
        
      </View>
    
    </View>)
  }
  const top = StyleSheet.create({
    menu: {
      height:66,
      width: "100%",
      backgroundColor: 'white',
      borderBottomWidth: 0.75
      
    },
    searchp: {
      marginTop: 20,
      width: '100%',
      height: 'auto',
      flex: 1,
    
      flexDirection: 'row',
      justifyContent: 'center'
  
      
    },
    iconsearch: {
  
      marginRight: 45, 
      marginTop: 10
  
    },
    search: {
      borderWidth: 0.5,
      borderLeftWidth: 0,
      fontSize: 20,
      borderTopRightRadius: 15,
      borderBottomRightRadius: 15,
      height: 'auto',
      backgroundColor: "white",
      width: "80%"
  
    }
  });
  export default Top