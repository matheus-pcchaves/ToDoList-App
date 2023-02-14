import { TasksList } from "@components/TasksList";
import React, { useEffect, useState } from "react";
import { Alert, TouchableOpacity, Text, View, TextInput } from "react-native";
import { styles } from "./styles";

export interface TaskItem {
  name: string,
  check: boolean
}

export function Home() {

  const [tasks, setTasks] = useState<TaskItem[]>([])
  const [taskName, setTaskName] = useState('')
  const [checkItems, setCheckItems] = useState<Number>(0)

  useEffect(() => {
    setCheckItems(tasks.filter(task => task.check).length)
  })

  function handleTaskAdd(){
    if(taskName === '') return

    if(tasks.find(task => task.name === taskName)){
      return Alert.alert('Tarefa já adicionada')
    }

    const data = {
      "name": taskName,
      "check": false
    }

    setTasks(old => [...old, data])
    setTaskName('')
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome da tarefa'
          placeholderTextColor={'#6b6b6b'}
          onChangeText={setTaskName}
          value={taskName}
        />

        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tasksList}>

        <Text style={styles.numbersOfTasks}>Criadas {tasks.length}</Text>

        <Text style={styles.numbersOfTasksDone}>Concluídas {String(checkItems)}</Text>
      </View>

      <TasksList items={tasks} setItems={setTasks}/>
    </View>
  );
}
