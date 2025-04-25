import {
  View,
  Text,
  StatusBar,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icons from '../components/Icons';
import {BgHome, NoImage} from '../utils/image';
import {useNavigation} from '@react-navigation/native';

const StokBarangScreen = () => {
  const navigation: any = useNavigation();
  const dummyData = [
    {
      kodeBarang: 1,
      namaBarang: 'Baju Baru ALhamdulilah  sdad dsds',
      stokBarang: 10,
      merekBarang: 'Polo',
      satuanBarang: 'Pcs',
      gambarBarang: 'https://dummyimage.com/600x400/000/fff',
    },
    {
      kodeBarang: 2,
      namaBarang: 'Baju baru ku ini ',
      stokBarang: 10,
      merekBarang: 'Polo',
      satuanBarang: 'Pcs',
      gambarBarang: 'https://dummyimage.com/600x400/000/fff',
    },
    {
      kodeBarang: 3,
      namaBarang: 'Baju baju baju baju baju',
      stokBarang: 10,
      merekBarang: 'Polo',
      satuanBarang: 'Pcs',
      gambarBarang: 'https://dummyimage.com/600x400/000/fff',
    },
    {
      kodeBarang: 4,
      namaBarang: 'Baju baru ku alhamduliah',
      stokBarang: 10,
      merekBarang: 'Polo',
      satuanBarang: 'Pcs',
      gambarBarang: 'https://dummyimage.com/600x400/000/fff',
    },
  ];

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor="#0094ff" barStyle="dark-content" />
      <ImageBackground source={BgHome} style={{flex: 1}}>
        <View style={{backgroundColor: '#BFFEC6'}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 28,
              color: 'black',
              fontWeight: '700',
              marginVertical: 5,
            }}>
            STOK BARANG TOKO
          </Text>
        </View>
        <FlatList
          data={dummyData}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('DetailBarang', {data: item})}
              style={{
                backgroundColor: 'white',
                marginHorizontal: 15,
                marginTop: 15,
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderWidth: 2,
              }}>
              <Image
                source={NoImage}
                style={{height: 80, width: 80, margin: 10}}
              />
              <View style={{flex: 1, paddingVertical: 5}}>
                <Text style={{fontSize: 20, fontWeight: '500', color: 'black'}}>
                  {item.namaBarang}
                </Text>
              </View>

              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: 15,
                }}>
                <Text
                  style={{
                    fontSize: 30,
                    fontWeight: '800',
                    borderWidth: 2,
                    padding: 15,
                    color: '#018082',
                  }}>
                  {item.stokBarang}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
        <View
          style={{
            position: 'absolute',
            bottom: 20,
            right: 20,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: '#BFFEC6',
              borderRadius: 50,
              padding: 10,
              marginRight: 15,
            }}>
            <Icons name="search" type="MaterialIcons" size={40} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('HapusBarangToko')}
            style={{
              alignItems: 'center',
              backgroundColor: '#FE0000',
              borderRadius: 50,
              padding: 10,
              marginRight: 15,
            }}>
            <Icons name="trash" type="Entypo" size={40} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('EditTokoBarang')}
            style={{
              alignItems: 'center',
              backgroundColor: '#BFFEC6',
              borderRadius: 50,
              padding: 10,
            }}>
            <Icons name="pencil" size={40} color="black" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default StokBarangScreen;
