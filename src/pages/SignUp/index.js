import React, { useState } from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/logo.png'

import Background from '../../components/background';
import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText } from './styles';
import { signUpRequest } from '../../store/modules/auth/actions';

export default function SignIn({ navigation }) {
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const loading = useSelector(state => state.auth.loading);

	function handleSubmit() {
		dispatch(signUpRequest(name, email, password));
	}

	return(
		<Background>
			<Container>
				<Image source={logo} />

				<Form>

          <FormInput 
				icon="person-outline"
				keyboardType="email-address"
				autoCorrect={false}
				autoCapitalize="none"
				placeholder="Digite seu nome completo"
				value={name}
				onChangeText={setName}
			/>

			<FormInput 
				icon="mail-outline"
				keyboardType="email-address"
				autoCorrect={false}
				autoCapitalize="none"
				placeholder="Digite seu e-mail"
				value={email}
				onChangeText={setEmail}
			/>
			
			<FormInput 
				icon="lock-outline"
				secureTextEntry
				placeholder="Digite sua senha"
				value={password}
				onChangeText={setPassword}
			/>

			<SubmitButton loading={loading} onPress={handleSubmit} >Cadastrar</SubmitButton>
		</Form>

		<SignLink onPress={() => navigation.navigate('SignIn')}>
			<SignLinkText>Ja tenho conta</SignLinkText>
		</SignLink>
			</Container>
		</Background>
	);
}
