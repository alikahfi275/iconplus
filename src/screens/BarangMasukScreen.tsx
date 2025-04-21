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

const BarangMasukScreen = () => {
  const [kodeBarang, setKodeBarang] = useState('');
  const [namaBarang, setNamaBarang] = useState('');
  const [jumlahBarang, setJumlahBarang] = useState('');
  const [kategori, setKategori] = useState('');

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Image
          source={NoImage}
          style={{width: 200, height: 200}}
          resizeMode="stretch"
        />
      </View>
      <TouchableOpacity onPress={() => {}}>
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
          backgroundColor: '#72B4D3',
          padding: 10,
          marginHorizontal: 20,
          borderRadius: 15,
          marginTop: 50,
          marginBottom: 20,
        }}>
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
