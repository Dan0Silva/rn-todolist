import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "@rneui/base";
import { Ionicons } from '@expo/vector-icons';

import TaskList from '../src/View/TaskList/Index';
import TaskForm from '../src/View/TaskForm/Index';

const Stack = createNativeStackNavigator()

export default props => {
  return (
    <NavigationContainer>
      <Stack.Navigator {...navigatorProps}>

        <Stack.Screen {...taskListScreenProps}/>
        <Stack.Screen {...taskFormScreenProps}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const navigatorProps = {
  initialRouteName: 'TaskList',
  screenOptions: {
    headerShown: true,
    headerStyle: {
      backgroundColor: '#f45f11',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 22,
    },
    headerTitleAlign: 'center',
  },
}

const taskFormScreenProps = {
  name: 'TaskForm', 
  component: TaskForm,
  options: {
    title: 'Criando Tarefa'
  },
}

const taskListScreenProps = {
  name: 'TaskList',
  component: TaskList,
  options: ({ navigation }) => {
    return {
      title: 'To-Do',
      headerRight: () => (
        <Button 
          onPress={() => {navigation.navigate('TaskForm')}}
          type='clear'
          icon={<Ionicons name='add' size={26} color='white'/>}
        />
      )
    }
  },
}