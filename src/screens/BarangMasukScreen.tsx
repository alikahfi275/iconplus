import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BgHome} from '../utils/image';
import ModalList from '../components/ModalList';
import Icons from '../components/Icons';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {BASE_URL} from '../utils/api/api';
import Spinner from 'react-native-loading-spinner-overlay';

const BarangMasukScreen = (props: any) => {
  const navigation: any = useNavigation();
  const isToko = props?.route?.params?.isToko || false;
  const [modalVisible, setModalVisible] = useState(false);
  const [namaBarang, setNamaBarang] = useState('');
  const [jumlah, setJumlah] = useState('');

  const [dataGudang, setDataGudang] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);

  const getListBarangGudang = async () => {
    setShowSpinner(true);
    try {
      const response = await axios.get(`${BASE_URL}barang/gudang/list.php`);
      if (response.data.status === 'success') {
        const mappedData = response.data.data.map(
          (item: any) => item.nama_barang,
        );

        setDataGudang(mappedData);
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
      <StatusBar backgroundColor="#0094ff" barStyle="dark-content" />
      <ImageBackground source={BgHome} style={{flex: 1}}>
        <ModalList
          title="Nama Barang"
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          items={dataGudang}
          handleSelect={(item: any) => setNamaBarang(item)}
        />
        <View style={{backgroundColor: '#018082'}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 30,
              color: 'black',
              fontWeight: '700',
              marginVertical: 5,
            }}>
            Barang Masuk {isToko ? 'Toko' : 'Service'}
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
            placeholder="Masukan Jumlah Barang"
          />
        </View>
        <TouchableOpacity
          style={{
            marginHorizontal: 20,
            marginBottom: 20,
            backgroundColor: '#018082',
            alignItems: 'center',
            paddingVertical: 10,
            marginTop: 20,
          }}>
          <Text style={{fontSize: 16, color: 'black', fontWeight: '600'}}>
            SIMPAN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('BarangMasukBaru', {isToko})}
          style={{
            marginHorizontal: 20,
            marginBottom: 20,
            backgroundColor: '#018082',
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <Text style={{fontSize: 16, color: 'black', fontWeight: '600'}}>
            BARANG MASUK {isToko ? 'TOKO' : 'SERVICE'} BARU
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default BarangMasukScreen;
