import { StyleSheet, Text, View, Pressable, Dimensions, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';



export default function EventBox({
    onPress,
    text,
    imagePath=require("../../assets/Event_images/football.jpeg"),
    borderRadius = 5,
    opacity = 1,
}) {

    let {width, height} = Dimensions.get("window");
    const image = require("../../assets/Event_Images/football.jpeg");
    return (
        
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? 'maroon' : 'red',
                opacity: pressed ? 1 : opacity,
                borderWidth: 5,
                borderColor: pressed ? 'maroon' : "red",
                borderRadius: 10,
                height: height * 0.2,
                width: width * 0.8,
                borderWidth: borderRadius,
                justifyContent: "center",
                alignItems: "center",
            },
            ]} >
            
            <Text style={{color: "black", fontWeight: "bold"}} >{text}</Text>
            <Image src={image} />
        </Pressable>
    );
}