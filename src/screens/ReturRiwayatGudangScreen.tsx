import {View, Text, StatusBar, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import moment from 'moment';
import axios from 'axios';
import {BASE_URL} from '../utils/api/api';
import Icons from '../components/Icons';

const ReturRiwayatGudangScreen = (props: any) => {
  const [dataRiwayatGudang, setDataRiwayatGudang] = useState<any>([]);
  const getListRiwayatGudang = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}riwayat/retur_list.php?tipe=${'gudang'}`,
      );

      if (response.data.status === 'success') {
        setDataRiwayatGudang(response.data.data);
      }
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getListRiwayatGudang();
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor="#1e81b0" barStyle="dark-content" />
      <View style={{flex: 1, backgroundColor: '#abdbe3'}}>
        <View style={{backgroundColor: '#1e81b0'}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 25,
              color: 'black',
              fontWeight: '700',
              marginVertical: 5,
            }}>
            Riwayat Barang Retur Gudang
          </Text>
        </View>

        <FlatList
          data={dataRiwayatGudang}
          renderItem={({item}) => (
            <View
              style={{
                backgroundColor: 'white',
                borderWidth: 2,
                marginHorizontal: 20,

                marginTop: 25,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'black',
                  alignItems: 'center',
                  padding: 5,
                  backgroundColor: '#1e81b0',
                }}>
                Tanggal Retur : {moment(item?.tanggal).format('L')}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'black',
                  padding: 5,
                }}>
                Kode Barang : {item?.kode_barang}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'black',
                  padding: 5,
                }}>
                Nama Barang : {item?.nama_barang}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'black',
                  padding: 5,
                }}>
                Jumlah Retur : {item?.jumlah}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'black',
                  padding: 5,
                }}>
                Supplier : {item?.supplier}
              </Text>
            </View>
          )}
        />
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('ReturSearchRiwayat', {
              isGudang: true,
            })
          }
          style={{
            position: 'absolute',
            bottom: 20,
            right: 20,
            padding: 10,
            backgroundColor: '#BFFEC6',
            borderRadius: 50,
          }}>
          <Icons name="pencil" size={40} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('ReturSearchRiwayat', {
              isGudang: true,
            })
          }
          style={{
            position: 'absolute',
            bottom: 20,
            right: 100,
            padding: 10,
            backgroundColor: '#FFFFA3',
            borderRadius: 50,
          }}>
          <Icons name="search" type="MaterialIcons" size={40} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReturRiwayatGudangScreen;
