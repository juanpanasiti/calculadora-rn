import {useRef, useState} from 'react';

import {Operadores} from '../enums/Operadores';

export const useCalculadora = () => {
  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const [numero, setNumero] = useState('0');
  const ultimaOperacion = useRef<Operadores>();

  const limpiar = () => {
    setNumero('0');
  };
  const armarNumero = (numeroTexto: string) => {
    if (numero === '0' && numeroTexto !== '.') {
      setNumero(numeroTexto);
    } else if (numeroTexto === '.' && numero.includes('.')) {
      return;
    } else {
      setNumero(numero + numeroTexto);
    }
  };
  const cambioSigno = () => {
    if (numero !== '0') {
      if (numero.startsWith('-')) {
        setNumero(numero.replace('-', ''));
      } else {
        setNumero('-' + numero);
      }
    }
  };

  const delLastDigit = () => {
    if (
      numero.length === 1 ||
      (numero.length === 2 && numero.startsWith('-'))
    ) {
      setNumero('0');
    } else {
      setNumero(numero.slice(0, -1));
    }
  };
  const actualizarNumeroAnterior = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }
    setNumero('0');
  };

  const btnOperacion = (operador: Operadores) => {
    if (operador === Operadores.calcular) {
      calcular();
    } else {
      ultimaOperacion.current = operador;
      actualizarNumeroAnterior();
    }
  };

  const calcular = () => {
    const num1 = Number(numeroAnterior);
    const num2 = Number(numero);
    setNumeroAnterior(numero);
    try {
      switch (ultimaOperacion.current) {
        case Operadores.sumar:
          setNumero(`${num1 + num2}`);
          break;
        case Operadores.restar:
          setNumero(`${num1 - num2}`);

          break;
        case Operadores.multiplicar:
          setNumero(`${num1 * num2}`);

          break;
        case Operadores.dividir:
          if (num2 === 0) {
            //Alert, no se puede dividir por cero
          } else {
            setNumero(`${num1 / num2}`);
          }

          break;

        default:
          break;
      }
    } catch (error) {
      // Alert algo malió sal!
    }
  };
  return {
    numero,
    numeroAnterior,
    limpiar,
    cambioSigno,
    delLastDigit,
    actualizarNumeroAnterior,
    btnOperacion,
    armarNumero,
    
  };
};
