import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {NoImage} from '../utils/image';
import {LocalStorage} from '../utils/database/storage';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';

const BarangReturnScreen = () => {
  const [kodeBarang, setKodeBarang] = useState('');
  const [barang, setBarang] = useState(null as any);
  const [jumlah, setJumlah] = useState('');
  const [message, setMessage] = useState('');
  const [massegeReason, setMassegeReason] = useState('');

  const rawData = LocalStorage.getItem('incomingItems');
  const allData = Array.isArray(rawData) ? rawData : [];

  const rawDataHistory = LocalStorage.getItem('historyItems');
  const existingDataHistory = Array.isArray(rawDataHistory)
    ? rawDataHistory
    : [];

  const handleCekBarang = () => {
    const found = allData.find(
      item => item.kode.toLowerCase() === kodeBarang.toLowerCase(),
    );
    if (found?.nama) {
      setMessage('');
    } else {
      setMessage('Kode Barang Tidak Ditemukan');
    }
    setBarang(found || null);
  };

  const saveOutgoingItems = () => {
    if (!barang || !jumlah) return;

    const jumlahKeluar = parseInt(jumlah, 10);

    // Cek jumlah valid
    if (isNaN(jumlahKeluar) || jumlahKeluar <= 0) {
      setMessage('Jumlah tidak valid');
      return;
    }

    const newDataHistory = {
      id: Date.now(),
      kode: kodeBarang,
      nama: barang?.nama,
      jumlah: jumlahKeluar.toString(),
      kategori: barang?.kategori,
      alasan: massegeReason,
      tanggal: new Date().toISOString(),
      type: 'Barang Return',
    };

    const updatedDataHistory = [...existingDataHistory, newDataHistory];
    LocalStorage.setItem('historyItems', updatedDataHistory);

    // Update jumlah di data lama
    const updatedData = allData.map(item => {
      if (item.kode === barang.kode) {
        return {
          ...item,
          jumlah: (parseInt(item.jumlah, 10) + jumlahKeluar).toString(), // ➕ tambah stok
        };
      }
      return item;
    });

    // Simpan ke local storage
    LocalStorage.setItem('incomingItems', updatedData);

    // Reset form
    setBarang(null);
    setKodeBarang('');
    setJumlah('');
    setMessage('');
    setMassegeReason(''); // Reset message text
    Toast.show({
      type: ALERT_TYPE.SUCCESS,
      title: 'SUKSES',
      textBody: 'Data Anda Berhasil Disimpan ',
    });
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Image
          source={barang?.gambar ? {uri: barang?.gambar} : NoImage}
          style={{width: 200, height: 200, marginBottom: 5, borderRadius: 10}}
          resizeMode="stretch"
        />
      </View>
      <View style={{flexDirection: 'row', marginHorizontal: 20, marginTop: 10}}>
        <View style={{flex: 0.5}}>
          <Text
            style={{
              color: '#4c4c4c',
            }}>
            Nama Barang
          </Text>
        </View>
        <Text
          style={{
            color: '#4c4c4c',
          }}>
          :{' '}
        </Text>
        <View style={{flex: 1}}>
          <Text
            style={{
              color: '#4c4c4c',
            }}>
            {barang?.nama}
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginHorizontal: 20}}>
        <View style={{flex: 0.5}}>
          <Text
            style={{
              color: '#4c4c4c',
            }}>
            Kategori Barang
          </Text>
        </View>
        <Text
          style={{
            color: '#4c4c4c',
          }}>
          :{' '}
        </Text>
        <View style={{flex: 1}}>
          <Text
            style={{
              color: '#4c4c4c',
            }}>
            {barang?.kategori}
          </Text>
        </View>
      </View>
      {message && (
        <Text
          style={{
            fontSize: 16,
            fontWeight: '300',
            marginTop: 15,
            marginLeft: 20,
            marginBottom: 5,
            color: 'red',
          }}>
          {message}
        </Text>
      )}
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          marginTop: message ? 0 : 15,
        }}>
        <TextInput
          placeholder="Masukan Kode Barang"
          placeholderTextColor={'#b2b2b2'}
          value={kodeBarang}
          onChangeText={(text: string) => {
            setKodeBarang(text);
            if (text === '') {
              setMessage('');
            }
          }}
          style={{
            flex: 1,
            borderRadius: 15,
            borderWidth: 1,
            paddingHorizontal: 15,
            fontSize: 18,
            color: '#4c4c4c',
            borderColor: '#72B4D3',
          }}
        />
        <TouchableOpacity
          onPress={handleCekBarang}
          style={{
            marginLeft: 10,
            paddingHorizontal: 15,
            backgroundColor: '#72B4D3',
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: '500'}}>
            Cek
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput
        placeholder="Masukan Jumlah Barang Direturn"
        placeholderTextColor={'#b2b2b2'}
        value={jumlah}
        editable={barang?.nama ? true : false}
        keyboardType="numeric"
        onChangeText={text => setJumlah(text)}
        style={{
          borderRadius: 15,
          borderWidth: 1,
          paddingHorizontal: 15,
          fontSize: 18,
          color: '#4c4c4c',
          borderColor: barang?.nama ? '#72B4D3' : '#b2b2b2',
          marginHorizontal: 20,
          marginTop: 15,
        }}
      />
      <TextInput
        placeholder="Alasan Direturn"
        placeholderTextColor={'#b2b2b2'}
        value={massegeReason}
        editable={barang?.nama ? true : false}
        keyboardType="numeric"
        onChangeText={text => setMassegeReason(text)}
        style={{
          borderRadius: 15,
          borderWidth: 1,
          paddingHorizontal: 15,
          fontSize: 18,
          color: '#4c4c4c',
          borderColor: barang?.nama ? '#72B4D3' : '#b2b2b2',
          marginHorizontal: 20,
          marginTop: 15,
        }}
      />

      <TouchableOpacity
        onPress={saveOutgoingItems}
        disabled={barang?.nama ? false : true}
        style={{
          backgroundColor: barang?.nama ? '#72B4D3' : '#b2b2b2',
          borderRadius: 15,
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 20,
          marginTop: 20,
          padding: 10,
        }}>
        <Text style={{color: 'white', fontSize: 20, fontWeight: '500'}}>
          Simpan
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BarangReturnScreen;
