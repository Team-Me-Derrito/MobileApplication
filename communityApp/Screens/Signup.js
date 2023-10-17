import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity, StyleSheet, Button} from 'react-native';
import BlackButton from "./Components/BlackButton";
import Header from './Components/Header';
import Footer from './Components/Footer';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { SimpleLineIcons } from '@expo/vector-icons';
import { createAccount } from '../API/Account';
import { getInterestTypes } from '../API/Interest';
import { getCommunities } from '../API/Community';
import { SelectList, MultipleSelectList } from 'react-native-dropdown-select-list';
import { validateEmail, validatePhone, validatePassword } from '../Utilities/AccountUtils';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [birthday, setBirthday] = useState(new Date());
  const [communitySelected, setCommunitySelected] = useState(null);
  const [interestTypesSelected, setInterestTypesSelected] = useState([]);

  // Some states that will be updated when the page is loaded.
  const [communityAvailable, setCommunityAvailable] = useState([]);
  const [interestTypesAvailable, setInterestTypesAvailable] = useState([]);

  useEffect(() => {
    const data1 = [
      {key:1, value:'Mobiles'},
      {key:2, value:'Appliances'},
      {key:3, value:'Cameras'},
      {key:4, value:'Computers'},
      {key:5, value:'Vegetables'},
      {key:6, value:'Diary Products'},
      {key:7, value:'Drinks'},
  ]

    const data2 = [
      {key:'1', value:'Mobiles'},
      {key:'2', value:'Appliances'},
      {key:'3', value:'Cameras'},
      {key:'4', value:'Computers'},
      {key:'5', value:'Vegetables'},
      {key:'6', value:'Diary Products'},
      {key:'7', value:'Drinks'},
    ]
    setCommunityAvailable(data1);
    setInterestTypesAvailable(data2);
  }, []); 

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
    
    //createAccount();
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
        </View>    
    </View>
    
    <View style={styles.container}>
      <View stye={styles.topContainer}>
        <Text style={styles.title}>Signup</Text>
        <View style={styles.separator}/>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

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
        
        <View style={{width:'100%'}}>
          <Text>Community:</Text>
          <SelectList 
            setSelected={(val) => setCommunitySelected(val)} 
            data={communityAvailable} 
            save="key"
          />
        </View>

        <View style={{width:'100%'}}>
          <Text>Interests:</Text>
          <MultipleSelectList 
            setSelected={(val) => setInterestTypesSelected(val)} 
            data={interestTypesAvailable} 
            save="value"
            label="Your Interest" 
          />  
        </View>

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

      </ScrollView>

      <View style={styles.bottomContainer}>
        <View style={styles.buttonContainer}>
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

  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    marginTop: 20,
  },
  separator: {
    height: 1,
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
  bottomContainer: {
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    marginBottom: 40,
  },
  bottomTextContainer: {
    flexDirection: 'row',
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
