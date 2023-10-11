import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet} from 'react-native';
import Homepage from './Screens/Homepage';
import Profile from './Screens/Profile';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Eventpage from './Screens/Eventpage';
import EditProfile from './Screens/EditProfile';
import EventCreation from './Screens/EventCreation';
import Game from './Screens/Game';
import DiscussionBoard from './Screens/DiscussionBoard';


const Stack = createStackNavigator();

export default function App (){
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Homepage" component={Homepage} options={{ headerShown: false }}/>
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}/>
        <Stack.Screen name="Eventpage" component={Eventpage} options={{ headerShown: false }}/>
        <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }}/>
        <Stack.Screen name="EventCreation" component={EventCreation} options={{ headerShown: false }}/>
        <Stack.Screen name="Game" component={Game} options={{ headerShown: false }}/>
        <Stack.Screen name="DiscussionBoard" component={DiscussionBoard} options={{ headerShown: false }}/>
      </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    
  },
});