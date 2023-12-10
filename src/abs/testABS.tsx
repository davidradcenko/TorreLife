import Clipboard from '@react-native-clipboard/clipboard';
import React, {useEffect} from 'react';
import {Text} from 'react-native';


import { TouchableOpacity } from 'react-native';
import { View } from 'react-native';



export const HooksSample = () => {
  

  return (
    <TouchableOpacity onPress={() => Clipboard.setString('ssss')}>
  <View>
    <Text  style={{marginTop:30}}> 
                mail@mail.com
    </Text>
  </View>
</TouchableOpacity>
  );
};