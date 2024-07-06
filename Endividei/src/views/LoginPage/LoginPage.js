import React, { useRef } from 'react';
import { StatusBar, Text, TextInput, TouchableOpacity, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

const LoginPage = ({ navigation }) => {
  const usernameRef = useRef('');
  const passwordRef = useRef('');

  const handleLogin = () => {
    const username = usernameRef.current;
    const password = passwordRef.current;

    console.log('username:', username, 'and password:', password);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-1 justify-center items-center bg-white p-4 w-full">
          <Text className="text-2xl font-bold mb-6 text-gray-800">Bem vindo</Text>

          <TextInput
            className="w-full h-12 border border-gray-400 rounded px-4 mb-4 bg-gray-100"
            placeholder="Nome de usuário"
            placeholderTextColor="#888"
            onChangeText={(text) => usernameRef.current = text}
          />

          <TextInput
            className="w-full h-12 border border-gray-400 rounded px-4 mb-4 bg-gray-100"
            placeholder="Senha"
            placeholderTextColor="#888"
            secureTextEntry
            onChangeText={(text) => passwordRef.current = text}
          />

          <TouchableOpacity className="w-full h-12 bg-blue-500 rounded justify-center items-center mt-4" onPress={handleLogin}>
            <Text className="text-white text-lg font-semibold">Login</Text>
          </TouchableOpacity>

          <Text className="text-blue-500 mt-4">Esqueceu a senha?</Text>
          <Text className="text-blue-500 mt-2"
            onPress={() => navigation.navigate('register')}
          >Criar uma conta</Text>
          <Text className="text-gray-500 mt-6">Ou faça Login com</Text>

          <TouchableOpacity className="w-full h-12 bg-blue-700 rounded justify-center items-center mt-2">
            <Text className="text-white text-lg">Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity className="w-full h-12 bg-red-500 rounded justify-center items-center mt-2">
            <Text className="text-white text-lg">Google</Text>
          </TouchableOpacity>

          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginPage;
