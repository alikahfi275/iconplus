import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';

const ListBarangKeluarScreen = (props: any) => {
  const navigation: any = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1, backgroundColor: '#abdbe3'}}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: 'black',
            textAlign: 'center',
            marginBottom: 20,
            backgroundColor: '#FE0000',
            paddingVertical: 10,
          }}>
          BARANG KELUAR
        </Text>
        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('KeluarGudang')}
            style={{
              backgroundColor: '#D3FED6',
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
              Barang Keluar Icon
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('KeluarService')}
            style={{
              backgroundColor: '#D3FED6',
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
            onPress={() => navigation.navigate('KeluarRiwayatGudang')}
            style={{
              backgroundColor: '#FE0000',
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
              Riwayat Barang Keluar Icon
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('KeluarRiwayatService')}
            style={{
              backgroundColor: '#FE0000',
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
      </View>
    </View>
  );
};

export default ListBarangKeluarScreen;
