import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function Header() {
    return (
        <View style={[styles.row, styles.top]}>
            <Ionicons name="arrow-back" size={32} color="black" />
            <Text style={{paddingTop: 10}}>Title of page</Text>
            <Ionicons name="options" size={32} color="black" />
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
      flexDirection: "row",
    },
    top: {
        justifyContent: "flex-start",
    }
  });