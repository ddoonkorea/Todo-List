import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function InCompleted({ navigation }) {   
  const [task, setTask] = useState('');   //task항목 저장
  const [taskList, setTaskList] = useState([]); //task항목의 목록들을 저장
  const [completedTasks, setCompletedTasks] = useState([]); //Completed 컴포넌트에서 사용하기위해 완료한 task항목들을 저장

  // 새로운 할 일을 추가
  const addTask = () => {
  setTaskList(prevList => [...prevList, { task, checked: false }]); //task를 계속 List에 쌓는다.
  setTask('');
};


  // 할 일을 삭제하고 Completed 페이지로 전달
  const deleteTask = (index) => {
    const deletedTask = taskList[index];    //삭제될 할일들을 deletedTask에 저장
    const updatedList = [...taskList];    //taskList배열을 모두 복사해서 splice메서드로 index 요소 삭제
    updatedList.splice(index, 1);
    setTaskList(updatedList);   //수정된 updatedList를 setTaskList를 통해 새로운값으로 설정
    setCompletedTasks([...completedTasks, deletedTask]);  //완료된 할일 목록에 추가
    navigation.navigate('Completed', { completedTasks: [...completedTasks, deletedTask] }); //할일들을 delete하면 Completed 컴포넌트로 이동
  };

  // 할 일의 체크 상태를 토글
  const toggleTask = (index) => {
    const updatedList = [...taskList];  //updatedList배열은 taskList를 복사함
    updatedList[index].checked = !updatedList[index].checked;  //부정 연산자를 사용하여 체크 여부를 확인
    setTaskList(updatedList); //setTaskList로 수정된 updataedList를 새로운 값으로 설정
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: 'lightblue', padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Todo-List</Text>
      </View>
      <TextInput
        style={{
          backgroundColor: 'white',
          textAlign: 'Center',
          padding: 10,
          fontSize: 18,
          borderRadius: 30,
          marginTop: 20,
          width: 280,
          marginLeft: 25,
        }}
        placeholder="할 일을 입력하시오"
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <TouchableOpacity
        style={{ backgroundColor: 'pink', padding: 10, borderRadius: 30, width: 200, marginLeft: 70, marginTop: 20, marginBottom: 10 }}
        onPress={addTask}
      >
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 25 }}>Add List</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ position: 'absolute', top: 8, right: 20 }}
        onPress={() => navigation.navigate('Completed', { completedTasks })}
      >
        <Ionicons name="arrow-forward-circle-outline" size={40} color="white" />
      </TouchableOpacity>

      <FlatList
        data={taskList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <TouchableOpacity onPress={() => toggleTask(index)}>
              {item.checked ? (
                <Text style={{ marginRight: 8, fontSize: 20, padding: 10 }}>✅</Text>
              ) : (
                <Text style={{ marginRight: 8, fontSize: 20, padding: 10 }}>⬜️</Text>
              )}
            </TouchableOpacity>
            <Text style={{ flex: 1, textDecorationLine: item.checked ? 'line-through' : 'none' }}>
              {item.task}
            </Text>
            <TouchableOpacity
              style={{ backgroundColor: 'pink', padding: 10, borderRadius: 20, marginRight: 20 }}
              onPress={() => deleteTask(index)}
            >
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
