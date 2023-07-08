import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import TaskCard from '../TaskCard/Index'
import styles from './styles';

export default props => {
  const [tasks, setTasks] = useState([])

  const handleFetchData = async () => {
    const response = await AsyncStorage.getItem('@ToDoList')
    const data = response ? JSON.parse(response) : []
    
    setTasks(data)
  }

  const listTaskComponent = tasks.map(task => {
    return <TaskCard task={task} key={task.id}/>
  })

  useFocusEffect(useCallback(() => {
    handleFetchData()
  }, []))

  return ( 
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
        {listTaskComponent}
        {console.log(tasks)}        
    </ScrollView>
  );
}
