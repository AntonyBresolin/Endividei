import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import welcomeImage from "../../../assets/welcome.png";

const { width, height } = Dimensions.get("window");

const WelcomePage = ({ navigation }) => {
  const handleStart = () => {
    navigation.navigate("login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={welcomeImage} style={styles.image} />
      <View>
        <Text style={styles.title}>ENDIVIDEI!</Text>
        <Text style={styles.text}>
          Gerencie suas contas de casa diretamente do seu celular
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleStart}>
        <Text style={styles.buttonText}>Começar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width,
    height: height,
    backgroundColor: "#151417",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 70,
  },

  title: {
    color: "#407BFF",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 5,
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#407BFF",
    borderRadius: 10,
    width: 370,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 120,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default WelcomePage;
