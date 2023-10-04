import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button} from 'react-native';
import BlackButton from "./Components/BlackButton";
import Header from './Components/Header';
import Footer from './Components/Footer';
import DatePicker from 'react-native-date-picker'

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [likes, setLikes] = useState('');
  const [birthday, setBirthday] = useState('');
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  const handleSignup = () => {
    //Validation step to be implemented

    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate('Login');
  };

  async function createAccount() {
    const url = BASE_URL;

    const data = {
      [COMMUNITY_ID]: null, //Replace those null values with actual variables
      [NAME]: null,
      [AGE]: null,
      [GENDER]: null,
      [PHONE_NUMBER]: null,
      [EMAIL]: email,
      [PASSWORD]: password,
      [SALT]: null
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const json = await response.json();
    return json;

  }

  const redirectLogin = () => {
    console.log('Redirect');
  }

  const verifyPassword = (text) => {
    if (text === password) {
      console.log('Password is correct');
    } else {
      console.log('Password is not correct');
    }
  }

  return (
    
    <View style={styles.showContainer}>
    <View>
        <View style={styles.row}>
        </View>
        
    </View>
      <View style={styles.container}>
        <View>
          <View style={styles.container}>
            <Text style={styles.title}>Signup</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              onChangeText={text => setName(text)}
              value={name}
            />
            <TextInput
              style={styles.input}
              placeholder="Birthday DD/MM/YYY"
              onChangeText={text => setBirthday(text)}
              value={birthday}
              mode="date"
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
            <BlackButton onPress={handleSignup} text="Save" borderRadius={2} />
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
  textContainer: {
    alignSelf: 'stretch',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'left',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'left',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 320,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
  },
  inputWithIcon: {
    flex: 1,
    padding: 10,
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

export default SignupScreen;
