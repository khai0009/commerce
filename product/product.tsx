import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/Home/type';

interface ProductItemProps {
  product: Product;
}
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ProductListScreen'>;

const ProductItem: React.FC<ProductItemProps> = ({ product, }) => {
  const navigation = useNavigation<NavigationProp>();
  
  
  return (
    <TouchableOpacity style={styles.productItem}  onPress={() => navigation.navigate('DetailScreen', { product })}>
      <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG'}} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={{fontSize: 17}}>{product.name}</Text>
        <Text style={{color: "green",fontSize: 20}}>{product.price}đ</Text>
        
      </View>
      
    </TouchableOpacity>
    
  );
};
const styles = StyleSheet.create({
    productItem: {
      height: 'auto',
      width: '50%',
      marginHorizontal: 0.5,
      marginBottom: 7,
      borderColor: "#a9ada8",
      borderWidth: 0.75,
      
    },
    productInfo: {
     flexDirection: 'column',
     paddingLeft: 10
    },
    productImage: {
       
        height: 220,
        width: "100%",
    },
    
  });
  export default ProductItem