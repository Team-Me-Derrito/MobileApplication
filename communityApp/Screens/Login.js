import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import BlackButton from "./Components/BlackButton";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    //Login logic to be updated
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate('Homepage');
  };

  const redirectSignup = () => {
    console.log('Redirect');
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
      <BlackButton onPress={() => navigation.navigate('Signup')} text="Sign Up" borderRadius={2} />
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
    width: 300,
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
