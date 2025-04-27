import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../iconplus/src/screens/HomeScreen';
import Login from './src/screens/LoginScreen';
import BarangKeluar from '../iconplus/src/screens/BarangKeluarScreen';

import MasukGudang from './src/screens/MasukGudangScreen';
import MasukService from './src/screens/MasukServiceScreen';
import MasukRiwayatGudang from './src/screens/MasukRiwayatGudangScreen';
import MasukRiwayatService from './src/screens/MasukRiwayatServiceScreen';
import MasukGudangBaru from './src/screens/MasukGudangBaruScreen';
import MasukSearchRiwayat from './src/screens/MasukSearchRiwayatScreen';

import StokBarangGudang from './src/screens/StokBarangGudangScreen';
import StokBarangServis from '../iconplus/src/screens/StokBarangServisScreen';
import BarangReturn from '../iconplus/src/screens/BarangReturnScreen';
import DetailBarang from './src/screens/DetailBarangScreen';
import EditBarang from './src/screens/EditBarangScreen';
import HapusBarang from './src/screens/HapusBarangScreen';
import CariBarang from './src/screens/CariBarangScreen';
import CariRiwayatBarang from '../iconplus/src/screens/CariRiwayatBarangScreen';
import ListBarangMasukScreen from './src/screens/ListBarangMasukScreen';
import ListBarangKeluarScreen from './src/screens/ListBarangKeluarScreen';
import ListBarangReturScreen from './src/screens/ListBarangReturScreen';

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
        <Stack.Screen name="MasukGudang" component={MasukGudang} />
        <Stack.Screen name="StokBarangGudang" component={StokBarangGudang} />
        <Stack.Screen name="StokBarangServis" component={StokBarangServis} />
        <Stack.Screen name="BarangReturn" component={BarangReturn} />
        <Stack.Screen name="DetailBarang" component={DetailBarang} />
        <Stack.Screen name="EditBarang" component={EditBarang} />
        <Stack.Screen name="HapusBarang" component={HapusBarang} />
        <Stack.Screen name="CariBarang" component={CariBarang} />
        <Stack.Screen name="MasukGudangBaru" component={MasukGudangBaru} />
        <Stack.Screen
          name="MasukRiwayatGudang"
          component={MasukRiwayatGudang}
        />
        <Stack.Screen name="CariRiwayatBarang" component={CariRiwayatBarang} />
        <Stack.Screen name="MasukService" component={MasukService} />
        <Stack.Screen
          name="ListBarangMasuk"
          component={ListBarangMasukScreen}
        />
        <Stack.Screen
          name="ListBarangKeluar"
          component={ListBarangKeluarScreen}
        />
        <Stack.Screen
          name="ListBarangRetur"
          component={ListBarangReturScreen}
        />
        <Stack.Screen
          name="MasukRiwayatService"
          component={MasukRiwayatService}
        />
        <Stack.Screen
          name="MasukSearchRiwayat"
          component={MasukSearchRiwayat}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
