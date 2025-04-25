import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {BgHome, NoImage} from '../utils/image';
import Icons from '../components/Icons';
import ModalList from '../components/ModalList';

const EditBarangScreen = () => {
  const [kodeBarang, setKodeBarang] = useState('');
  const [namaBarang, setNamaBarang] = useState('');
  const [stokBarang, setStokBarang] = useState('');
  const [merekBarang, setMerekBarang] = useState('');
  const [satuanBarang, setSatuanBarang] = useState('');
  const [gambar, setGambar] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);

  const kodeBarangDummy = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
  ];

  const uploadGambar = () => {};

  const handleSelect = (item: any) => {
    setKodeBarang(item);
  };

  return (
    <ScrollView
      contentContainerStyle={{backgroundColor: '#E6F1F7', flexGrow: 1}}>
      <ImageBackground source={BgHome} style={{flex: 1}}>
        <ModalList
          title="Kode Barang"
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
          Edit Barang Toko
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
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderColor: 'black',
              paddingVertical: 5,
              marginBottom: 10,
            }}
            value={namaBarang}
            onChangeText={setNamaBarang}
            placeholder="Masukan Nama Barang"
          />

          <Text style={{fontSize: 16, fontWeight: '600', color: 'black'}}>
            Stok Barang
          </Text>
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderColor: 'black',
              paddingVertical: 5,
              marginBottom: 10,
            }}
            value={stokBarang}
            keyboardType="numeric"
            onChangeText={setStokBarang}
            placeholder="Masukan Stok Barang"
          />

          <Text style={{fontSize: 16, fontWeight: '600', color: 'black'}}>
            Merek Barang
          </Text>
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderColor: 'black',
              paddingVertical: 5,
              marginBottom: 10,
            }}
            value={merekBarang}
            onChangeText={setMerekBarang}
            placeholder="Masukan Merek Barang"
          />

          <Text style={{fontSize: 16, fontWeight: '600', color: 'black'}}>
            Satuan Barang
          </Text>
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderColor: 'black',
              paddingVertical: 5,
              marginBottom: 10,
            }}
            value={satuanBarang}
            onChangeText={setSatuanBarang}
            placeholder="Masukan Satuan Barang"
          />

          <Image
            source={gambar ? {uri: gambar} : NoImage}
            style={{
              width: 120,
              height: 120,
              alignSelf: 'center',
              marginVertical: 10,
            }}
          />

          <TouchableOpacity
            onPress={uploadGambar}
            style={{
              backgroundColor: '#2E7D32',
              padding: 12,
              borderRadius: 5,
              marginVertical: 5,
            }}>
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                fontWeight: '600',
              }}>
              UPLOAD GAMBAR
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#005A9C',
              padding: 12,
              borderRadius: 5,
              marginVertical: 5,
            }}>
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                fontWeight: '600',
              }}>
              UPDATE
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default EditBarangScreen;
