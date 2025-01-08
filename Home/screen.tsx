import { SafeAreaView, useWindowDimensions } from 'react-native';
import Top from './top';
import { createStackNavigator } from '@react-navigation/stack';
import List from '@/product/list';
import Detailproduct from '@/Home/Detailproduct';
import { RootStackParamList } from './type';

const Stack = createStackNavigator<RootStackParamList>();

const Screen = () => {
  const windowHeight = useWindowDimensions().height;

  return (
    <SafeAreaView style={{ minHeight: Math.round(windowHeight), backgroundColor: 'white' }}>
      <Top />
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="ProductListScreen" component={List}/>
        <Stack.Screen name="DetailScreen" component={Detailproduct} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default Screen;
