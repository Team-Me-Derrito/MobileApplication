import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button} from 'react-native';
import BlackButton from "./Components/BlackButton";
import Header from './Components/Header';
import Footer from './Components/Footer';
import DatePicker from 'react-native-date-picker'

const EventCreationScreen = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [description, setDesc] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [tags, setTags] = useState('');

  const handleEventCreation = () => {
    //Sign up logic to be updated
    console.log('title:', title);
    navigation.navigate('Homepage');
  };

  return (
    
    <View style={styles.showContainer}>
    <View>
        <View style={styles.row}>
          <Header text="Events" />
        </View>
        
    </View>
      <View style={styles.container}>
        <View>
          <View style={styles.container}>
            <Text style={styles.title}>Event</Text>
            <TextInput
              style={styles.input}
              placeholder="Title"
              onChangeText={text => setTitle(text)}
              value={title}
            />
            <TextInput
              style={styles.inputLikes}
              placeholder="Description"
              onChangeText={text => setDesc(text)}
              value={description}
            />
            <TextInput
              style={styles.input}
              placeholder="Date DD/MM/YYYY"
              onChangeText={text => setDate(text)}
              value={date}
            />
            <TextInput
              style={styles.input}
              placeholder="Time"
              onChangeText={text => setTime(text)}
              value={time}
            />
            <TextInput
              style={styles.input}
              placeholder="Tags"
              onChangeText={text => setTags(text)}
              value={tags}
            />
            <BlackButton onPress={handleEventCreation} text="Create" borderRadius={2} />
        </View>
      </View>
    </View>
    <View style={styles.row}>
      <Footer />
    </View>
</View>
  );
};

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
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    width: 300,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  inputLikes: {
    width: 300,
    height: 100,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
  },
});

export default EventCreationScreen;
