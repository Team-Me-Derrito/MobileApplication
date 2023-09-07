import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SimpleLineIcons } from '@expo/vector-icons'; 

export default function Header({ text }) {
    return (
        <View style={[styles.row, styles.top]}>
            <Ionicons name="arrow-back" size={32} color="black" />
            <Text style={{paddingTop: 10}}>{text}</Text>
            <SimpleLineIcons name="options-vertical" size={24} color="black" />
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