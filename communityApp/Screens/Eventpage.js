import { StyleSheet, Text, View, Pressable, SafeAreaView, Button, Switch } from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import BlackButton from "./Components/BlackButton";
import NiceToggle from "./Components/NiceToggle";
import Header from './Header';
import Footer from './Footer';

function test() {
    console.log('Button Pressed!');
}
export default function Eventpage(props) {
    const [isToggled, setToggled] = useState(false);
    const toggleSwitch = () => {
        setToggled(!isToggled);
    };
    let events = props.events ?? "No events"
    return (
        <View style={styles.showContainer}>
            <View>
                <View style={styles.row}>
                    <Header text="Events" />
                </View>
                <View style={styles.row}>
                    <Text style={{color: isToggled ? "grey" : "black"}}>Upcoming Events</Text>
                        <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={isToggled ? '#f5dd4b' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isToggled}
                        />
                        <Text style={{color: isToggled ? "black" : "grey"}}>Past Events</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View>
                    <View style={styles.container}>
                        <Text>{events}</Text>
                    </View>
                    <View style={styles.bottom}>
                        <BlackButton onPress={() => test()} text="See Events" borderRadius={2} />
                    </View>
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
    }
});
  