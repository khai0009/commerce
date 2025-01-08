import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, useColorScheme, Platform, Alert, ScrollView } from 'react-native';
import ProductItem from './product';
import axios from 'axios';


const List = () => {
    const [Users,setUsers] = useState<Product[]>();
        const API_URL = 'http://192.168.1.16:3000/trasua'; // Thay <YOUR_SERVER_IP> bằng IP máy chạy API (vd: 192.168.1.5)
      
        useEffect(() => {
          fetchUsers();
      }, []);
      
        // Hàm gọi API để lấy danh sách người dùng
        const fetchUsers = async () => {
            try {
                const response = await axios.get(API_URL);
                const mappedUsers = response.data.map((item: any) => ({
                  id: item.idTrasua,
                  price: item.gia,
                  name: item.tenTrasua
              }));// Lưu danh sách vào state
              return setUsers(mappedUsers)
            } catch (error) {
                console.error('Error fetching users:', error);
                Alert.alert('Error', 'Unable to fetch users.');
            }
        };

    const renderItem = ({ item }: { item: Product }) => {
      return <ProductItem product={item} />;
    };
    
    const theme = useColorScheme();
    const isDarkTheme = theme === 'dark';

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 10,
        backgroundColor: isDarkTheme
        ? 'black'
        : 'white'
  
      },
      list: {
        width: '100%',
      
        flexDirection: 'row'
      }
  })

    return (
      <View style={styles.container}>

        <FlatList
       
          data={Users}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
           // Điều chỉnh kích thước item
    />

      </View>
    );

}

export default List