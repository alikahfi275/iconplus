import {View, Text, StatusBar, ImageBackground, Image} from 'react-native';
import React from 'react';
import {BgHome} from '../utils/image';

const DetailBarang = (props: any) => {
  const {data} = props.route.params;
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor="#0094ff" barStyle="dark-content" />
      <ImageBackground source={BgHome} style={{flex: 1}}>
        <View
          style={{
            backgroundColor: '#FEFDC5',
            alignItems: 'center',
            borderWidth: 2,
            marginHorizontal: 40,
            marginTop: 25,
            borderRadius: 10,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
              marginVertical: 5,
            }}>
            KODE BARANG : {data?.kodeBarang}
          </Text>
        </View>
        <Image
          source={{uri: data?.gambarBarang}}
          style={{
            width: 200,
            height: 200,
            borderRadius: 10,
            marginTop: 20,
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: 'black',
            marginVertical: 5,
            textAlign: 'center',
            marginHorizontal: 20,
            marginTop: 20,
          }}>
          {data?.namaBarang}
        </Text>
        <View
          style={{
            backgroundColor: '#FEFDC5',
            alignItems: 'center',
            borderWidth: 2,
            marginHorizontal: 60,
            marginTop: 25,
            borderRadius: 10,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
              marginVertical: 5,
            }}>
            STOK : {data?.stokBarang} / {data?.satuanBarang}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            marginVertical: 5,
            textAlign: 'center',
            marginHorizontal: 20,
            marginTop: 20,
          }}>
          MEREK : {data?.merekBarang}
        </Text>
      </ImageBackground>
    </View>
  );
};

export default DetailBarang;
