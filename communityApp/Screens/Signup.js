import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    //Sign up logic to be updated
    console.log('Email:', email);
    console.log('Password:', password);
  };

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
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Signup</Text>
        <Text style={styles.label}>Email</Text>
      </View>
      <View style={styles.inputContainer}>
        <MaterialIcons name="email" size={16} color="gray" paddingLeft={10} />
        <TextInput
            style={styles.inputWithIcon}
            placeholder="Your Email"
            onChangeText={text => setEmail(text)}
            value={email}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.label}>Password</Text>
      </View>
      <View style={styles.inputContainer}>
        <MaterialIcons name="lock" size={16} color="gray" paddingLeft={10} />
        <TextInput
            style={styles.inputWithIcon}
            placeholder="Your Password"
            secureTextEntry
            onChangeText={text => setPassword(text)}
            value={password}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.label}>Confirm Password</Text>
      </View>
      <View style={styles.inputContainer}>
        <MaterialIcons name="lock" size={16} color="gray" paddingLeft={10} />
        <TextInput
            style={styles.inputWithIcon}
            placeholder="Confirm Password"
            secureTextEntry
            onChangeText={text => verifyPassword(text)}
            value={password}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>

      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>Already singed up?</Text>
        <TouchableOpacity onPress={redirectLogin}>
          <Text style={styles.hyperlinkText}>Login</Text>
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

export default SignupScreen;
