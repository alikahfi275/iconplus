import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {BgHome, NoImage} from '../utils/image';
import ModalList from '../components/ModalList';
import Icons from '../components/Icons';

const CariBarangTokoScreen = (props: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [namaBarang, setNamaBarang] = useState('');
  const [gambar, setGambar] = useState(null);

  const isService = props?.route?.params?.isService || false;

  const kodeBarangDummy = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
  ];

  const handleSelect = (item: any) => {
    setNamaBarang(item);
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ImageBackground source={BgHome} style={{flex: 1}}>
        <ModalList
          title="Nama Barang"
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
          Cari Barang {isService ? 'Service' : 'Toko'}
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
            Nama Barang
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
                fontWeight: namaBarang ? '600' : '300',
                color: namaBarang ? 'black' : '#4c4c4c',
              }}>
              {namaBarang ? namaBarang : 'Nama Barang'}
            </Text>
            <Icons
              name="arrow-down-drop-circle"
              size={20}
              color="black"
              onPress={() => setModalVisible(true)}
            />
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#2E7D32',
            padding: 12,
            marginVertical: 5,
            marginTop: 30,
            marginHorizontal: 20,
          }}>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              fontWeight: '600',
            }}>
            Cari Barang
          </Text>
        </TouchableOpacity>

        <Image
          source={gambar ? {uri: gambar} : NoImage}
          style={{
            width: 120,
            height: 120,
            alignSelf: 'center',
            marginVertical: 10,
          }}
        />

        <Text
          style={{
            fontSize: 16,
            fontWeight: '600',
            color: 'black',
            marginLeft: 20,
            textDecorationLine: 'underline',
            marginVertical: 5,
          }}>
          Kode Barang
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            marginHorizontal: 20,
            paddingVertical: 5,
            borderWidth: 2,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: 'black',
              textAlign: 'center',
            }}>
            1
          </Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '600',
            color: 'black',
            marginLeft: 20,
            textDecorationLine: 'underline',
            marginVertical: 5,
          }}>
          Stok Barang
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            marginHorizontal: 20,
            paddingVertical: 5,
            borderWidth: 2,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: 'black',
              textAlign: 'center',
            }}>
            1
          </Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '600',
            color: 'black',
            marginLeft: 20,
            textDecorationLine: 'underline',
            marginVertical: 5,
          }}>
          Merek Barang
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            marginHorizontal: 20,
            paddingVertical: 5,
            borderWidth: 2,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: 'black',
              textAlign: 'center',
            }}>
            1
          </Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '600',
            color: 'black',
            marginLeft: 20,
            textDecorationLine: 'underline',
            marginVertical: 5,
          }}>
          Satuan Barang
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            marginHorizontal: 20,
            paddingVertical: 5,
            borderWidth: 2,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: 'black',
              textAlign: 'center',
            }}>
            1
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CariBarangTokoScreen;
