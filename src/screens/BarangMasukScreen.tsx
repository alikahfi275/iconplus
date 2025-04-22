import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import {NoImage} from '../utils/image';
import CustomTextInput from '../components/CustomTextInput';
import ImageCropPicker from 'react-native-image-crop-picker';
import {LocalStorage} from '../utils/database/storage';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';

const BarangMasukScreen = () => {
  const [kodeBarang, setKodeBarang] = useState('');
  const [namaBarang, setNamaBarang] = useState('');
  const [jumlahBarang, setJumlahBarang] = useState('');
  const [kategori, setKategori] = useState('');
  const [gambarBarang, setGambarBarang] = useState('');

  const isValid = kodeBarang && namaBarang && jumlahBarang && kategori;

  const openPictures = () => {
    ImageCropPicker.openPicker({
      cropping: true,
      width: 500,
      height: 500,
      cropperCircleOverlay: false,
      includeBase64: true,
    })
      .then((imageResult: any) => {
        const imageUri = `data:${imageResult.mime};base64,${imageResult.data}`;
        setGambarBarang(imageUri);
      })
      .catch(error => {});
  };

  const saveIncomingItems = () => {
    try {
      const rawData = LocalStorage.getItem('incomingItems');
      const existingData = Array.isArray(rawData) ? rawData : [];

      const rawDataHistory = LocalStorage.getItem('historyItems');
      const existingDataHistory = Array.isArray(rawDataHistory)
        ? rawDataHistory
        : [];

      const newData = {
        id: Date.now(),
        kode: kodeBarang,
        nama: namaBarang,
        jumlah: jumlahBarang,
        kategori: kategori,
        gambar: gambarBarang,
      };

      const newDataHistory = {
        id: Date.now(),
        kode: kodeBarang,
        nama: namaBarang,
        jumlah: jumlahBarang,
        kategori: kategori,
        alasan: '',
        tanggal: new Date().toISOString(),
        type: 'Barang Masuk',
      };

      const updatedData = [...existingData, newData];
      LocalStorage.setItem('incomingItems', updatedData);

      const updatedDataHistory = [...existingDataHistory, newDataHistory];
      LocalStorage.setItem('historyItems', updatedDataHistory);

      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'SUKSES',
        textBody: 'Data Anda Berhasil Disimpan ',
      });

      setKodeBarang('');
      setNamaBarang('');
      setJumlahBarang('');
      setKategori('');
      setGambarBarang('');
    } catch (error) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'GAGAL',
        textBody: 'Data Anda Tidak Berhasil Disimpan ',
      });
    }
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Image
          source={gambarBarang ? {uri: gambarBarang} : NoImage}
          style={{width: 200, height: 200, marginBottom: 5, borderRadius: 10}}
          resizeMode="stretch"
        />
      </View>
      <TouchableOpacity onPress={() => openPictures()}>
        <Text
          style={{
            fontWeight: '700',
            textAlign: 'center',
            color: '#72B4D3',
          }}>
          Upload Gambar
        </Text>
      </TouchableOpacity>

      <View style={{flex: 1}}>
        <CustomTextInput
          placeholder="Kode Barang"
          value={kodeBarang}
          onChangeText={setKodeBarang}
          title="Kode Barang"
        />
        <CustomTextInput
          placeholder="Nama Barang"
          value={namaBarang}
          onChangeText={setNamaBarang}
          title="Nama Barang"
        />
        <CustomTextInput
          placeholder="Jumlah Barang"
          value={jumlahBarang}
          onChangeText={setJumlahBarang}
          title="Jumlah Barang"
          keyboardType="numeric"
        />
        <CustomTextInput
          placeholder="Kategori Barang"
          value={kategori}
          onChangeText={setKategori}
          title="Kategori Barang"
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: isValid ? '#72B4D3' : '#b2b2b2',
          padding: 10,
          marginHorizontal: 20,
          borderRadius: 15,
          marginTop: 50,
          marginBottom: 20,
        }}
        onPress={saveIncomingItems}
        disabled={!isValid}>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontWeight: '700',
          }}>
          Simpan
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default BarangMasukScreen;
