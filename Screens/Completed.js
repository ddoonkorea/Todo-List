import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Completed({ navigation, route }) {
  const completedTasks = route.params?.completedTasks || [];   //Completed 컴포넌트로부터 받아온 completedTasks값을 사용

  const resetTasks = () => {
    navigation.setParams({ completedTasks: [] }); //completedTasks값을 빈 배열로 초기화
  };

  return (
    <View>
      <View style={{ backgroundColor: 'lightblue', padding: 16 }}>
        <Text style={{ 
          fontSize: 24, 
          fontWeight: 'bold', 
          color: 'white', 
          textAlign: 'center' }}>
          Completed-List
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: 'pink',
          padding: 10,
          borderRadius: 20,
          marginTop: 20,
          width: 200,
          marginLeft: 70,
        }}
        onPress={() => navigation.navigate('InCompleted')}  //Go to ToDo-Lists 클릭시 InCompleted 화면으로 이동
      >
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Go to Todo-List
        </Text>
      </TouchableOpacity>
      <View style={{ 
        marginTop: 20, 
        paddingHorizontal: 16 }}>
        <Text style={{ 
        fontSize: 20, 
        fontWeight: 'bold' }}>Completed-Lists:</Text>
        {completedTasks.map((task, index) => ( //completedTasks배열의 각 항목을 task속성으로 완료된 작업을 출력함
          <Text key={index} style={{ fontSize: 20, marginTop: 13 }}>
            {task.task}
          </Text>
        ))}
      </View>

      <TouchableOpacity            
        style={{ 
          backgroundColor: 'pink', 
          padding: 10, 
          borderRadius: 20, 
          width:300,
          margin: 20 }}
        onPress={resetTasks}
      >
        <Text style={{ 
        color: 'white', 
        fontWeight: 'bold', 
        textAlign: 'center' }}>
        Reset Tasks
        </Text>
      </TouchableOpacity>
    </View>
  );
}
