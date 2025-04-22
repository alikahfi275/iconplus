import {View, Text, StatusBar, TextInput, FlatList, Image} from 'react-native';
import React, {useState} from 'react';
import Icons from '../components/Icons';
import {LocalStorage} from '../utils/database/storage';
import {NoImage} from '../utils/image';

const StokBarangScreen = () => {
  const rawData = LocalStorage.getItem('incomingItems');
  const allData = Array.isArray(rawData) ? rawData : [];

  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = allData.filter(item => {
    const lowerQuery = searchQuery.toLowerCase();
    return (
      item.nama.toLowerCase().includes(lowerQuery) ||
      item.kode.toLowerCase().includes(lowerQuery) ||
      item.kategori.toLowerCase().includes(lowerQuery)
    );
  });

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 25,
          borderWidth: 1,
          borderColor: '#72B4D3',
          marginHorizontal: 20,
          paddingHorizontal: 10,
          marginTop: 20,
        }}>
        <Icons name="search" type="Feather" size={25} color="#72B4D3" />
        <TextInput
          style={{
            marginLeft: 5,
            fontSize: 16,
            color: '#4c4c4c',
            flex: 1,
          }}
          placeholder="Cari Barang"
          placeholderTextColor="#b2b2b2"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <FlatList
        data={filteredData}
        keyExtractor={(item, index) => item.id}
        contentContainerStyle={{paddingBottom: 20}}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'row',
              borderRadius: 25,
              borderWidth: 1,
              borderColor: '#72B4D3',
              marginHorizontal: 20,
              marginTop: 20,
              padding: 15,
              alignItems: 'center',
            }}>
            <Image
              source={item.gambar ? {uri: item.gambar} : NoImage}
              style={{width: 80, height: 80, borderRadius: 15}}
            />
            <View style={{marginLeft: 10, flex: 1}}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 0.4}}>
                  <Text style={{fontWeight: '600'}}>Kode</Text>
                </View>
                <Text>: </Text>
                <View style={{flex: 1}}>
                  <Text>{item.kode}</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 0.4}}>
                  <Text style={{fontWeight: '600'}}>Nama</Text>
                </View>
                <Text>: </Text>
                <View style={{flex: 1}}>
                  <Text>{item.nama}</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 0.4}}>
                  <Text style={{fontWeight: '600'}}>Jumlah</Text>
                </View>
                <Text>: </Text>
                <View style={{flex: 1}}>
                  <Text>{item.jumlah}</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 0.4}}>
                  <Text style={{fontWeight: '600'}}>Kaegori</Text>
                </View>
                <Text>: </Text>
                <View style={{flex: 1}}>
                  <Text>{item.kategori}</Text>
                </View>
              </View>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text
            style={{
              textAlign: 'center',
              marginTop: 80,
              color: '#888',
              fontSize: 16,
            }}>
            Barang tidak ditemukan
          </Text>
        }
      />
    </View>
  );
};

export default StokBarangScreen;
