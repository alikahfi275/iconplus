import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../iconplus/src/screens/HomeScreen';
import Login from '../iconplus/src/screens/LoginScreens';
import BarangKeluar from '../iconplus/src/screens/BarangKeluarScreen';
import BarangMasuk from '../iconplus/src/screens/BarangMasukScreen';
import StokBarang from '../iconplus/src/screens/StokBarangScreen';
import History from '../iconplus/src/screens/HistoryScreen';
import BarangReturn from '../iconplus/src/screens/BarangReturnScreen';

import {useEffect} from 'react';
import {Platform} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      if (Platform.OS === 'android') SplashScreen.hide();
    }, 1500);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BarangKeluar" component={BarangKeluar} />
        <Stack.Screen name="BarangMasuk" component={BarangMasuk} />
        <Stack.Screen name="StokBarang" component={StokBarang} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="BarangReturn" component={BarangReturn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
