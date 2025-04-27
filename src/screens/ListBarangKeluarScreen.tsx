import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import {BgHome} from '../utils/image';
import {useNavigation} from '@react-navigation/native';

const ListBarangKeluarScreen = (props: any) => {
  const navigation: any = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ImageBackground source={BgHome} style={{flex: 1}}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: 'black',
            textAlign: 'center',
            marginBottom: 20,
            backgroundColor: '#018082',
            paddingVertical: 10,
          }}>
          BARANG KELUAR
        </Text>
        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ssss', {isGudang: true})}
            style={{
              backgroundColor: '#BFFEC6',
              alignItems: 'center',
              marginHorizontal: 60,
              marginTop: 80,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                fontWeight: '600',
                maxWidth: 150,
                textAlign: 'center',
                marginVertical: 20,
              }}>
              Barang Keluar Gudang
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ssss', {isService: true})}
            style={{
              backgroundColor: '#BFFEC6',
              alignItems: 'center',
              marginHorizontal: 60,
              marginTop: 25,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                fontWeight: '600',
                maxWidth: 190,
                textAlign: 'center',
                marginVertical: 20,
              }}>
              Barang Keluar Service
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('RiwayatBarang')}
            style={{
              backgroundColor: '#018082',
              alignItems: 'center',
              marginHorizontal: 60,
              marginTop: 25,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                fontWeight: '600',
                textAlign: 'center',
                marginVertical: 20,
              }}>
              Riwayat Barang Keluar Gudang
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('RiwayatBarang')}
            style={{
              backgroundColor: '#018082',
              alignItems: 'center',
              marginHorizontal: 60,
              marginTop: 25,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                fontWeight: '600',
                textAlign: 'center',
                marginVertical: 20,
              }}>
              Riwayat Barang Keluar Service
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ListBarangKeluarScreen;
