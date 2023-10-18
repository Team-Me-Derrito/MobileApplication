import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button} from 'react-native';
import BlackButton from "./Components/BlackButton";
import Header from './Components/Header';
import Footer from './Components/Footer';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { SimpleLineIcons } from '@expo/vector-icons';
import { createEvent } from '../API/Events';
import { getInterestTypes } from '../API/Interest';
import { getVenues } from '../API/Venue';
import { SelectList, MultipleSelectList } from 'react-native-dropdown-select-list';

const EventCreationScreen = ({navigation}) => {
  const [interestTypesAvailable, setInterestTypesAvailable] = useState([]);
  const [interestTypesSelected, setInterestTypesSelected] = useState('');
  const [venuesAvailable, setVenuesAvailable] = useState([]);
  const [venueSelected, setVenueSelected] = useState('');

  function parseInterestsData(json) {
    const interestTypes = json.interests;
    return interestTypes.map(interest => ({key: interest.interest_id, value: interest.interest}));
  }

  function parseVenues(json) {
    const venues = json.venues;
    return venues.map(venue => ({key: venue.venue_id, value: venue.venue_name}));
  }

  useEffect(() => {
    const fetchData = async () => {
      const interestTypesJson = await getInterestTypes();
      const parsedInterestTypes = parseInterestsData(interestTypesJson);

      const venuesJson = await getVenues();
      const parsedVenues = parseVenues(venuesJson);

      setInterestTypesAvailable(parsedInterestTypes);
      setVenuesAvailable(parsedVenues);
    }
    fetchData();

  }, []); 

  const [title, setTitle] = useState('');
  const [description, setDesc] = useState('');
  const [date, setDate] = useState(new Date());
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.log("A date has been picked: ", date);
    setDate(date);
    hideDatePicker();
  };

  async function handleEventCreation(){
    //Sign up logic to be updated
    console.log('title:', title);
    const dateFormatted = date.toISOString().split('T')[0];
    const priceNum = parseFloat(price);
    const durNum = parseFloat(duration)
    result = await createEvent(title, description, priceNum, durNum, dateFormatted, venueSelected, interestTypesSelected);
    navigation.navigate('Homepage');
  };

  return (
    
    <View style={styles.showContainer}>
    <View>
        <View style={styles.row}>
          <Header text="Event" />
        </View>
        
    </View>
      <View style={styles.container}>
        <View>
          <View style={styles.container}>
            <Text style={styles.title}>Event Creation</Text>
            <TextInput
              style={styles.input}
              placeholder="Title"
              onChangeText={text => setTitle(text)}
              value={title}
            />
            <TextInput
              style={styles.inputLikes}
              multiline={true}
              placeholder="Description"
              onChangeText={text => setDesc(text)}
              value={description}
            />
            <TextInput
              style={styles.input}
              placeholder="Price"
              onChangeText={text => setPrice(text)}
              keyboardType="numeric"
              value={price}
            />
            <TextInput
              style={styles.input}
              placeholder="Duration"
              onChangeText={text => setDuration(text)}
              keyboardType="numeric"
              value={duration}
            />
            <Text>Date:</Text>
            <View style={styles.dateContainer}>
              <Button title={date.toLocaleDateString()} onPress={showDatePicker} color='black'/>
              <SimpleLineIcons name="event" size={24} color="black" onPress={showDatePicker}/>
            </View>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="datetime"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              textColor="#000"
            />
            <View style={{width:'90%'}}>
            <Text>Interests:</Text>
            <SelectList 
              setSelected={(val) => setInterestTypesSelected(val)} 
              data={interestTypesAvailable} 
              save="key"
              label="Your Interest" 
            />  
            </View>
            <View style={{width:'90%'}}>
            <Text>Venues:</Text>
            <SelectList 
              setSelected={(val) => setVenueSelected(val)} 
              data={venuesAvailable} 
              save="key"
              label="Your Venue" 
            />  
            </View>
            <View style={styles.button}>
            <BlackButton onPress={() => handleEventCreation()} text="Create" borderRadius={2} />
            </View>
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
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default EventCreationScreen;
