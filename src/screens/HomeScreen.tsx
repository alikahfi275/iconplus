import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {BannerImage} from '../utils/image';
import Icons from '../components/Icons';
import Card from '../components/Card';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        backgroundColor="rgba(159, 229, 255, 0.23)"
        barStyle="dark-content"
      />
      <Image
        source={BannerImage}
        style={{width: '100%', height: 250}}
        resizeMode="stretch"
      />
      <Text
        style={{
          textAlign: 'center',
          fontSize: 30,
          color: '#72B4D3',
          fontWeight: '700',
          marginTop: -190,
        }}>
        DASHBOARD
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 25,
          marginTop: 30,
        }}>
        <Card type="MaterialIcons" icon="move-to-inbox" title="Barang Masuk" />
        <Card type="MaterialIcons" icon="outbox" title="Barang Keluar" />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 25,
          marginTop: 30,
        }}>
        <Card
          type="MaterialIcons"
          icon="markunread-mailbox"
          title="Barang Return"
        />
        <Card type="MaterialIcons" icon="all-inbox" title="Stok Barang" />
      </View>
      <TouchableOpacity
        onPress={() => {}}
        style={{
          padding: 20,
          borderRadius: 15,
          backgroundColor: 'white',
          height: 150,
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: '#72B4D3',
          shadowOffset: {
            width: 1,
            height: 7,
          },
          shadowOpacity: 0.41,
          shadowRadius: 9.11,
          elevation: 14,
          marginTop: 25,
          marginHorizontal: 25,
        }}>
        <Icons name="toolbox" size={60} color="#72B4D3" />
        <Text
          style={{
            fontSize: 14,
            fontWeight: '500',
            marginTop: 5,
            textAlign: 'center',
          }}>
          Stok Barang Service
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
