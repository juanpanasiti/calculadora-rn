import React, { useState } from 'react';
import {StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';
interface Props {
  texto: string;
  bgColor?: string;
  fColor?: string;
  ancho?: boolean;
  action?: () => void;
}
const BotonCalc = (props: Props) => {
  const {texto, bgColor = '#2D2D2D', fColor = 'black', ancho = false, action} = props;


  return (
    <TouchableNativeFeedback onPress={action} background={TouchableNativeFeedback.Ripple('#fff5', false, 40)}>
        <View
          style={{
            ...styles.boton,
            backgroundColor: bgColor,
            width: (ancho) ? 180 : 80
          }}>
          <Text
            style={{
              ...styles.botonTexto,
              color: fColor,
            }}>
            {texto}
          </Text>
        </View>
    </TouchableNativeFeedback>
  );
};
export default BotonCalc;
