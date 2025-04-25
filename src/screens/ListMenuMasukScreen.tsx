import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import {BgHome} from '../utils/image';

const ListMenuMasukScreen = (props: any) => {
  const isMasuk = props?.route?.params?.isMasuk || false;
  const isKeluar = props?.route?.params?.isKeluar || false;
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
          BARANG {isMasuk ? 'MASUK' : isKeluar ? 'KELUAR' : 'RETURN'}
        </Text>
        <View style={{flex: 1}}>
          <TouchableOpacity
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
              Barang {isMasuk ? 'Masuk' : isKeluar ? 'Keluar' : 'Return'} Toko
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
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
              Barang {isMasuk ? 'Masuk' : isKeluar ? 'Keluar' : 'Return'}{' '}
              Service
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
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
              {` Riwayat \n Barang ${
                isMasuk ? 'Masuk' : isKeluar ? 'Keluar' : 'Return'
              } \n Toko`}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
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
              {` Riwayat \n Barang ${
                isMasuk ? 'Masuk' : isKeluar ? 'Keluar' : 'Return'
              } \n Service`}
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ListMenuMasukScreen;
