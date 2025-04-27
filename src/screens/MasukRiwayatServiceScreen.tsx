import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {BgHome} from '../utils/image';
import Icons from '../components/Icons';

const MasukRiwayatServiceScreen = (props: any) => {
  const isMasuk = props?.route?.params?.isMasuk || false;
  const isKeluar = props?.route?.params?.isKeluar || false;
  const isReturn = props?.route?.params?.isReturn || false;

  const riwayatDummy = [
    {
      id: 1,
      tanggalMasuk: '2023-01-01',
      kodeBarangMasuk: '123',
      namaBarangMasuk: 'Baju',
      jumlahMasuk: 10,
      satuanMasuk: 'Pcs',
    },
    {
      id: 2,
      tanggalMasuk: '2023-01-01',
      kodeBarangMasuk: '123',
      namaBarangMasuk: 'Baju',
      jumlahMasuk: 10,
      satuanMasuk: 'Pcs',
    },
    {
      id: 3,
      tanggalMasuk: '2023-01-01',
      kodeBarangMasuk: '123',
      namaBarangMasuk: 'Baju',
      jumlahMasuk: 10,
      satuanMasuk: 'Pcs',
    },
    {
      id: 4,
      tanggalMasuk: '2023-01-01',
      kodeBarangMasuk: '123',
      namaBarangMasuk: 'Baju',
      jumlahMasuk: 10,
      satuanMasuk: 'Pcs',
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor="#0094ff" barStyle="dark-content" />
      <ImageBackground source={BgHome} style={{flex: 1}}>
        <View style={{backgroundColor: '#018082'}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 25,
              color: 'black',
              fontWeight: '700',
              marginVertical: 5,
            }}>
            Riwayat Barang{' '}
            {isMasuk ? 'Masuk' : isKeluar ? 'Keluar' : isReturn ? 'Return' : ''}
            Service
          </Text>
        </View>

        <FlatList
          data={riwayatDummy}
          renderItem={({item}) => (
            <View
              style={{
                backgroundColor: 'white',
                borderWidth: 2,
                marginHorizontal: 20,

                marginTop: 25,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'black',
                  alignItems: 'center',
                  padding: 5,
                  backgroundColor: '#0094ff',
                }}>
                Tanggal Masuk : {item?.tanggalMasuk}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'black',
                  padding: 5,
                }}>
                Kode Barang Masuk: {item?.kodeBarangMasuk}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'black',
                  padding: 5,
                }}>
                Nama Barang : {item?.namaBarangMasuk}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'black',
                  padding: 5,
                }}>
                Jumlah Masuk : {item?.jumlahMasuk}
              </Text>
            </View>
          )}
        />
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('CariRiwayatBarang', {
              isMasuk,
              isKeluar,
              isReturn,
            })
          }
          style={{
            position: 'absolute',
            bottom: 20,
            right: 20,
            padding: 10,
            backgroundColor: '#BFFEC6',
            borderRadius: 50,
          }}>
          <Icons name="search" type="MaterialIcons" size={40} color="black" />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default MasukRiwayatServiceScreen;
