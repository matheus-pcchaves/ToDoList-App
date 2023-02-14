import { View, Text } from "react-native";
import { styles } from "./styles";

export function Header(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                to<Text style={styles.text2}>do</Text>
            </Text>
        </View>
    )
}