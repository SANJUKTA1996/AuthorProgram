import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Author from './components/Author';
import Course from './components/Course';
import Task from './components/Task';

const Stack=createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Author" component={Author} />

    <Stack.Screen name="Course" component={Course} />
    <Stack.Screen name="Task" component={Task} />
   
  </Stack.Navigator>
  </NavigationContainer>
  )
}


