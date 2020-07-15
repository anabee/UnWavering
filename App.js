import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/main.png')} style={styles.image}>
      <Text style={styles.text}>UnWavering</Text>
      <Button 
      title="Login"
      color="#EEB5B4"
      onPress={() => Alert.alert('Right button pressed')}
      ></Button>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: `#EEB5B4`,
    fontSize: 64,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
});
