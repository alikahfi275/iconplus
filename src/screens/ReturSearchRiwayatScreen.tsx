import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import Icons from '../components/Icons';
import ModalList from '../components/ModalList';
import {BASE_URL} from '../utils/api/api';
import axios from 'axios';
import moment from 'moment';

const ReturSearchRiwayatScreen = (props: any) => {
  const isGudang = props?.route?.params?.isGudang || false;

  const routeName = isGudang ? 'gudang' : 'service';

  const [modalVisible, setModalVisible] = useState(false);
  const [namaBarang, setNamaBarang] = useState<any>('');

  const [tanggalDari, setTanggalDari] = useState('');
  const [tanggalSampai, setTanggalSampai] = useState('');
  const [dataResult, setDataResult] = useState<any>([]);
  const [dataRiwayat, setDataRiwayat] = useState<any>([]);

  const generatePDF = async () => {
    let htmlContent =
      '<h1>Inventory Report</h1><table border="1" cellpadding="5" cellspacing="0">';
    htmlContent +=
      '<tr><th>Kode Barang</th><th>Nama Barang</th><th>Jumlah</th><th>Tipe</th><th>Tanggal</th></tr>';

    dataResult.forEach((item: any) => {
      htmlContent += `
      <tr>
        <td>${item.kode_barang}</td>
        <td>${item.nama_barang}</td>
        <td>${item.jumlah}</td>
        <td>${item.tipe}</td>
        <td>${item.tanggal}</td>
      </tr>
    `;
    });

    htmlContent += '</table>';

    const options = {
      html: htmlContent,
      fileName: 'Riwayat_Retur',
      directory: 'Documents',
    };

    const file = await RNHTMLtoPDF.convert(options);
    console.log(file.filePath);
  };

  const searchByFilter = async () => {
    try {
      const response = await axios.post(`${BASE_URL}riwayat/retur_filter.php`, {
        dari_tanggal: `${tanggalDari} 00:00:00`,
        ke_tanggal: `${tanggalSampai} 23:59:59`,
        nama_barang: namaBarang?.nama_barang,
        tipe: routeName,
      });

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
        `${BASE_URL}riwayat/retur_list_${routeName}.php`,
      );
      if (response.data.status === 'success') {
        const data = response.data.data;

        const seen = new Set();
        const filteredData = data.filter((item: any) => {
          if (seen.has(item.nama_barang)) {
            return false;
          }
          seen.add(item.nama_barang);
          return true;
        });

        setDataRiwayat(filteredData);
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
        {moment(item.tanggal).format('YYYY-MM-DD')}
      </Text>
    </View>
  );

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor="#FFFFA3" barStyle="dark-content" />
      <View style={{flex: 1, backgroundColor: '#abdbe3'}}>
        <ModalList
          title="Nama Barang"
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          items={dataRiwayat}
          handleSelect={(item: any) => setNamaBarang(item)}
        />
        <View style={{backgroundColor: '#FFFFA3'}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 25,
              color: 'black',
              fontWeight: '700',
              marginVertical: 5,
            }}>
            {`Cari Riwayat Barang \n Retur ${isGudang ? 'Gudang' : 'Service'}`}
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
            backgroundColor: '#FFFFA3',
            alignItems: 'center',
            marginTop: 30,
            paddingVertical: 10,
          }}>
          <Text style={{fontSize: 16, color: 'black', fontWeight: '600'}}>
            CARI
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={generatePDF}
          style={{
            marginHorizontal: 20,
            marginBottom: 20,
            backgroundColor: '#FFFFA3',
            alignItems: 'center',
            marginTop: 20,
            paddingVertical: 10,
          }}>
          <Text style={{fontSize: 16, color: 'black', fontWeight: '600'}}>
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
                borderBottomColor: '#1e81b0',
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
                Tanggal Keluar
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
      </View>
    </View>
  );
};

export default ReturSearchRiwayatScreen;
