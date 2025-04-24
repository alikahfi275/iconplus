import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {BgLogin} from '../utils/image';
import {TextInput} from 'react-native-gesture-handler';
import Icons from '../components/Icons';
import {useNavigation} from '@react-navigation/native';
import {LocalStorage} from '../utils/database/storage';
import {User} from '../utils/icons';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [massage, setMassage] = useState('');
  const [showEye, setShowEye] = useState(false);
  const navigation: any = useNavigation();

  const validLogin = () => {
    if (email === 'admin' && password === 'admin1234') {
      navigation.navigate('Home');
      setMassage('');
      LocalStorage.setItem('isLogin', true);
    } else {
      setMassage('Username atau Password Salah');
    }
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <StatusBar backgroundColor="#0094ff" barStyle="dark-content" />
      <ImageBackground source={BgLogin} style={{flex: 1}}>
        <View
          style={{
            alignItems: 'center',
            backgroundColor: 'white',
            borderWidth: 1,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: '700',
              color: '#4c4c4c',
            }}>
            PT. ICON PLUS
          </Text>
        </View>
        <View style={{alignItems: 'flex-start', marginLeft: 20}}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: '700',
              marginTop: 120,
              color: '#018082',
              textDecorationLine: 'underline',
            }}>
            LOGIN
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            borderBottomWidth: 1,
            marginTop: 25,
            flexDirection: 'row',
            paddingHorizontal: 10,
            alignItems: 'center',
          }}>
          <Image source={User} style={{width: 30, height: 30}} />
          <TextInput
            style={{fontSize: 18, flex: 1, color: '#4c4c4c'}}
            onChangeText={setEmail}
            value={email}
            placeholder="Username"
            placeholderTextColor={'#b2b2b2'}
          />
        </View>
        <View
          style={{
            marginHorizontal: 20,
            borderBottomWidth: 1,
            marginTop: 25,
            flexDirection: 'row',
            paddingHorizontal: 10,
            alignItems: 'center',
          }}>
          <Icons name="key" color="black" size={25} style={{marginRight: 5}} />
          <TextInput
            style={{fontSize: 18, flex: 1, color: '#4c4c4c'}}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            secureTextEntry={!showEye}
            placeholderTextColor={'#b2b2b2'}
          />
          <Icons
            onPress={() => setShowEye(!showEye)}
            name={showEye ? 'eye' : 'eye-with-line'}
            type="Entypo"
            color="#4c4c4c"
            size={25}
            style={{marginRight: 5}}
          />
        </View>
        {massage && (
          <Text style={{textAlign: 'center', marginTop: 10, color: '#d63a3a'}}>
            {massage}
          </Text>
        )}
        <View style={{alignItems: 'flex-end'}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#018082',
              marginHorizontal: 20,
              paddingHorizontal: 80,
              marginTop: 30,
              padding: 10,
            }}
            onPress={validLogin}>
            <Text
              style={{
                textAlign: 'center',
                color: 'black',
                fontWeight: '700',
                fontSize: 20,
              }}>
              LOGIN
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
