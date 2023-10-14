import { StyleSheet, Text, View, Pressable, SafeAreaView, Button, Switch, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import BlackButton from "./Components/BlackButton";
import NiceToggle from "./Components/NiceToggle";
import Header from './Components/Header';
import Footer from './Components/Footer';
import EventBox from './Components/EventBox';

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

    const title = 'Soccer';
    const text = 'Come Play Some Games in the Park';
    const location = 'Kenmore Park';
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
                    <EventBox title={title} text ={text} location = {location} onPress={() => handlePress(title, text, location)}/>
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
  