import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import {BgHome} from '../utils/image';
import {useNavigation} from '@react-navigation/native';

const ListBarangMasukScreen = (props: any) => {
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
          BARANG MASUK
        </Text>
        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('BarangMasukGudang')}
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
              Barang Masuk Gudang
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('BarangMasukService')}
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
              Barang Masuk Service
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
              Riwayat Barang Masuk Gudang
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
              Riwayat Barang Masuk Service
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ListBarangMasukScreen;
