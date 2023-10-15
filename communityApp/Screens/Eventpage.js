import { StyleSheet, Text, View, Pressable, SafeAreaView, Button, Switch, ScrollView} from 'react-native';
import React, { useState, useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import BlackButton from "./Components/BlackButton";
import NiceToggle from "./Components/NiceToggle";
import Header from './Components/Header';
import Footer from './Components/Footer';
import { getEvent } from '../API/Events';

function test() {
    console.log('Button Pressed!');
}
export default function Eventpage({ navigation, route }) {

  const id = route.params;

  function handleJoin() {
    navigation.navigate('Homepage');
  }
const [event, setEvent] = useState("");
  useEffect(() => {
    async function getData() {
      const result = await getEvent("token","account_id",id);
      setEvent(result);
    }
    if (! event) {
      getData();
    }
      
  }, []);
  return (
    <View style={styles.showContainer}>
      <View>
        <View style={styles.row}>
          <Header text={event.eventName} />
        </View>   
      </View>

      <View style={styles.container}>
        <View>
          <SafeAreaView style={styles.container}>
          <ScrollView contentContainerStyle={styles.profileContainer}>
            <Text style={styles.bio}>Description:</Text>
            <Text style={styles.detail}>{event.description}</Text>
            <Text style={styles.bio}>Location:</Text>
            <Text style={styles.detail}>{event.venue}</Text>
            <View style={styles.buttonContainer}>
                <BlackButton onPress={() => handleJoin()} text="Join" borderRadius={2} />
            </View>
          </ScrollView>
          </SafeAreaView>
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
    },
    profileContainer: {
      alignItems: 'center',
      paddingVertical: 20,
      width: '100%',
      flex: 1,
    },
    profileImage: {
      width: 150,
      height: 150,
      borderRadius: 75,
      marginBottom: 20,
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    bio: {
      fontSize: 18,
      marginBottom: 10,
      fontWeight: "bold", 
      fontSize: 24
    },
    detail: {
      fontSize: 16,
      marginBottom: 8,
      fontSize: 20
    },
    buttonContainer: {
      flexDirection: 'row',
      marginTop: 20,
    },
  });
  