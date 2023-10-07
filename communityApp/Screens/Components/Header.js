import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 

export default function Header({ text }) {
    console.log("showing header");
    const navigation = useNavigation();
    return (
        <View style={styles.headerContainer}>
            <View style={styles.leftChildContainer}>
                <Ionicons 
                    name="arrow-back" size={32} color="black" 
                    onPress={() => navigation.goBack()}
                />
            </View>
            <View style={styles.middleChildContainer}>
                <Text style={styles.headerText}>{text}</Text>
            </View>
            <View style={styles.rightChildContainer}>
                <AntDesign name="plus" size={24} color="black" 
                    onPress={() => navigation.navigate("EventCreation")}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row', // Arrange children horizontally
        justifyContent: 'space-between', // Distribute space evenly between children
        paddingHorizontal: 16, // Optional: Add horizontal padding
        alignItems: 'center', // Align children vertically in the center
        height: 50, // Set a fixed height for the row container
        flex: 1,
    },
    headerText: {
        fontSize: 24,
    },
    leftChildContainer: {
        width: '30%', // Adjust as needed for your desired spacing
        height: '100%', // Optional: Make child containers the same height
    },
    middleChildContainer: {
        width: '30%', // Adjust as needed for your desired spacing
        height: '100%', // Optional: Make child containers the same height
        alignItems: 'center',
    },
    rightChildContainer: {
        width: '30%', // Adjust as needed for your desired spacing
        height: '60%', // Optional: Make child containers the same height
        alignItems: 'right',
        justifyContent: 'flex-end', 
        flexDirection: 'row',
    },
});