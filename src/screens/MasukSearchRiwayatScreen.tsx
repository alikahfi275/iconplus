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
import React, {useState} from 'react';
import {BgHome} from '../utils/image';
import Icons from '../components/Icons';
import ModalList from '../components/ModalList';

const MasukSearchRiwayatScreen = (props: any) => {
  const isGudang = props?.route?.params?.isGudang || false;

  const [modalVisible, setModalVisible] = useState(false);
  const [namaBarang, setNamaBarang] = useState('');

  const [tanggalDari, setTanggalDari] = useState('');
  const [tanggalSampai, setTanggalSampai] = useState('');

  const namaBarangDummy = [
    'Pensil',
    'Penghapus',
    'Penggaris',
    'Penggaris',
    'Penggaris',
  ];

  const dummyData = [
    {
      id: '1',
      tanggal: '20-12-2022',
      namaBarang: 'Isolasi 1/2 Inch',
      tanggalMasuk: '20-12-2022',
      kodeBarang: '123',
      jumlah: 10,
      jenis: 'Masuk',
      lokasi: 'Toko',
    },
    {
      id: '2',
      tanggal: '21-12-2022',
      namaBarang: 'Isolasi 1/2 Inch',
      tanggalMasuk: '20-12-2022',
      kodeBarang: '123',
      jumlah: 5,
      jenis: 'Keluar',
      lokasi: 'Service',
    },
    {
      id: '3',
      tanggal: '22-12-2022',
      namaBarang: 'Isolasi 1/2 Inch',
      tanggalMasuk: '20-12-2022',
      kodeBarang: '123',
      jumlah: 2,
      jenis: 'Return',
      lokasi: 'Toko',
    },
  ];

  const renderItem = ({item}: any) => (
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      }}>
      <Text
        style={{flex: 1, fontSize: 14, paddingHorizontal: 5, color: 'black'}}>
        {item.kodeBarang}
      </Text>
      <Text
        style={{flex: 2, fontSize: 14, paddingHorizontal: 5, color: 'black'}}>
        {item.namaBarang}
      </Text>
      <Text
        style={{flex: 1, fontSize: 14, paddingHorizontal: 5, color: 'black'}}>
        {item.tanggalMasuk}
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
          items={namaBarangDummy}
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
            placeholder="Masukan Tanggal contoh : (20-12-2022)"
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
            value={tanggalDari}
            keyboardType="numeric"
            onChangeText={text => setTanggalDari(text)}
            placeholder="Masukan Tanggal contoh : (20-12-2022)"
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
        </View>
        <TouchableOpacity
          onPress={() => {}}
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
              }}>
              <Text
                style={{
                  flex: 1,
                  fontSize: 14,
                  fontWeight: 'bold',
                  paddingHorizontal: 5,
                  color: 'black',
                }}>
                Kode Barang
              </Text>
              <Text
                style={{
                  flex: 2,
                  fontSize: 14,
                  fontWeight: 'bold',
                  paddingHorizontal: 5,
                  color: 'black',
                }}>
                Nama Barang
              </Text>
              <Text
                style={{
                  flex: 1,
                  fontSize: 14,
                  fontWeight: 'bold',
                  paddingHorizontal: 5,
                  color: 'black',
                }}>
                Tanggal Masuk
              </Text>
            </View>
            {/* Table Data */}
            <FlatList
              data={dummyData}
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
