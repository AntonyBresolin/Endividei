import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Modal from 'react-native-modal';

const MovementsPage = ({ navigation }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [reason, setReason] = useState("");
  const [save, setSave] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleMovement = () => {
    setSave(false);
    console.log("name:", name, "type:", type, "reason:", reason);
    setIsModalVisible(true);
    
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSave(true); // Resetar o estado de save para permitir novo cadastro
    setName("");
    setType("");
    setReason("");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastre suas movimentações</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="nomeie sua movimentação"
      />

      <Text style={styles.label}>Tipo</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={type}
          style={styles.picker}
          onValueChange={(itemValue) => setType(itemValue)}
        >
          <Picker.Item
            label="Selecione o tipo de movimentação"
            value=""
          />
          <Picker.Item label="Entrada" value="entrada" />
          <Picker.Item label="Saída" value="saida" />
        </Picker>
      </View>

      <Text style={styles.label}>Motivo</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={reason}
          style={styles.picker}
          onValueChange={(itemValue) => setReason(itemValue)}
        >
          <Picker.Item
            label="Selecione o motivo da movimentação"
            value=""
          />
          <Picker.Item label="Aluguel" value="aluguel" />
          <Picker.Item label="Água" value="agua" />
          <Picker.Item label="Luz" value="luz" />
          <Picker.Item label="Gasolina" value="gasolina" />
          <Picker.Item label="Outro" value="outro" />
        </Picker>
      </View>

      {/* Botão de salvar */}
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: save ? "#008000" : "#808080" },
        ]}
        onPress={() => {
          handleMovement();
        }}
        disabled={!save}
      >
        <Text style={styles.buttonText}>
          {save ? "Cadastrar" : "Cadastrado!"}
        </Text>
      </TouchableOpacity>

      {/* Modal de confirmação */}
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Movimentação cadastrada!</Text>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={closeModal}
          >
            <Text style={styles.modalButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 6,
    marginBottom: 16,
  },
  picker: {
    height: 50,
    width: "100%",
  },
  button: {
    height: 40,
    width: "80%",
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    marginTop: 20,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 20,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: "green",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  modalButtonText: {
    color: "white",
    fontSize: 18,
  },
});

export default MovementsPage;
