import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  
  
  
  return (
    <View style={styles.productItem}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={{fontSize: 17}}>{product.name}</Text>
        <Text style={{color: "green",fontSize: 20}}>{product.price}đ</Text>
      </View>
    </View>
    
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