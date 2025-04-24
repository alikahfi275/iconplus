import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {BgHome} from '../utils/image';
import Icons from '../components/Icons';

const EditBarangScreen = () => {
  const [kodeBarang, setKodeBarang] = useState('');
  const [namaBarang, setNamaBarang] = useState('');
  const [stokBarang, setStokBarang] = useState('');
  const [merekBarang, setMerekBarang] = useState('');
  const [satuanBarang, setSatuanBarang] = useState('');
  const [gambar, setGambar] = useState(null);

  const uploadGambar = () => {};

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
            <Icons name="arrow-down-drop-circle" size={20} color="black" />
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

          <TouchableOpacity onPress={uploadGambar}>
            {gambar ? (
              <Image source={{uri: gambar}} style={styles.image} />
            ) : (
              <View style={[styles.image, styles.placeholder]}>
                <Text style={{textAlign: 'center'}}>Upload Gambar</Text>
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>UPLOAD GAMBAR</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.updateButton]}>
            <Text style={styles.buttonText}>UPDATE</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E6F1F7',
    flexGrow: 1,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#014D40',
    textAlign: 'center',
    marginBottom: 20,
    backgroundColor: '#A0D468',
    paddingVertical: 10,
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#999',
    paddingVertical: 5,
    marginBottom: 10,
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginVertical: 10,
  },
  placeholder: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b2f0b2',
  },
  button: {
    backgroundColor: '#2E7D32',
    padding: 12,
    borderRadius: 5,
    marginVertical: 5,
  },
  updateButton: {
    backgroundColor: '#005A9C',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default EditBarangScreen;
