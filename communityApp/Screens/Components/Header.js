import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Header({ text }) {
    console.log("showing header");
    const navigation = useNavigation();
    return (
        <View style={styles.headerContainer}>
            <View style={styles.leftIcon}>
                <Ionicons 
                    name="arrow-back" size={32} color="black" 
                    onPress={() => navigation.goBack()}
                />
            </View>
            <View style={styles.rightIcon}>
                <SimpleLineIcons name="options-vertical" size={24} color="black" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'yellow',
        paddingHorizontal: 10,
        paddingTop: 10,
        zIndex: 100,
    },
    leftIcon: {
        flexDirection: 'row', // Arrange icon and text in a row
        alignItems: 'center', // Vertically align icon and text
    },
    rightIcon: {
        position: 'absolute',
        right: 10, // Adjust this value to position the icon as desired
    },
    headerText: {
        fontSize: 16,
        marginLeft: 5, // Add some space between the icon and text
    },
});
