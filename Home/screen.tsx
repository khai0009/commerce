
import { createStackNavigator } from '@react-navigation/stack';
import List from '@/product/list';
import Detailproduct from '@/Home/Detailproduct';
import { RootStackParamList } from './type';
import { SafeAreaView } from 'react-native-safe-area-context';
import Top from './Top'

const Stack = createStackNavigator<RootStackParamList>();

const Screen = () => {

  return (
    
    <SafeAreaView style={{ backgroundColor: 'white',flex: 1 }}>
      
      <Stack.Navigator initialRouteName="ProductListScreen" screenOptions={{
    headerShown: true, headerTitle:()=> <Top/>,headerTitleAlign: 'center',
  }}>
        <Stack.Screen name="ProductListScreen"  component={List} />
        <Stack.Screen name="DetailScreen" component={Detailproduct} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default Screen;
