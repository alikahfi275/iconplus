import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {useEffect} from 'react';
import {BannerImage} from '../utils/image';
import Icons from '../components/Icons';
import Card from '../components/Card';
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
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        backgroundColor="rgba(159, 229, 255, 0.23)"
        barStyle="dark-content"
      />
      <Image
        source={BannerImage}
        style={{width: '100%', height: 250}}
        resizeMode="stretch"
      />
      <Text
        style={{
          textAlign: 'center',
          fontSize: 30,
          color: '#72B4D3',
          fontWeight: '700',
          marginTop: -190,
        }}>
        DASHBOARD
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 25,
          marginTop: 30,
        }}>
        <Card
          type="MaterialIcons"
          icon="move-to-inbox"
          title="Barang Masuk"
          onPress={() => navigation.navigate('BarangMasuk')}
        />
        <Card
          type="MaterialIcons"
          icon="outbox"
          title="Barang Keluar"
          onPress={() => navigation.navigate('BarangKeluar')}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 25,
          marginTop: 30,
        }}>
        <Card
          type="MaterialIcons"
          icon="markunread-mailbox"
          title="Barang Return"
          onPress={() => navigation.navigate('BarangReturn')}
        />
        <Card
          type="MaterialIcons"
          icon="all-inbox"
          title="Stok Barang"
          onPress={() => navigation.navigate('StokBarang')}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('History')}
        style={{
          padding: 20,
          borderRadius: 15,
          backgroundColor: 'white',
          height: 150,
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: '#72B4D3',
          shadowOffset: {
            width: 1,
            height: 7,
          },
          shadowOpacity: 0.41,
          shadowRadius: 9.11,
          elevation: 14,
          marginTop: 25,
          marginHorizontal: 25,
        }}>
        <Icons name="toolbox" size={60} color="#72B4D3" />
        <Text
          style={{
            fontSize: 14,
            fontWeight: '500',
            marginTop: 5,
            textAlign: 'center',
            color: '#4c4c4c',
          }}>
          History
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
