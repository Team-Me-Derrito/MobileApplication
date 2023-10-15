import { StyleSheet, Text, View, Pressable, SafeAreaView, Button, TextInput, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import BlackButton from "./Components/BlackButton";
import NiceToggle from "./Components/NiceToggle";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Comment from './Components/BoardComment'
import { getAllEvents } from '../API/Events';

export default function DiscussionBoard() {
    const [message, setMessage] = useState('');

    const handleMessage = () => {
        //Sign up logic to be updated
        console.log('Message:', message);
        setMessage('')
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

    //Code goes here
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
                        <Comment name={event.eventName} text ={event.description} />
                    ))}
                </View>
            </View>
            </ScrollView>
            <View>
                <View style={styles.row}>
                <TextInput
                    style={styles.input}
                    placeholder="Message"
                    onChangeText={text => setMessage(text)}
                    value={message}
                />
                <BlackButton onPress={handleMessage} text="Send" borderRadius={2} width={80} />
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
    },
    bottom: {
        backgroundColor: 'silver',
        flex: 1, // Ensure it takes up the remaining space
        justifyContent: 'flex-end', // Push content to the bottom
    },

    row: {
        flexDirection: 'row',
        justifyContent:'center',
        backgroundColor: "red",
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 7
    },
    showContainer: {
        backgroundColor: "blue",
        flex: 1
    },
    input: {
        width: 300,
        height: 50,
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 20,
        backgroundColor: 'white',
    },
});
  