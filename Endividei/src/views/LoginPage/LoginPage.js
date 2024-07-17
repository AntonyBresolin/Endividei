import React, { useRef } from 'react';
import { StatusBar, Text, TextInput, TouchableOpacity, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

const LoginPage = ({ navigation }) => {
  const usernameRef = useRef('');
  const passwordRef = useRef('');

  const handleLogin = () => {
    const username = usernameRef.current;
    const password = passwordRef.current;

    console.log('username:', username, 'and password:', password);
    navigation.navigate('movements');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1, backgroundColor: '#151417' }} 
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#151417' }} 
        keyboardShouldPersistTaps="handled"
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16, width: '100%' }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 24, color: '#fff' }}>Faça seu login</Text>

          <TextInput
            style={{ width: '100%', height: 48, borderColor: '#888', borderWidth: 1, borderRadius: 4, paddingHorizontal: 16, marginBottom: 16, backgroundColor: '#333', color: '#fff' }}
            placeholder="Nome de usuário"
            placeholderTextColor="#888"
            onChangeText={(text) => usernameRef.current = text}
          />

          <TextInput
            style={{ width: '100%', height: 48, borderColor: '#888', borderWidth: 1, borderRadius: 4, paddingHorizontal: 16, marginBottom: 16, backgroundColor: '#333', color: '#fff' }}
            placeholder="Senha"
            placeholderTextColor="#888"
            secureTextEntry
            onChangeText={(text) => passwordRef.current = text}
          />

          <TouchableOpacity style={{ width: '100%', height: 48, backgroundColor: '#407BFF', borderRadius: 4, justifyContent: 'center', alignItems: 'center', marginTop: 16 }} onPress={handleLogin}>
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Entrar</Text>
          </TouchableOpacity>

          <Text style={{ color: '#407BFF', marginTop: 16 }}>Esqueceu sua senha ? </Text>
          <Text style={{ color: '#407BFF', marginTop: 8 }} onPress={() => navigation.navigate('register')}>Não tenho uma conta</Text>
          <Text style={{ color: '#888', marginTop: 24 }}>Ou faça Login com</Text>

          <TouchableOpacity style={{ width: '100%', height: 48, backgroundColor: '#4267B2', borderRadius: 4, justifyContent: 'center', alignItems: 'center', marginTop: 8 }}>
            <Text style={{ color: '#fff', fontSize: 18 }}>Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ width: '100%', height: 48, backgroundColor: '#DB4437', borderRadius: 4, justifyContent: 'center', alignItems: 'center', marginTop: 8 }}>
            <Text style={{ color: '#fff', fontSize: 18 }}>Google</Text>
          </TouchableOpacity>

          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginPage;
