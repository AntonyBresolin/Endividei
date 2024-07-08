import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";


const RegisterPage = ({navigate}) => {
  const [naoSalvo, salvar] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={[styles.label, styles.text]}>
        Nome completo
      </Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
      </View>
      
      <Text style={[styles.label, styles.text]}>
        Login
      </Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
      </View>
      
      <Text style={[styles.label, styles.text]}>
        Senha
      </Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
      </View>
      
      <TouchableOpacity
        style={[
          styles.button, 
          { backgroundColor: naoSalvo ? "#008000" : "#808080" } // Verde se não salvo, cinza se salvo
        ]}
        onPress={() => {
          salvar(false);
        }}
        disabled={!naoSalvo}
      >
        <Text style={styles.buttonText}>
          {naoSalvo ? 'Salvar' : 'Salvo!'}
        </Text>
      </TouchableOpacity>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  label: {
    marginTop: 20,
    marginLeft: 10,
  },
  text:{
    fontSize: 17,
  },
  inputContainer: {
    alignItems: 'center', 
    marginTop: 10,
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: '95%',
    borderColor: 'gray',
    borderRadius: 3,
    paddingHorizontal: 10,
    backgroundColor: 'white', 
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    height: 40,
    width: '80%',
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginTop: 20,
    alignSelf: 'center', 
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default RegisterPage;
