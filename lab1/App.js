import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView  style={styles.container}>
        <Text onPress={console.warn("hello")} style={styles.text}>First Mobile App</Text>
      <ScrollView horizontal>
        <Image style={{height:400}} source={require("./assets/bmw.jpg")} />
        <Image style={{height:400}} source={require("./assets/2.jpg")} />
        <Image style={{height:400}} source={require("./assets/visa.png")} />
      </ScrollView>
      <ScrollView horizontal>
        <Image style={{height:400}} source={require("./assets/bmw.jpg")} />
        <Image style={{height:400}} source={require("./assets/2.jpg")} />
        <Image style={{height:400}} source={require("./assets/visa.png")} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50,
    backgroundColor:"aliceblue",
  },
  text:{
    fontSize:20,
    marginBottom:20,
  }
});
