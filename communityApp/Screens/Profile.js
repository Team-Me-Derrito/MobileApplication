import { StyleSheet, Text, View, Pressable, ScrollView, Image, TouchableOpacity} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import BlackButton from "./Components/BlackButton";

function test() {
    console.log('test');
}

/*
export default function Profile() {
    return (
        <View style={styles.container}>
            <ScrollView width='100%'> 
            <BlackButton onPress={() => test()} text="Edit" borderRadius={2} />
            <BlackButton onPress={() => test()} text="Save" borderRadius={2} />
            </ScrollView>
        </View>
    );
}
*/

export default function Profile() {
    return (
        <View style={styles.container}>
          <Image
            source={{ uri: 'https://example.com/your-profile-image.jpg' }} // Replace with the URL of the user's profile image
            style={styles.profileImage}
          />
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.bio}>Frontend Developer</Text>
          <Text style={styles.detail}>Birthday: January 15, 1990</Text>
          <Text style={styles.detail}>Location: New York, USA</Text>
          <Text style={styles.detail}>Likes: React Native, JavaScript, Hiking</Text>
    
          {/* Action buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => console.log('Edit Profile')}>
              <Text>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => console.log('Logout')}>
              <Text>Logout</Text>
            </TouchableOpacity>
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
    profileImage: {
      width: 150,
      height: 150,
      borderRadius: 75, // To make it a circular image
      marginBottom: 20,
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    bio: {
      fontSize: 18,
      marginBottom: 10,
    },
    detail: {
      fontSize: 16,
      marginBottom: 10,
    },
    buttonContainer: {
      flexDirection: 'row', // Horizontal layout for buttons
    },
    button: {
      backgroundColor: '#007AFF',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginHorizontal: 10, // Spacing between buttons
    },
  });

  /*
const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '85%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
    },
    row: {
      flexDirection: "row",
    },
    buttonText: {
      fontSize: 25,
      color: 'white',
      fontWeight: 'bold',
      justifyContent: 'center',
      alignItems: 'center',
      
    },
  });
  */