import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icons from '../components/Icons';

const KeluarRiwayatServiceScreen = (props: any) => {
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
      <StatusBar backgroundColor="#abdbe3" barStyle="dark-content" />
      <View style={{flex: 1, backgroundColor: '#abdbe3'}}>
        <View style={{backgroundColor: '#FE0000'}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 25,
              color: 'black',
              fontWeight: '700',
              marginVertical: 5,
            }}>
            Riwayat Barang Keluar Service
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
                  backgroundColor: '#1e81b0',
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
            props.navigation.navigate('MasukSearchRiwayat', {
              isGudang: true,
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
      </View>
    </View>
  );
};

export default KeluarRiwayatServiceScreen;
