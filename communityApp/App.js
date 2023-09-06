import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Eventpage from './Screens/Eventpage';


export default function App() {
  return (
    <SafeAreaView style={styles.showContainer}> 
      <Eventpage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  showContainer: {
    backgroundColor: 'yellow',
    flex: 1,
  }
});
