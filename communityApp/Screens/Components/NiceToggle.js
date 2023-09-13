import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CustomToggle() {
  const [isToggled, setIsToggled] = useState(false);

  // Function to handle the toggle
  const toggleSwitch = () => {
    setIsToggled(!isToggled);
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        isToggled ? styles.containerActive : styles.containerInactive,
      ]}
      onPress={toggleSwitch}
    >
      <View
        style={[
          styles.toggleCircle,
          isToggled ? styles.toggleCircleActive : styles.toggleCircleInactive,
        ]}
      >
        <Text style={styles.toggleText}>
          {isToggled ? 'ON' : 'OFF'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 40,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  containerActive: {
    backgroundColor: 'green',
  },
  containerInactive: {
    backgroundColor: 'gray',
  },
  toggleCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Added to allow text positioning
  },
  toggleCircleActive: {
    marginLeft: 44,
  },
  toggleCircleInactive: {
    marginLeft: 4,
  },
  toggleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute', // Position text inside the circle
  },
});
