import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import BlackButton from "./Components/BlackButton";
import Header from './Components/Header';
import Footer from './Components/Footer';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [likes, setLikes] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSignup = () => {
    //Sign up logic to be updated
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate('Login');
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
            <Text style={styles.title}>Signup</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              onChangeText={text => setName(text)}
              value={name}
            />
            <TextInput
              style={styles.input}
              placeholder="Birthday"
              onChangeText={text => setBirthday(text)}
              value={birthday}
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

export default SignupScreen;
