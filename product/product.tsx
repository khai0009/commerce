import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/Home/type';

interface ProductItemProps {
  product: Product;
}
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ProductListScreen'>;

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const navigation = useNavigation<NavigationProp>();
  
  
  return (
    <TouchableOpacity style={styles.productItem}  onPress={() => navigation.navigate('DetailScreen', { product })}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={{fontSize: 17}}>{product.name}</Text>
        <Text style={{color: "green",fontSize: 20}}>{product.price}đ</Text>
      </View>
    </TouchableOpacity>
    
  );
};
const styles = StyleSheet.create({
    productItem: {
      height: 270,
      
      width: '50%',
      
      marginBottom: 10,
      borderBlockColor: "black",
      borderWidth: 0.5,
      
    },
    productInfo: {
     flexDirection: 'column',
     paddingLeft: 10
    },
    productImage: {
        height: 220,
        width: "100%",
    }
  });
  export default ProductItem