import React from 'react';
import {Text, View} from 'react-native';
import BotonCalc from '../components/BotonCalc';
import {Operadores} from '../enums/Operadores';
import {styles} from '../theme/appTheme';
import {useCalculadora} from '../hooks/useCalculadora';

const CalculadoraScreen = () => {
  const {
    numero,
    numeroAnterior,
    limpiar,
    cambioSigno,
    delLastDigit,
    btnOperacion,
    armarNumero,
  } = useCalculadora();
  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoParcial}>{numeroAnterior}</Text>
      <Text style={styles.resultado} adjustsFontSizeToFit numberOfLines={1}>
        {numero}
      </Text>

      <View style={styles.fila}>
        <BotonCalc texto="C" bgColor="#9B9B9B" action={limpiar} />
        <BotonCalc texto="+/-" bgColor="#9B9B9B" action={cambioSigno} />
        <BotonCalc texto="del" bgColor="#9B9B9B" action={delLastDigit} />
        <BotonCalc
          texto="/"
          fColor="white"
          bgColor="#FF9427"
          action={() => btnOperacion(Operadores.dividir)}
        />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="7" fColor="white" action={() => armarNumero('7')} />
        <BotonCalc texto="8" fColor="white" action={() => armarNumero('8')} />
        <BotonCalc texto="9" fColor="white" action={() => armarNumero('9')} />
        <BotonCalc
          texto="X"
          fColor="white"
          bgColor="#FF9427"
          action={() => btnOperacion(Operadores.multiplicar)}
        />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="4" fColor="white" action={() => armarNumero('4')} />
        <BotonCalc texto="5" fColor="white" action={() => armarNumero('5')} />
        <BotonCalc texto="6" fColor="white" action={() => armarNumero('6')} />
        <BotonCalc
          texto="-"
          fColor="white"
          bgColor="#FF9427"
          action={() => btnOperacion(Operadores.restar)}
        />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="1" fColor="white" action={() => armarNumero('1')} />
        <BotonCalc texto="2" fColor="white" action={() => armarNumero('2')} />
        <BotonCalc texto="3" fColor="white" action={() => armarNumero('3')} />
        <BotonCalc
          texto="+"
          fColor="white"
          bgColor="#FF9427"
          action={() => btnOperacion(Operadores.sumar)}
        />
      </View>
      <View style={styles.fila}>
        <BotonCalc
          texto="0"
          fColor="white"
          ancho
          action={() => armarNumero('0')}
        />
        <BotonCalc texto="." fColor="white" action={() => armarNumero('.')} />
        <BotonCalc
          texto="="
          fColor="white"
          bgColor="#FF9427"
          action={() => btnOperacion(Operadores.calcular)}
        />
      </View>
    </View>
  );
};

export default CalculadoraScreen;
