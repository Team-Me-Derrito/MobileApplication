import { StyleSheet, Text, View, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import BlackButton from "./Components/BlackButton";

function test() {
    console.log('test');
}
export default function Homepage() {
    return (
        <View>
            <Text>Hello there</Text>
            <BlackButton onPress={() => test()} text="See Events" borderRadius={2} />
        </View>
    );
}