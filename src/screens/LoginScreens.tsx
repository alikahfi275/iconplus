import {
  View,
  Text,
  StatusBar,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {AccountImage} from '../utils/image';
import {TextInput} from 'react-native-gesture-handler';
import Icons from '../components/Icons';
import {useNavigation} from '@react-navigation/native';

const LoginScreens = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation: any = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Image
          source={AccountImage}
          style={{width: 250, height: 250}}
          resizeMode="stretch"
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 30, fontWeight: '700', marginTop: 5}}>
          LOGIN
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: 20,
          borderRadius: 15,
          borderColor: '#72B4D3',
          borderWidth: 1,
          marginTop: 25,
          flexDirection: 'row',
          paddingHorizontal: 10,
          alignItems: 'center',
        }}>
        <Icons
          name="email"
          color="#72B4D3"
          size={25}
          style={{marginRight: 5}}
        />
        <TextInput
          style={{fontSize: 18, flex: 1}}
          onChangeText={setEmail}
          value={email}
          placeholder="Username"
        />
      </View>
      <View
        style={{
          marginHorizontal: 20,
          borderRadius: 15,
          borderColor: '#72B4D3',
          borderWidth: 1,
          marginTop: 25,
          flexDirection: 'row',
          paddingHorizontal: 10,
          alignItems: 'center',
        }}>
        <Icons name="key" color="#72B4D3" size={25} style={{marginRight: 5}} />
        <TextInput
          style={{fontSize: 18, flex: 1}}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: '#72B4D3',
          marginHorizontal: 20,
          borderRadius: 15,
          marginTop: 30,
          padding: 10,
        }}
        onPress={() => navigation.navigate('Home')}>
        <Text style={{textAlign: 'center', color: 'white', fontSize: 20}}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreens;
