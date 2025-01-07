import {SafeAreaView,useWindowDimensions } from 'react-native';
import Toplayput from '../../product/top';
import List from '../../product/list';

export default function HomeScreen() {
  const windowHeight = useWindowDimensions().height;

  return (
    <SafeAreaView style={[{ minHeight: Math.round(windowHeight),backgroundColor: 'white' }]}>
      <Toplayput></Toplayput>
      <List></List>
    </SafeAreaView>
  );
}

  
