import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import Icons from '../components/Icons';
import axios from 'axios';
import {BASE_URL} from '../utils/api/api';
import moment from 'moment';

const MasukRiwayatServiceScreen = (props: any) => {
  const [dataRiwayatService, setDataRiwayatService] = useState<any>([]);
  const getListRiwayatService = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}riwayat/masuk_list.php?tipe=${'service'}`,
      );
      if (response.data.status === 'success') {
        setDataRiwayatService(response.data.data);
      }
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getListRiwayatService();
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
            Riwayat Barang Masuk Service
          </Text>
        </View>

        <FlatList
          data={dataRiwayatService}
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
                Tanggal Masuk : {moment(item?.tanggal).format('L')}
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
                Jumlah Masuk : {item?.jumlah}
              </Text>
            </View>
          )}
        />
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('MasukSearchRiwayat', {
              isService: true,
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
          <Icons name="search" type="MaterialIcons" size={40} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MasukRiwayatServiceScreen;
