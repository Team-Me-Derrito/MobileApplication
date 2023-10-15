import { StyleSheet, Text, View, Pressable, Dimensions, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';



export default function EventBox({
    onPress,
    title,
    text,
    location,
    imagePath="../../assets/Event_images/football.jpeg",
    borderRadius = 5,
    opacity = 1,
}) {

    let {width, height} = Dimensions.get("window");
    //const image = require("../../assets/Event_Images/football.jpeg");
    return (
        
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? 'maroon' : 'white',
                opacity: pressed ? 1 : opacity,
                borderWidth: 5,
                borderColor: pressed ? 'maroon' : "red",
                borderRadius: 10,
                height: height * 0.2,
                width: width * 0.8,
                borderWidth: borderRadius,
                alignItems: "left",
                padding: 7,
                marginBottom: 5,
            },
            ]} onPress={onPress} >
            <Text numberOfLines={1} style={{color: "black", fontWeight: "bold", fontSize: 24}} >{title}</Text>
            <Text style={{color: "black", fontWeight: "bold", fontSize: 14}} >Description:</Text>
            <Text numberOfLines={3} style={{color: "black"}} >{text}</Text>
            <Text style={{color: "black", fontWeight: "bold", fontSize: 14}} >Location:</Text>
            <Text numberOfLines={3} style={{color: "black"}} >{location}</Text>
        </Pressable>
    );
}