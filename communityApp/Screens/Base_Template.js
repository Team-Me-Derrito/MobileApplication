import { StyleSheet, Text, View, Pressable, SafeAreaView, Button, Switch } from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import BlackButton from "./Components/BlackButton";
import NiceToggle from "./Components/NiceToggle";
import Header from './Components/Header';
import Footer from './Components/Footer';

export default function Base_Template() {
    //Code goes here
    return (
        <View style={styles.showContainer}>
            <View>
                <View style={styles.row}>
                    <Header text="Events" />
                </View>
                
            </View>
            <View style={styles.container}>
                <View>
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
  