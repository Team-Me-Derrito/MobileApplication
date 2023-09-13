import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Homepage from './Screens/Homepage';
import Profile from './Screens/Profile';
import Header from './Screens/Header';
import Eventpage from './Screens/Eventpage';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Eventpage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    
  },
});
