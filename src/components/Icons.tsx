import React from 'react';
import {ViewStyle} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

interface Props {
  name: String;
  solid?: boolean;
  size: number;
  style?: ViewStyle;
  color?: string;
  type?: string;
  onPress?: () => void;
}

const Icons: React.FC<Props> = props => {
  switch (props.type) {
    case 'FontAwesome5':
      return <FontAwesome5 {...props} size={props.size} />;
    case 'FontAwesome6':
      return <FontAwesome6 {...props} size={props.size} />;
    case 'AntDesign':
      return <AntDesign {...props} size={props.size} />;
    case 'Ionicons':
      return <Ionicons {...props} size={props.size} />;

    case 'Feather':
      return <Feather {...props} size={props.size} />;

    case 'MaterialIcons':
      return <MaterialIcons {...props} size={props.size} />;

    case 'Entypo':
      return <Entypo {...props} size={props.size} />;

    case 'FontAwesome5Pro':
      return <FontAwesome5Pro {...props} size={props.size} />;

    default:
      return <MaterialCommunityIcons {...props} size={props.size} />;
  }
};

export default Icons;
