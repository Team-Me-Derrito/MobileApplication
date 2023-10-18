import { StyleSheet, Text, View, Pressable, SafeAreaView, Button, Switch, ScrollView} from 'react-native';
import React, { useState, useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import BlackButton from "./Components/BlackButton";
import NiceToggle from "./Components/NiceToggle";
import Header from './Components/Header';
import Footer from './Components/Footer';
import { getEvent, setAttendence, getAttendence } from '../API/Events';
import * as Notifications from 'expo-notifications';

async function registerForPushNotifications() {
  const { granted } = await Notifications.requestPermissionsAsync();
  if (!granted) {
    console.log('Notification permission not granted');
    return;
  }
  return granted;
}

async function scheduleNotification(trigger, eventName, description) {
  await registerForPushNotifications();
  await Notifications.scheduleNotificationAsync({
    content: {
      title: eventName,
      body: description,
    },
    trigger: trigger,
  });
}

async function reminderNotification(eventName, description, eventDate) {
  const instantTrigger = new Date().getTime() + 60 * 1000; // Schedules a notification for 20 seconds time
  const dayBeforeTrigger = new Date(eventDate).getTime() - 24 * 60 * 60 * 1000; // Schedules a notification for days before start of event
  await scheduleNotification(instantTrigger, eventName, "You have Joined successfully. " + description);
  await scheduleNotification(dayBeforeTrigger, eventName, "This starts tomorrow " + description);  
  console.log("Notifications saved for a minute from now");
}
function handleJoin(navigation, ticketed, setTicketed, eventID, eventName, description, eventDate) {
  const state = ticketed; //Possible race condition with setting then sending
  if (! state) {
    reminderNotification(eventName, description, eventDate, eventName);
  }
  setAttendence("token", "1", ! state, eventID);
  setTicketed(! ticketed);
}

export default function Eventpage({ navigation, route }) {
  const id = route.params;
  const [event, setEvent] = useState("");
  const [ticketed, setTicketed] = useState(false);
  useEffect(() => {
    async function getData() {
      const result = await getEvent("token", "1", id);
      console.log("event data is ", result);
      setEvent(result);
      const attendance = await getAttendence("token", "1", id);
      console.log("result is ", attendance);
      setTicketed(attendance.attendance);
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
              <BlackButton onPress={() => handleJoin(navigation, ticketed, setTicketed, id, event.eventName, event.description, event.dateAndTime)} text={ticketed ? "Already Joined" : "Join"} borderRadius={2} />
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
  