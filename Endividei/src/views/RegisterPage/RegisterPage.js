import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";


const RegisterPage = ({navigation}) => {
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [save, setSave] = useState(true);

  const handleRegister = () => {
    setSave(false);
    console.log('name:', name, 'login:', login, 'password:', password);
    navigation.navigate('login');
  }
  return (
    <View style={styles.container}>
      <Text style={[styles.label, styles.text]}   >
        Nome completo
      </Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} 
        value={name}
        onChangeText={setName}
        />
      </View>
      
      <Text style={[styles.label, styles.text]}>
        Login
      </Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} 
        value={login}
        onChangeText={setLogin}
        />
      </View>
      
      <Text style={[styles.label, styles.text]}>
        Senha
      </Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}
        value={password}
        onChangeText={setPassword}
        />
      </View>
      
      <TouchableOpacity
        style={[
          styles.button, 
          { backgroundColor: save ? "#008000" : "#808080" } // Verde se não salvo, cinza se salvo
        ]}
        onPress={() => {
          handleRegister();
        }}
        disabled={!save}
      >
        <Text style={styles.buttonText}>
          {save ? 'Salvar' : 'Salvo!'}
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
