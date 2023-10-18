import { StyleSheet, Text, View, Pressable, ScrollView, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import BlackButton from "./Components/BlackButton";
import Header from './Components/Header';
import Footer from './Components/Footer';
import EventBox from './Components/EventBox';
import { Rating } from 'react-native-ratings';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAccount } from '../API/Account';
import React, { useState, useEffect } from 'react';

function test() {
    console.log('test');
}

export default function Profile({ navigation }) {
  const [account, setAccount] = useState([]);
  useEffect(() => {
      async function getData() {
          const result = await getAccount();
          setAccount(result);
      }
      if (! account.length) {
          getData();
      }
        
  }, []);

  console.log('account', account);

  const name = account.name;
  const score = parseInt(account.score);
  const number = account.phoneNumber;
  const email = account.email;
  const birthday = account.birthday;
  const location = account.community;

  async function handleLogout() {
    try {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('account_id');
    } catch (error) {
      console.error('Error removing user token:', error);
    }
    navigation.navigate('Login');
  }

  return (
    <View style={styles.showContainer}>
      <View>
        <View style={styles.row}>
          <Header text="Profile" />
        </View>   
      </View>

      <View style={styles.container}>
        <View>
          <SafeAreaView style={styles.container}>
          <ScrollView contentContainerStyle={styles.profileContainer}>
            <Image
              source={{ uri: 'image.jpg' }}
              style={styles.profileImage}
            />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.bio}>{number}</Text>
            <Text style={styles.bio}>{email}</Text>
            <Text style={styles.detail}>Score: {score}</Text>
            <Text style={styles.detail}>Birthday: {birthday}</Text>
            <Text style={styles.detail}>Location: {location}</Text>
            <View style={styles.buttonContainer}>
              <BlackButton onPress={() => navigation.navigate('EditProfile')} text="Edit Profile" borderRadius={2} />
              <BlackButton onPress={() => handleLogout()} text="Logout" borderRadius={2} />
            </View>
            <View style={styles.buttonContainer}>
              <BlackButton onPress={() => navigation.navigate('Game')} text="Game Tree" borderRadius={2} />
            </View>
          </ScrollView>
          </SafeAreaView>
        </View>
      </View>
      <View style={styles.row}>
        <Footer />
      </View>
    </View>
  );
}
  
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
  profileContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    width: '100%',
    flex: 1,
  },
  profileImage: {
    width: 150,
    height: 100,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 18,
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
});
