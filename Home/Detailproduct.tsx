import { View,Text, SafeAreaView, Image,StyleSheet, useWindowDimensions } from "react-native"
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from './type';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'DetailScreen'>;

const Detailproduct = () => {
    const route = useRoute<DetailScreenRouteProp>();
    const { product } = route.params;
    const windowHeight = useWindowDimensions().height;
    const windowWidth = useWindowDimensions().width;
    return (
        <SafeAreaView>
        <Image width={windowWidth} height={windowHeight/2}  source={{uri: "https://xingfutangvietnam.com/wp-content/uploads/2021/06/tra-sua-tran-chau-e1685431912430.png"}}></Image>
        <Text style={style.name}>{product.name}</Text>
        <Text style={style.price}>{product.price}</Text>
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    image:{

    },
    name: {
        fontSize: 23,
        color: 'black'
    },
    price: {
        fontSize: 27,
        color: 'green'
    }
}
    
)
export default Detailproduct