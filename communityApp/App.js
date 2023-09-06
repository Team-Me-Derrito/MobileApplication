import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Homepage from './Screens/Homepage';
import Profile from './Screens/Profile';
import Header from './Screens/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Profile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
