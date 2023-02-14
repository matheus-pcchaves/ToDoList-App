import { Tasks } from "@components/Tasks";
import { TaskItem } from "@screens/Home";
import { Alert, FlatList, Text, View } from "react-native";
import { styles } from "./styles";

interface TaskListProps {
  items: TaskItem[];
  setItems: (item: TaskItem[]) => void;
}

export function TasksList({items, setItems}: TaskListProps){

    function handleCheck(item: TaskItem){
      const updateItems = [...items]
      const index = items.findIndex((task: TaskItem) => task.name === item?.name)
      updateItems[index] = {...item, check: !item.check}

      setItems(updateItems)
    }

    function handleTaskRemove(name: string){
      const newItens = items.filter(item => item.name !== name)  
      setItems(newItens)
      Alert.alert('Tarefa removida!')
    }

    return(
        <View>
            <FlatList
                data={items}
                keyExtractor={item => String(item.name)}
                renderItem={({item}) => (
                <Tasks
                    key={String(item.name)}
                    name={String(item.name)}
                    onCheck={() => handleCheck(item)}
                    onRemove={() => handleTaskRemove(item.name)}
                />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                <Text style={styles.listEmptyText}>
                    Adicione tarefas a sua lista...
                </Text>
                )}
            />
        </View>
    )  
}