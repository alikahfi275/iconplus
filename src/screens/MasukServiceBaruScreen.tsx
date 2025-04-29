import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {BgHome, NoImage} from '../utils/image';
import {BASE_URL} from '../utils/api/api';
import axios from 'axios';
import ImageCropPicker from 'react-native-image-crop-picker';

const MasukServiceBaruScreen = (props: any) => {
  const [kodeBarang, setKodeBarang] = useState('');
  const [namaBarang, setNamaBarang] = useState('');
  const [jumlahBarang, setJumlahBarang] = useState('');
  const [merekBarang, setMerekBarang] = useState('');
  const [satuanBarang, setSatuanBarang] = useState('');
  const [gambar, setGambar] = useState(null);

  const addItems = async () => {
    try {
      await axios.post(`${BASE_URL}barang/service/create.php`, {
        kode_barang: kodeBarang,
        nama_barang: namaBarang,
        stok: jumlahBarang,
        satuan: satuanBarang,
        merek: merekBarang,
        gambar: gambar,
      });
      await axios.post(`${BASE_URL}riwayat/masuk_service.php`, {
        kode_barang: kodeBarang,
        jumlah: jumlahBarang,
        tipe: 'service',
        nama_barang: namaBarang,
      });
      setGambar(null);
      setKodeBarang('');
      setNamaBarang('');
      setJumlahBarang('');
      setMerekBarang('');
      setSatuanBarang('');
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const openPictures = () => {
    ImageCropPicker.openPicker({
      cropping: true,
      width: 500,
      height: 500,
      cropperCircleOverlay: false,
      includeBase64: true,
    })
      .then((imageResult: any) => {
        const imageUri: any = `data:${imageResult.mime};base64,${imageResult.data}`;
        setGambar(imageUri);
      })
      .catch(error => {});
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor="#1e81b0" barStyle="dark-content" />
      <View style={{flex: 1, backgroundColor: '#abdbe3'}}>
        <View style={{backgroundColor: '#1e81b0'}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 28,
              color: 'black',
              fontWeight: '700',
              marginVertical: 5,
            }}>
            Barang Masuk Service Baru
          </Text>
        </View>

        <View style={{marginHorizontal: 20, marginTop: 20}}>
          <Text style={{fontSize: 16, fontWeight: '600', color: 'black'}}>
            Kode Barang
          </Text>
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderColor: 'black',
              paddingVertical: 5,
              marginBottom: 10,
            }}
            value={kodeBarang}
            onChangeText={text => setKodeBarang(text)}
            placeholder="Masukan Kode Barang"
          />
        </View>

        <View style={{marginHorizontal: 20, marginTop: 10}}>
          <Text style={{fontSize: 16, fontWeight: '600', color: 'black'}}>
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
            onChangeText={text => setNamaBarang(text)}
            placeholder="Masukan Nama Barang"
          />
        </View>

        <View style={{marginHorizontal: 20, marginTop: 10}}>
          <Text style={{fontSize: 16, fontWeight: '600', color: 'black'}}>
            Jumlah Barang
          </Text>
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderColor: 'black',
              paddingVertical: 5,
              marginBottom: 10,
            }}
            value={jumlahBarang}
            onChangeText={text => setJumlahBarang(text)}
            placeholder="Masukan Jumlah Barang"
          />
        </View>

        <View style={{marginHorizontal: 20, marginTop: 10}}>
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
            onChangeText={text => setMerekBarang(text)}
            placeholder="Masukan Merek Barang"
          />
        </View>

        <View style={{marginHorizontal: 20, marginTop: 10}}>
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
            onChangeText={text => setSatuanBarang(text)}
            placeholder="Masukan Satuan Barang"
          />
        </View>
        <Image
          source={gambar ? {uri: gambar} : NoImage}
          style={{width: 100, height: 100, alignSelf: 'center', marginTop: 5}}
        />
        <TouchableOpacity
          onPress={openPictures}
          style={{
            marginHorizontal: 20,
            marginBottom: 20,
            backgroundColor: '#1e81b0',
            alignItems: 'center',
            marginTop: 20,
            paddingVertical: 10,
          }}>
          <Text style={{fontSize: 16, color: 'black', fontWeight: '600'}}>
            UPLOAD GAMBAR
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={addItems}
          style={{
            marginHorizontal: 20,
            marginBottom: 20,
            backgroundColor: '#1e81b0',
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <Text style={{fontSize: 16, color: 'black', fontWeight: '600'}}>
            SIMPAN
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MasukServiceBaruScreen;
