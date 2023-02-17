import { Text, TouchableOpacity, View, Image } from 'react-native';
import { styles } from './styles';
import trash from 'assets/trash.png';

export interface TaskProps  {
  name: string,
  onCheck: () => void,
  onRemove: () => void,
}

export function Tasks({name, onCheck, onRemove}: TaskProps){

  return(
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onCheck}>
            <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>

        <Text style={styles.name}>{name}</Text>

        <TouchableOpacity style={styles.button} onPress={onRemove}>
          <Image style={styles.image} source={trash}/>
        </TouchableOpacity>
    </View>
  )  
}