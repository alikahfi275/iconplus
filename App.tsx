import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../iconplus/src/screens/HomeScreen';
import Login from './src/screens/LoginScreen';
import BarangKeluar from '../iconplus/src/screens/BarangKeluarScreen';
import BarangMasuk from '../iconplus/src/screens/BarangMasukScreen';
import StokBarang from '../iconplus/src/screens/StokBarangScreen';
import StokBarangServis from '../iconplus/src/screens/StokBarangServisScreen';
import BarangReturn from '../iconplus/src/screens/BarangReturnScreen';
import DetailBarang from './src/screens/DetailBarangScreen';
import EditBarang from './src/screens/EditBarangScreen';
import HapusBarang from './src/screens/HapusBarangScreen';
import CariBarang from './src/screens/CariBarangScreen';
import ListMenu from './src/screens/ListMenuScreen';
import BarangMasukBaru from './src/screens/BarangMasukBaruScreen';
import RiwayatBarang from '../iconplus/src/screens/RiwayatBarangScreen';
import CariRiwayatBarang from '../iconplus/src/screens/CariRiwayatBarangScreen';

import {useEffect} from 'react';
import {Platform} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {LocalStorage} from './src/utils/database/storage';

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      if (Platform.OS === 'android') SplashScreen.hide();
    }, 1500);
  }, []);

  const isLogin = LocalStorage.getItem('isLogin');
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isLogin ? 'Home' : 'Login'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BarangKeluar" component={BarangKeluar} />
        <Stack.Screen name="BarangMasuk" component={BarangMasuk} />
        <Stack.Screen name="StokBarang" component={StokBarang} />
        <Stack.Screen name="StokBarangServis" component={StokBarangServis} />
        <Stack.Screen name="BarangReturn" component={BarangReturn} />
        <Stack.Screen name="DetailBarang" component={DetailBarang} />
        <Stack.Screen name="EditBarang" component={EditBarang} />
        <Stack.Screen name="HapusBarang" component={HapusBarang} />
        <Stack.Screen name="CariBarang" component={CariBarang} />
        <Stack.Screen name="ListMenu" component={ListMenu} />
        <Stack.Screen name="BarangMasukBaru" component={BarangMasukBaru} />
        <Stack.Screen name="RiwayatBarang" component={RiwayatBarang} />
        <Stack.Screen name="CariRiwayatBarang" component={CariRiwayatBarang} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
