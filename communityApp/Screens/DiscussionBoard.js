import { StyleSheet, Text, View, Pressable, SafeAreaView, Button, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import BlackButton from "./Components/BlackButton";
import NiceToggle from "./Components/NiceToggle";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Comment from './Components/BoardComment'

export default function DiscussionBoard() {
    const [message, setMessage] = useState('');

    const handleMessage = () => {
        //Sign up logic to be updated
        console.log('Message:', message);
        setMessage('')
    };
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
                    <Comment text="I Hate this community" name="John Davidson"/>
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
                <BlackButton onPress={handleMessage} text="Send" borderRadius={2} width={80}/>
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
    },
    bottom: {
        flex: 1, // Ensure it takes up the remaining space
        justifyContent: 'flex-end', // Push content to the bottom
    },

    row: {
        flexDirection: 'row',
        justifyContent:'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    showContainer: {
        flex: 1
    },
    input: {
        width: 300,
        height: 50,
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 20,
    },
});
  