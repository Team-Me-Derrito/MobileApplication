import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import BlackButton from "./Components/BlackButton";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { attemptLogin } from '../API/Account'; 

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function checkLogin (){
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      if (userToken != null) {
        navigation.navigate('Homepage');
      }
    } catch (error) {
      console.error('Error checking user token:', error);
    }
  }

  //checkLogin();
  // johndoe@gmail.com
  // pass

  async function handleLogin (){
    console.log('Email:', email);
    console.log('Password:', password);

    if(email && password){
      try{
        await AsyncStorage.setItem('userToken', email);
      } catch {
        console.error('Error Saving Token');
      }

      const response = await attemptLogin(email, password);
      console.log(`Response: ${JSON.stringify(response)}`);
      
      navigation.navigate('Homepage');
    } else {
      console.error("Wrong Email or Password");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
      <BlackButton onPress={handleLogin} text="Login" borderRadius={2} />
      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.hyperlinkText}>Signup</Text>
        </TouchableOpacity>
      </View>      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  bottomTextContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
  },
  bottomText: {
    fontSize: 12,
    color: 'gray',
    marginHorizontal: 10,
  },
  hyperlinkText: {
    fontSize: 12,
    color: 'blue',
  },
});

export default LoginScreen;
