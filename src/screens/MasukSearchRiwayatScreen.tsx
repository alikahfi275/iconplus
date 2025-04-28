import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BgHome} from '../utils/image';
import Icons from '../components/Icons';
import ModalList from '../components/ModalList';
import axios from 'axios';
import {BASE_URL} from '../utils/api/api';
import moment from 'moment';

const MasukSearchRiwayatScreen = (props: any) => {
  const isGudang = props?.route?.params?.isGudang || false;

  const routeName = isGudang ? 'gudang' : 'service';

  const [modalVisible, setModalVisible] = useState(false);
  const [namaBarang, setNamaBarang] = useState<any>('');

  const [tanggalDari, setTanggalDari] = useState('');
  const [tanggalSampai, setTanggalSampai] = useState('');
  const [dataResult, setDataResult] = useState<any>([]);
  const [dataRiwayat, setDataRiwayat] = useState<any>([]);

  const searchByFilter = async () => {
    try {
      const response = await axios.post(`${BASE_URL}riwayat/masuk_filter.php`, {
        dari_tanggal: `${tanggalDari} 00:00:00`,
        ke_tanggal: `${tanggalSampai} 23:59:59`,
        nama_barang: namaBarang?.nama_barang,
        tipe: routeName,
      });

      console.log(response.data);

      if (response.data.status === 'success') {
        setDataResult(response.data.data);
      }
      setTanggalDari('');
      setTanggalSampai('');
      setNamaBarang('');
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const getListRiwayat = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}riwayat/masuk_${routeName}_list.php`,
      );
      if (response.data.status === 'success') {
        setDataRiwayat(response.data.data);
      }
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getListRiwayat();
  }, []);

  const renderItem = ({item}: any) => (
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        justifyContent: 'space-between',
        flex: 1,
      }}>
      <Text style={{fontSize: 14, marginHorizontal: 15, color: 'black'}}>
        {item.kode_barang}
      </Text>
      <Text style={{fontSize: 14, marginHorizontal: 15, color: 'black'}}>
        {item.nama_barang}
      </Text>
      <Text style={{fontSize: 14, marginHorizontal: 15, color: 'black'}}>
        {moment(item.tanggal_masuk).format('YYYY-MM-DD')}
      </Text>
    </View>
  );

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor="#0094ff" barStyle="dark-content" />
      <ImageBackground source={BgHome} style={{flex: 1}}>
        <ModalList
          title="Nama Barang"
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          items={dataRiwayat}
          handleSelect={(item: any) => setNamaBarang(item)}
        />
        <View style={{backgroundColor: '#018082'}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 25,
              color: 'black',
              fontWeight: '700',
              marginVertical: 5,
            }}>
            {`Cari Riwayat Barang Masuk ${isGudang ? 'Gudang' : 'Service'}`}
          </Text>
        </View>
        <View style={{marginHorizontal: 20, marginTop: 20}}>
          <Text style={{fontSize: 16, fontWeight: '600', color: 'black'}}>
            Tanggal Dari
          </Text>
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderColor: 'black',
              paddingVertical: 5,
              marginBottom: 10,
            }}
            value={tanggalDari}
            keyboardType="numeric"
            onChangeText={text => setTanggalDari(text)}
            placeholder="Masukan Tanggal contoh : (2022-12-20)"
          />
        </View>
        <View style={{marginHorizontal: 20, marginTop: 20}}>
          <Text style={{fontSize: 16, fontWeight: '600', color: 'black'}}>
            Tanggal Ke
          </Text>
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderColor: 'black',
              paddingVertical: 5,
              marginBottom: 10,
            }}
            value={tanggalSampai}
            keyboardType="numeric"
            onChangeText={text => setTanggalSampai(text)}
            placeholder="Masukan Tanggal contoh : (2022-12-20)"
          />
        </View>
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
                fontWeight: namaBarang?.nama_barang ? '600' : '300',
                color: namaBarang?.nama_barang ? 'black' : '#4c4c4c',
              }}>
              {namaBarang?.nama_barang
                ? namaBarang?.nama_barang
                : 'Nama Barang'}
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
          onPress={searchByFilter}
          style={{
            marginHorizontal: 20,
            backgroundColor: '#018082',
            alignItems: 'center',
            marginTop: 30,
            paddingVertical: 10,
          }}>
          <Text style={{fontSize: 16, color: 'white', fontWeight: '600'}}>
            CARI
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            marginHorizontal: 20,
            marginBottom: 20,
            backgroundColor: '#018082',
            alignItems: 'center',
            marginTop: 20,
            paddingVertical: 10,
          }}>
          <Text style={{fontSize: 16, color: 'white', fontWeight: '600'}}>
            DOWNLOAD PDF
          </Text>
        </TouchableOpacity>

        <ScrollView horizontal style={{flex: 1}}>
          <View style={{flex: 1, margin: 20}}>
            {/* Table Header */}
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 10,
                backgroundColor: '#f0f0f0',
                borderBottomWidth: 2,
                borderBottomColor: '#018082',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  marginHorizontal: 15,
                  color: 'black',
                }}>
                Kode Barang
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  marginHorizontal: 15,
                  color: 'black',
                }}>
                Nama Barang
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  marginHorizontal: 15,
                  color: 'black',
                }}>
                Tanggal Masuk
              </Text>
            </View>
            {/* Table Data */}
            <FlatList
              data={dataResult}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default MasukSearchRiwayatScreen;
