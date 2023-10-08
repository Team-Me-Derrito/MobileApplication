import { StyleSheet, Text, View, Pressable, SafeAreaView, Button, Switch } from 'react-native';
import React, { useState, useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import BlackButton from "./Components/BlackButton";
import NiceToggle from "./Components/NiceToggle";
import Header from './Components/Header';
import Footer from './Components/Footer';
import EventBox from './Components/EventBox';
import { getAllEvents } from '../API/Events';

export default function Homepage({ navigation }) {
    const [events, setEvents] = useState([]);
    console.log("Opening hoepage");
    useEffect(() => {
        async function getData() {
            debugger;
            const json = await getAllEvents(1,1);
            debugger;

        }
        
        if (! events.length) {
            debugger;
            getData();
        }
    });

    return (
        <View style={styles.showContainer}>
            <View>
                <View style={styles.row}>
                    <Header text="Events" />
                </View>
                
            </View>
            <View style={styles.container}>
                <View>
                    {events.forEach(element => {
                        <Text>{element}</Text>
                    })};
                    <EventBox />
                    <Text>You're content goes in here</Text>
                </View>
            </View>
            <View style={styles.row}>
                    <Footer />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'gold',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bottom: {
        backgroundColor: 'silver',
        flex: 1, // Ensure it takes up the remaining space
        justifyContent: 'flex-end', // Push content to the bottom
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
  