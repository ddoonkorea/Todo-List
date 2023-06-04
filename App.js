import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Completed from './Screens/Completed';
import InCompleted from './Screens/InCompleted';
import TabBarIcon from './components/TabBarIcons';

const Tab = createBottomTabNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName = "InCompleted" 
      tabBarOptions= {{
        activeBackgroundColor: 'skyblue',   //버튼클릭시 배경색
        activeTintColor: 'blue',            //버튼클릭시 글자색
        style:{
          backgroundColor:"#c6cbef"         //기본 배경색
        },
        labelPosition:'beside-con'
      }}

      screenOptions = {({route})=>({
        tabBarLabel:route.name,
        tabBarIcon:({focused})=> (
          TabBarIcon(focused,route.name)   
      )
      })}
      >
        <Tab.Screen name="InCompleted" component={InCompleted} />  
        <Tab.Screen name="Completed" component={Completed} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}