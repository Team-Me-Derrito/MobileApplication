import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button} from 'react-native';
import BlackButton from "./Components/BlackButton";
import Header from './Components/Header';
import Footer from './Components/Footer';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { SimpleLineIcons } from '@expo/vector-icons';

const EditProfileScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [likes, setLikes] = useState('');
  const [birthday, setBirthday] = useState(new Date());

  const handleEdit = () => {
    //Sign up logic to be updated
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate('Profile');
  };

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    setBirthday(date);
    hideDatePicker();
  };

  return (
    
    <View style={styles.showContainer}>
    <View>
        <View style={styles.row}>
          <Header text="Edit" />
        </View>
        
    </View>
      <View style={styles.container}>
        <View>
          <View style={styles.container}>
            <Text style={styles.title}>Edit Profile</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              onChangeText={text => setName(text)}
              value={name}
            />
            <Text>Birthday:</Text>
            <View style={styles.dateContainer}>
              <Button title={birthday.toLocaleDateString()} onPress={showDatePicker} color='black'/>
              <SimpleLineIcons name="event" size={24} color="black" onPress={showDatePicker}/>
            </View>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              textColor="#000"
            />
            <TextInput
              style={styles.inputLikes}
              placeholder="Likes"
              onChangeText={text => setLikes(text)}
              value={likes}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              onChangeText={text => setNumber(text)}
              keyboardType="numeric"
              value={number}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={text => setEmail(text)}
              value={email}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              onChangeText={text => setPassword(text)}
              value={password}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry
              onChangeText={text => setPassword(text)}
              value={password}
            />
            <BlackButton onPress={handleEdit} text="Save" borderRadius={2} />
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

export default EditProfileScreen;
