import { StyleSheet,View, TextInput, ImageBackground } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

const Toplayput = () => {


  return (

      <ImageBackground source={require('../assets/images/backgroundtop.png')} style={Top.menu}>
        <View style={Top.searchp}>
          
        <Feather name="search" size={20} color="black" style={Top.iconsearch}/> 
          <TextInput maxLength={40} style={Top.search} placeholder='Tìm kiếm sản phẩm của bạn!'>
            
          </TextInput>
        </View>
      
      </ImageBackground>
 
  );
}
const index = StyleSheet.create({
  
})
const Top = StyleSheet.create({
  menu: {
    height: 120,
    width: "100%",
    backgroundColor: 'lightblue',
    backgroundImage: `url(${require("../assets/images/backgroundtop.png")})`
    
  },
  searchp: {
    width: '100%',
    marginTop: '17%',
    flex: 1,
    margin: 'auto',
    flexDirection: 'row',
    alignItems: 'center'
    
  },
  iconsearch: {
    paddingVertical:10,
    paddingLeft: 5,
    height: 42,
    
    backgroundColor: "white",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  search: {
    fontSize: 16,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    height: 'auto',
    backgroundColor: "white",
    width: "80%"

  }
});
export default Toplayput