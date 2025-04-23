import {View, Text, StatusBar, TextInput, FlatList} from 'react-native';
import React, {useState} from 'react';
import {LocalStorage} from '../utils/database/storage';
import Icons from '../components/Icons';
import moment from 'moment';

const HistoryScreen = () => {
  const rawData = LocalStorage.getItem('historyItems');
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
              marginHorizontal: 20,
              borderRadius: 28,
              marginTop: 15,
              backgroundColor:
                item?.type === 'Barang Masuk'
                  ? '#92d63a'
                  : item?.type === 'Barang Keluar'
                  ? '#d63a3a'
                  : '#d6af3a',
              paddingHorizontal: 4,
              paddingBottom: 3,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: 'white',
                marginLeft: 15,
                marginTop: 10,
              }}>
              {item?.type}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                borderRadius: 25,
                marginTop: 10,
                padding: 15,
                alignItems: 'center',
                backgroundColor: 'white',
              }}>
              <View style={{marginLeft: 10, flex: 1}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 0.4}}>
                    <Text style={{fontWeight: '600', color: '#4c4c4c'}}>
                      Kode
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
                      {item.kode}
                    </Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 0.4}}>
                    <Text style={{fontWeight: '600', color: '#4c4c4c'}}>
                      Nama
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
                      {item.nama}
                    </Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 0.4}}>
                    <Text style={{fontWeight: '600', color: '#4c4c4c'}}>
                      Jumlah
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
                      {item.jumlah}
                    </Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 0.4}}>
                    <Text style={{fontWeight: '600', color: '#4c4c4c'}}>
                      Kaegori
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
                      {item.kategori}
                    </Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 0.4}}>
                    <Text style={{fontWeight: '600', color: '#4c4c4c'}}>
                      Tanggal
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
                      {moment(item.tanggal).format('DD-MMM-YYYY HH:mm')}
                    </Text>
                  </View>
                </View>
                {item?.alasan && (
                  <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 0.4}}>
                      <Text style={{fontWeight: '600', color: '#4c4c4c'}}>
                        Alasan
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
                        {item?.alasan}
                      </Text>
                    </View>
                  </View>
                )}
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

export default HistoryScreen;
