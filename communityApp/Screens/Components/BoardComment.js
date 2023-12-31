import { StyleSheet, Text, View, Pressable, Dimensions, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


/**
 * This is a component used frequently within the application
 * 
 * @param {Function} onPress Function to call when the button is clicked
 * @param {String} text text for the button
 * @param {String} name Text of the message
 * @returns JSX element
 */
export default function EventBox({
    onPress,
    text,
    name,
    imagePath="../../assets/Event_images/football.jpeg",
    borderRadius = 5,
    opacity = 1,
}) {

    let {width, height} = Dimensions.get("window");
    //const image = require("../../assets/Event_Images/football.jpeg");
    return (
        
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: 'white',
                opacity: 1,
                borderWidth: 5,
                borderColor: 'grey',
                borderRadius: 10,
                height: height * 0.1,
                width: width * 0.9,
                borderWidth: borderRadius,
                alignItems: "left",
                padding: 10,
                marginBottom: 7,
            },
            ]} >
            <Text style={{color: "black", fontWeight: "bold"}} >{name}</Text>
            <Text style={{color: "black"}} >{text}</Text>
        </Pressable>
    );
}