import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/main.png')} style={styles.image}>
      <Text style={styles.text}>UnWavering</Text>
      <TouchableHighlight style={styles.button}>
        <View>
          <Text>Login</Text>
        </View>
      </TouchableHighlight>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: Platform.OS === "ios" ? 100 :0,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  text: {
    color: `#EEB5B4`,
    fontSize: 64,
    textAlign: 'center'
  },
  button: {
    alignItems: "center",
    backgroundColor: "#EEB5B4",
    padding: 10,
    borderRadius: 25,
    width: "50%",
  }
});
