import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Homepage from './Screens/Homepage';
import Header from './Screens/Header';
import LoginScreen from './Screens/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <LoginScreen />
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
