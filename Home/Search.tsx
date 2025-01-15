import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, TouchableOpacity, View } from "react-native";



const Search = ()=>{
    const nagivation = useNavigation()
    return (
        <View style={{flex: 1}}>
            <Feather name="chevron-left" size={30} onPress={()=>nagivation.goBack()}/>
     
            
        </View>
    )
}
export default Search;