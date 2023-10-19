import { StyleSheet, Text, View, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

/**
 * This is a component used frequently within the application
 * 
 * @param {Function} onPress Function to call when the button is clicked
 * @param {String} text text for the button
 * @returns JSX element
 */
export default function BlackButton({
    onPress,
    text,
    borderRadius = 20,
    opacity = 1,
    height = 50,
    width = 200
}) {
    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? 'black' : 'white',
                opacity: pressed ? 1 : opacity,
                borderWidth: 5,
                borderColor: pressed ? 'black' : "grey",
                borderRadius: 10,
                height: height,
                width: width,
                borderWidth: borderRadius,
                justifyContent: "center",
                alignItems: "center",
            },
            ]} onPress={onPress} >
            <Text style={{color: "black", fontWeight: "bold"}} >{text}</Text>
        </Pressable>
    );
}