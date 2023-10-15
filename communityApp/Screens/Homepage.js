import { StyleSheet, Text, View, Pressable, SafeAreaView, Button, Switch, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import BlackButton from "./Components/BlackButton";
import NiceToggle from "./Components/NiceToggle";
import Header from './Components/Header';
import Footer from './Components/Footer';
import EventBox from './Components/EventBox';
import { getAllEvents } from '../API/Events';

//Just takes the ID of the event and will fetch to get all information about it not sent with initial fetch
function handlePress(id, navigation) {
    //Sign up logic to be updated
    navigation.navigate('Eventpage', id);
};

export default function Homepage({ navigation }) {
    const title = 'Soccer';
    const text = 'Come Play Some Games in the Park';
    const location = 'Kenmore Park';
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
  