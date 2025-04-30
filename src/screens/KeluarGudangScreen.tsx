import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ModalList from '../components/ModalList';
import Icons from '../components/Icons';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {BASE_URL} from '../utils/api/api';
import Spinner from 'react-native-loading-spinner-overlay';

const KeluarGudangScreen = (props: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [itemPick, setItemPick] = useState<any>({});
  const [jumlah, setJumlah] = useState('');
  const [tangglaMasuk, setTangglaMasuk] = useState('');

  const [dataGudang, setDataGudang] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);

  const updateJumlah = async () => {
    try {
      await axios.post(`${BASE_URL}barang_keluar/gudang.php`, {
        kode_barang: itemPick.kode_barang,
        jumlah: jumlah,
      });

      await axios.post(`${BASE_URL}riwayat/keluar.php`, {
        kode_barang: itemPick.kode_barang,
        jumlah: jumlah,
        tipe: 'gudang',
        tanggal: `${tangglaMasuk} 00:00:00`,
        nama_barang: itemPick.nama_barang,
      });

      setJumlah('');
      setTangglaMasuk('');
      setItemPick({});
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const getListBarangGudang = async () => {
    setShowSpinner(true);
    try {
      const response = await axios.get(`${BASE_URL}barang/gudang/list.php`);
      if (response.data.status === 'success') {
        setDataGudang(response.data.data);
        setShowSpinner(false);
      } else {
        setShowSpinner(false);
      }
    } catch (error) {
      console.log('Error fetching data:', error);
      setShowSpinner(false);
    }
  };

  useEffect(() => {
    getListBarangGudang();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Spinner visible={showSpinner} textContent={'Loading...'} color="white" />
      <StatusBar backgroundColor="#1e81b0" barStyle="dark-content" />
      <View style={{flex: 1, backgroundColor: '#abdbe3'}}>
        <ModalList
          title="Nama Barang"
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          items={dataGudang}
          handleSelect={(item: any) => setItemPick(item)}
        />
        <View style={{backgroundColor: '#FE0000'}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 30,
              color: 'black',
              fontWeight: '700',
              marginVertical: 5,
            }}>
            Barang Keluar Gudang
          </Text>
        </View>

        <View style={{marginHorizontal: 20}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              marginTop: 20,
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
                fontWeight: itemPick.nama_barang ? '600' : '300',
                color: itemPick.nama_barang ? 'black' : '#4c4c4c',
              }}>
              {itemPick.nama_barang ? itemPick.nama_barang : 'Nama Barang'}
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
              marginTop: 20,
            }}>
            Jumlah Barang
          </Text>
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderColor: 'black',
              paddingVertical: 5,
              marginBottom: 10,
            }}
            value={jumlah}
            keyboardType="numeric"
            onChangeText={text => setJumlah(text)}
            placeholder="Jumlah Barang"
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: 'black',
              marginTop: 20,
            }}>
            Tanggal Masuk Barang
          </Text>
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderColor: 'black',
              paddingVertical: 5,
              marginBottom: 10,
            }}
            value={tangglaMasuk}
            keyboardType="numeric"
            onChangeText={text => setTangglaMasuk(text)}
            placeholder="Tanggal Masuk Contoh (2025-04-29)"
          />
        </View>
        <TouchableOpacity
          onPress={updateJumlah}
          style={{
            marginHorizontal: 20,
            marginBottom: 20,
            backgroundColor: '#FE0000',
            alignItems: 'center',
            paddingVertical: 10,
            marginTop: 20,
          }}>
          <Text style={{fontSize: 16, color: 'black', fontWeight: '600'}}>
            SIMPAN
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default KeluarGudangScreen;
