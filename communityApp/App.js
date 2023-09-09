import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Eventpage from './Screens/Eventpage';
import SignupScreen from './Screens/Signup';
import LoginScreen from './Screens/Login';


export default function App() {
  return (
    <View style={styles.container}>
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
