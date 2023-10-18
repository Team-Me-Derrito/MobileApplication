import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, useAnimatedValue } from 'react-native';
import BlackButton from "./Components/BlackButton";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { attemptLogin } from '../API/Account'; 

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function checkLogin (){
    try {
      const account = await AsyncStorage.getItem('account_id');
      if (account != null) {
        navigation.navigate('Homepage');
      }
    } catch (error) {
      console.error('Error checking user token:', error);
    }
  }

  checkLogin();
  // johndoe@gmail.com
  // pass

  async function handleLogin (){
    console.log('Email:', email);
    console.log('Password:', password);

    if(email && password){
      const response = await attemptLogin(email, password);
      console.log(`Response: ${JSON.stringify(response)}`);
      if (response.success === true) {
        try{
          await AsyncStorage.setItem('userToken', response.token);
        } catch {
          console.error('Error Saving Token');
        }
        try{
          await AsyncStorage.setItem('account_id', response.account_id.toString());
        } catch {
          console.error('Error Saving Token');
        }
        navigation.navigate('Homepage');
      }
      
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
