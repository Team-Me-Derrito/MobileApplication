import { StyleSheet, Text, View, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import BlackButton from "./Components/BlackButton";
import Header from './Header';

function test() {
    console.log('Button Pressed!');
}
export default function Homepage() {
    return (
        
        <View>
            <Header text="Events" />
            <Text>Hello there</Text>
            <BlackButton onPress={() => test()} text="See Events" borderRadius={2} />
        </View>
    );
}