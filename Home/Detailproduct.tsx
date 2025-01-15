import { View,Text, SafeAreaView, Image,StyleSheet, useWindowDimensions, TouchableOpacity, Button, ScrollView } from "react-native"
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from './type';
import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'DetailScreen'>;

const Detailproduct = () => {
    const route = useRoute<DetailScreenRouteProp>();
    const { product } = route.params;
    const windowHeight = useWindowDimensions().height;
    const windowWidth = useWindowDimensions().width;
    const [button1Active, setButton1Active] = useState(false);
    const [button2Active, setButton2Active] = useState(false);
    const [button3Active, setButton3Active] = useState(false);
    const [size, setsize] = useState('(S)');

    const handleButtonClick = (buttonIndex: number) => {
      // Đặt tất cả các button về trạng thái không active
      setButton1Active(false);
      setButton2Active(false);
      setButton3Active(false);

      if (buttonIndex === 1) {
        setsize('(S)')
        setButton1Active(true);
      } else if (buttonIndex === 2) {
        setsize('(M)')
        setButton2Active(true);
      } else if (buttonIndex === 3) {
        setsize('(L)')
        setButton3Active(true);
      }
      return buttonIndex
    };
    
    
    return (
        <ScrollView style={style.screen} contentContainerStyle={{ flexGrow: 1 }} scrollEnabled={true}>
        <Image width={windowWidth}style={style.image} height={windowHeight/2.5}  source={{uri: "https://xingfutangvietnam.com/wp-content/uploads/2021/06/tra-sua-tran-chau-e1685431912430.png"}}></Image>
        <View style={style.screenchild}>
        <Text style={style.name}>{product.name} </Text>
        <Text style={style.price}>{product.price+' '+size}</Text>
        <View style={sizecup.sizecuptag}>
        <TouchableOpacity style={sizecup.sizecup} onPress={()=>{handleButtonClick(1)}}>
                    <Text style={[sizecup.fontsizecup,{backgroundColor: button1Active ? 'lightgray' : 'green',color: button1Active ? 'black' : 'white'}]}>S</Text>
                    <Text style={[sizecup.fontsizecup,{backgroundColor: button1Active ? 'green' : 'white',color: button1Active ? 'white' : 'black'}]}>Nhỏ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={sizecup.sizecup} onPress={()=>{handleButtonClick(2)}}>
                <Text style={[sizecup.fontsizecup,{backgroundColor: button2Active ? 'lightgray' : 'green',color: button2Active ? 'black' : 'white'}]}>M</Text>
                <Text style={[sizecup.fontsizecup,{backgroundColor: button2Active ? 'green' : 'white',color: button2Active ? 'white' : 'black'}]}>Vừa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={sizecup.sizecup} onPress={()=>{handleButtonClick(3)}}>
                    <Text style={[sizecup.fontsizecup,{backgroundColor: button3Active ? 'lightgray' : 'green',color: button3Active ? 'black' : 'white'}]}>L</Text>
                    <Text style={[[sizecup.fontsizecup,{backgroundColor: button3Active ? 'green' : 'white',color: button3Active ? 'white' : 'black'}]]}>Lớn</Text>
                </TouchableOpacity>
        </View>

        <Buttonoptions title={'Sữa'}/>
        <Buttonoptions title={'Đường'}/>
        <Buttonoptions title={'Đá'}/>

        <TouchableOpacity style={style.Buttonbuy} onPress={()=>{}}>
                    <Text style={style.Buttontext}><Feather name="shopping-cart"/> Mua</Text>
                </TouchableOpacity>
        </View>
        </ScrollView>
   
    )
}
const Buttonoptions = ({ title }: { title: string }):React.JSX.Element => { 
    const [button1Active, setButton1Active] = useState(false);
    const [button2Active, setButton2Active] = useState(false);
    const [button3Active, setButton3Active] = useState(false);
    const handleButtonClick = (buttonIndex: number) => {
        // Đặt tất cả các button về trạng thái không active
        if (button1Active === true) 
             setButton1Active(false);
        else if (buttonIndex === 1) {
            setButton1Active(true);
          }
          
        if(button2Active === true) 
            setButton2Active(false);
        else if (buttonIndex === 2) {
            setButton2Active(true);
          }

          if(button3Active === true)
         setButton3Active(false);
          else if (buttonIndex === 3) {
          setButton3Active(true);
        }
      };

    return (
      <>
        <Text style={{ fontSize: 20, marginTop: 5 }}>{title}</Text>
        <View style={sizecup.sizecuptag}> 
        <TouchableOpacity style={sizecup.sizecup} onPress={()=>{handleButtonClick(1)}}>
                    <Text style={[sizecup.sizebuttonoption,{backgroundColor: button1Active ? 'green' : 'white',color: button1Active ? 'white' : 'black'}]}>Ít</Text>
                    
                </TouchableOpacity>
                <TouchableOpacity style={sizecup.sizecup} onPress={()=>{handleButtonClick(2)}}>
                <Text style={[sizecup.sizebuttonoption,{backgroundColor: button2Active ? 'green' : 'white',color: button2Active ? 'white' : 'black'}]}>Vừa</Text>

                </TouchableOpacity>
                <TouchableOpacity style={sizecup.sizecup} onPress={()=>{handleButtonClick(3)}}>
                    <Text style={[sizecup.sizebuttonoption,{backgroundColor: button3Active ? 'green' : 'white',color: button3Active ? 'white' : 'black'}]}>Nhiều</Text>
                    
                </TouchableOpacity>
        </View>
      </>
    );
  };
const sizecup = StyleSheet.create({
    sizecuptag: {
        width: '100%',
        flexDirection: 'row',
        alignContent: 'center'
    },
    sizebuttonoption : {
    
        textAlign: 'center',
        width: 60,
        fontSize: 18,
        borderColor: '#cddbca',
        borderRadius: 10,
        borderWidth: 2,
    },
    sizecup:{
        margin: 5,
        width: 'auto',
  
        borderRadius: 3
        
         },
    fontsizecup: {
        width: '100%',
        textAlign: 'center',
        
    
        paddingHorizontal: 5,
        fontSize: 20
    },

    
})
const style = StyleSheet.create({
    screen:{
      
        backgroundColor: '#f7f7f7',    
        flex: 1 
    },
    screenchild: {
        borderTopWidth: 0.5,
        flex: 1 ,
        paddingTop: 5,
        paddingHorizontal: 15
    },
    image:{
        backgroundColor: 'white',
        margin: 'auto',
        borderTopWidth: 1,
        
    },
    name: {
        fontSize: 25,
        color: 'black'
    },
    price: {
        fontSize: 25,
        color: 'green'
    },
    
    Buttonbuy: {
        borderRadius: 10,
        borderWidth: 0.5,
        marginTop: 5,
        marginBottom: 5,
        width: '90%',
        margin: 'auto',
        backgroundColor: 'green'
      },
      Buttontext:{
        paddingVertical: 5,
        textAlign: 'center',
        padding: 2,
        width: 'auto',
        fontSize: 20 ,
        color: 'white'
      }
}
    
)
export default Detailproduct