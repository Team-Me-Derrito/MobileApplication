import { StyleSheet, Text, View, Pressable, SafeAreaView, Button, Switch, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import BlackButton from "./Components/BlackButton";
import NiceToggle from "./Components/NiceToggle";
import Header from './Components/Header';
import Footer from './Components/Footer';
import EventBox from './Components/EventBox';
import { getAllEvents } from '../API/Events';

export default function Homepage({ navigation }) {
    
    function handlePress(header, text, location) {
        //Sign up logic to be updated
        console.log('Title:', header);
        params = {
            title: header,
            text: text,
            location: location,
        };
        navigation.navigate('Eventpage', params);
    };

    const [events, setEvents] = useState([]);
    useEffect(() => {
        async function getData() {
            const result = await getAllEvents();
            setEvents(result.events);
        }
        if (! events.length) {
            getData();
        }
        
    }, []);
    return (
        <View style={styles.showContainer}>
            <View>
                <View style={styles.row}>
                    <Header text="Events" />
                </View>
                
            </View>
            <ScrollView>
            <View style={styles.container}>
                <View>
                    {events.map((event, index) => (
                        <EventBox title={event.eventName} text ={event.description} location = {event.venue} onPress={() => handlePress(event.eventName, event.description, event.venue)} />
                    ))}
                </View>
            </View>
            </ScrollView>
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
  