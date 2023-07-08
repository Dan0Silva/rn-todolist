import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid'

import TextInput from '../../components/TextInput/Index'
import styles from './styles';

export default props => {
  const [title, setTitle] = useState('')
  const [subtitle, setSubTitle] = useState('')

  const handleObject = async () => {
    try {
      const id = uuid.v4()
    
      const task = {
        id,
        title,
        subtitle
      }

      const response = await AsyncStorage.getItem('@ToDoList')
      const data = response ? JSON.parse(response) : []
      
      data.push(task)

      await AsyncStorage.setItem('@ToDoList', JSON.stringify(data))
    } catch (e) {
      console.warn(e)
    }
  }

  return (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput placeholder='Titulo da Task' onChangeText={text => setTitle(text)}/>
          <TextInput placeholder='Descrição' onChangeText={text => setSubTitle(text)}/>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleObject}>
            <Text style={styles.buttonText}>
              Salvar
            </Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}