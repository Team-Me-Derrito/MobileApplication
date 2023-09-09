import { StyleSheet, Text, View, Pressable, SafeAreaView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import BlackButton from "./Components/BlackButton";
import Header from './Header';

function test() {
    console.log('Button Pressed!');
}
export default function Eventpage() {
    return (
        <View style={styles.showContainer}>
            <View>
                <View style={styles.row}>
                    <Header text="Events" />
                </View>
            </View>
            <View style={styles.container}>
                <View >
                    <View style={styles.container}>
                        <BlackButton onPress={() => test()} text="See Events" borderRadius={2} />
                        <BlackButton onPress={() => test()} text="See Events" borderRadius={2} />
                        <BlackButton onPress={() => test()} text="See Events" borderRadius={2} />
                        <BlackButton onPress={() => test()} text="See Events" borderRadius={2} />
                        <BlackButton onPress={() => test()} text="See Events" borderRadius={2} />
                        <BlackButton onPress={() => test()} text="See Events" borderRadius={2} />
                        <BlackButton onPress={() => test()} text="See Events" borderRadius={2} />
                        <BlackButton onPress={() => test()} text="See Events" borderRadius={2} />
                        
                    </View>
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: "red"
    },
    showContainer: {
        backgroundColor: "blue",
        flex: 1
    }
});
  