import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {useEffect} from 'react';
import {
  BgHome,
  menuKeluar,
  menuMasuk,
  menuRetur,
  menuServis,
  menuGudang,
} from '../utils/image';
import {useNavigation} from '@react-navigation/native';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';

const HomeScreen = () => {
  const navigation: any = useNavigation();

  const requestPermissions = async () => {
    if (Platform.OS === 'android') {
      try {
        const permissions = [
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
          PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
          PERMISSIONS.ANDROID.BLUETOOTH_SCAN,
          PERMISSIONS.ANDROID.BLUETOOTH_CONNECT,
          PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
          PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
          PERMISSIONS.ANDROID.ACCESS_MEDIA_LOCATION,
          PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
          PERMISSIONS.ANDROID.READ_MEDIA_VIDEO,
        ];

        for (const permission of permissions) {
          const result = await check(permission);
          if (result !== RESULTS.GRANTED) {
            await request(permission);
          }
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      requestPermissions();
    }, 1000);
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#abdbe3'}}>
      <StatusBar backgroundColor="#abdbe3" barStyle="dark-content" />
      <View style={{flex: 1}}>
        <View style={{backgroundColor: '#1e81b0'}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 30,
              color: 'black',
              fontWeight: '700',
              marginVertical: 5,
            }}>
            BERANDA UTAMA
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 15,
            marginTop: 50,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ListBarangMasuk')}>
            <Image
              source={menuMasuk}
              style={{height: 140, width: 110}}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginHorizontal: 10}}
            onPress={() => navigation.navigate('ListBarangKeluar')}>
            <Image
              source={menuKeluar}
              style={{height: 140, width: 110}}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ListBarangRetur')}>
            <Image
              source={menuRetur}
              style={{height: 140, width: 110}}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{marginHorizontal: 15, marginTop: 20}}
          onPress={() => navigation.navigate('StokBarangGudang')}>
          <Image
            source={menuGudang}
            style={{height: 200, width: 'auto'}}
            resizeMode="stretch"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginHorizontal: 15, marginTop: 20}}
          onPress={() => navigation.navigate('StokBarangServis')}>
          <Image
            source={menuServis}
            style={{height: 200, width: 'auto'}}
            resizeMode="stretch"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
