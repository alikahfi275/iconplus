import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {BgHome} from '../utils/image';
import ModalList from '../components/ModalList';
import Icons from '../components/Icons';

const HapusBarangTokoScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [kodeBarang, setKodeBarang] = useState('');
  const [namaBarang, setNamaBarang] = useState('');

  const kodeBarangDummy = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
  ];

  const handleSelect = (item: any) => {
    setKodeBarang(item);
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ImageBackground source={BgHome} style={{flex: 1}}>
        <ModalList
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          items={kodeBarangDummy}
          handleSelect={(item: any) => handleSelect(item)}
        />
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
          Hapus Barang Toko
        </Text>

        <View style={{marginHorizontal: 20}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              marginTop: 10,
              color: 'black',
              textDecorationLine: 'underline',
            }}>
            Kode Barang
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: kodeBarang ? '600' : '300',
                color: kodeBarang ? 'black' : '#4c4c4c',
              }}>
              {kodeBarang ? kodeBarang : '0'}
            </Text>
            <Icons
              name="arrow-down-drop-circle"
              size={20}
              color="black"
              onPress={() => setModalVisible(true)}
            />
          </View>

          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: 'black',
              marginTop: 5,
            }}>
            Nama Barang
          </Text>
          <Text
            style={{
              fontSize: 25,
              fontWeight: '600',
              color: 'black',
              marginTop: 5,
              textAlign: 'center',
            }}>
            {namaBarang}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#2E7D32',
            padding: 12,
            marginVertical: 5,
            marginTop: 20,
            marginHorizontal: 20,
          }}>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              fontWeight: '600',
            }}>
            HAPUS
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default HapusBarangTokoScreen;
