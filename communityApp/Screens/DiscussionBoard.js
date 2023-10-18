import { StyleSheet, Text, View, Pressable, SafeAreaView, Button, TextInput, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import BlackButton from "./Components/BlackButton";
import NiceToggle from "./Components/NiceToggle";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Comment from './Components/BoardComment'
import { getCommunityPosts } from '../API/Community';
import { createPost } from '../API/Account'

export default function DiscussionBoard() {
    const [message, setMessage] = useState('');
    const [change, setChange] = useState('');

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function getData() {
            const result = await getCommunityPosts();
            console.log("Results: ", result);
            setPosts(result.posts);
        }
        if (! posts.length) {
            getData();
        }
        
    }, [change]);

    async function handleMessage(){
        //Sign up logic to be updated
        console.log('Message:', message);
        result = await createPost(message);
        setMessage('');
        setPosts([]);
        setChange(message);
    };

    //Code goes here
    return (
        <View style={styles.showContainer}>
            <View>
                <View style={styles.row}>
                    <Header text="Discussion Board" />
                </View>
                
            </View>
            <ScrollView>
            <View style={styles.container}>
                <View>
                    {posts.map((post, index) => (
                        <Comment name={post.accountName} text={post.text} />
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
                <BlackButton onPress={() => handleMessage()} text="Send" borderRadius={2} width={80} />
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
        marginTop: 7
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
  