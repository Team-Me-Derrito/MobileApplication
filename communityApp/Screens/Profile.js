import { StyleSheet, Text, View, Pressable, ScrollView, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import BlackButton from "./Components/BlackButton";

function test() {
    console.log('test');
}

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.profileContainer}>
        <Image
          source={{ uri: 'image.jpg' }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>John Smith</Text>
        <Text style={styles.bio}>Developer</Text>
        <Text style={styles.detail}>Birthday: January 16, 2002</Text>
        <Text style={styles.detail}>Location: Indooroopilly, Qld</Text>
        <Text style={styles.detail}>Likes: Jogging, Hiking, Sports</Text>

        <View style={styles.buttonContainer}>
          <BlackButton onPress={() => test()} text="Edit Profile" borderRadius={2} />
          <BlackButton onPress={() => test()} text="Logout" borderRadius={2} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 0,
    height: '80%',
  },
  profileContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  profileImage: {
    width: 150,
    height: 150,
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