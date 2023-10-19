import { StyleSheet, Text, View, Pressable, SafeAreaView, Button, Switch, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import BlackButton from "./Components/BlackButton";
import NiceToggle from "./Components/NiceToggle";
import Header from './Components/Header';
import Footer from './Components/Footer';
import EventBox from './Components/EventBox';
import { getAllEvents } from '../API/Events';

/**
 * Handles button press of opening event
 * 
 * @param {string} id event_id for what event to open
 * @param {Object} navigation navigation object of react
 * @returns {navigation} Navigations to new screen once ran
 */
function handlePress(id, navigation) {
    navigation.navigate('Eventpage', id);
};

/**
 * Screen for displaying events of that community
 * 
 * @param {Object} navigation navigation object of react
 * @returns JSX element of the homepage screen
 */
export default function Homepage({ navigation, route }) {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        async function getData() {
            const result = await getAllEvents();
            setEvents(result.events);
            console.log(result.events);
        }
        if (! events.length) {
            getData();
        }
        const refreshInterval = 15 * 1000;
    
        const intervalId = setInterval(() => {
          // This will refresh in 15 seconds
          getData();
        }, refreshInterval);
        return () => {
          clearInterval(intervalId);
        };
        
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
                        <EventBox title={event.eventName} text ={event.description} location = {event.venue} onPress={() => handlePress(event.eventID, navigation)} />
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
      alignItems: 'center',
      justifyContent: 'center',
    },
    bottom: {
        flex: 1, // Ensure it takes up the remaining space
        justifyContent: 'flex-end', // Push content to the bottom
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
    },
    showContainer: {
        flex: 1
    }
});
  