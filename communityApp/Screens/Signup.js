import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button} from 'react-native';
import BlackButton from "./Components/BlackButton";
import Header from './Components/Header';
import Footer from './Components/Footer';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { SimpleLineIcons } from '@expo/vector-icons';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [likes, setLikes] = useState('');
  const [birthday, setBirthday] = useState(new Date());

  const handleSignup = () => {
    if (!validateEmail(email)) {
      console.log(`Invalid email: ${email}`);
    }

    if (!validatePhone(number)) {
      console.log(`Invalid phone: ${number}`);
    }
    if (!validatePassword(password, passwordConfirm)) {
      console.log(`Passwords do not match: ${password} and ${passwordConfirm}`);
    }
    console.log('Email:', email);
    console.log('Birthday:', birthday);
    
    navigation.navigate('Login');
  };

  const validateEmail = (email) => {
    // Regular expression for email validation
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    //Checks if the phone number consists of 10 digits numbers
    return /^[1-9][0-9]{9}$/.test(phone);
  };
  
  const validatePassword = (password, passwordConfirm) => {
    return ((password.length !== 0) && (password === passwordConfirm));
  }

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
        </View>
        
    </View>
      <View style={styles.container}>
        <View>
          <View style={styles.container}>
            <Text style = {styles.title}>Signup</Text>
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
              multiline={true}
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
              maxLength={10}
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
              onChangeText={text => setPasswordConfirm(text)}
              value={passwordConfirm}
            />
            <BlackButton onPress={handleSignup} text="Create" borderRadius={2} />
        </View>

        <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>Already signed up?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.hyperlinkText}>Login</Text>
        </TouchableOpacity>
      </View>      
      </View>
    </View>
    <View style={styles.row}>
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
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomTextContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomText: {
    fontSize: 12,
    color: 'gray',
    marginHorizontal: 40,
  },
  hyperlinkText: {
    fontSize: 12,
    color: 'blue',
  },

});

export default SignupScreen;
