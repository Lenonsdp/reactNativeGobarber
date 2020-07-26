import React from 'react';
import { Image } from 'react-native';

import logo from '../../assets/logo.png'
import Button from '../../components/Button';
import Input from '../../components/Input';
import Background from '../../components/background';
import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText } from './styles';

export default function SignIn({ navigation }) {
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
					/>

					<FormInput 
						icon="mail-outline"
						keyboardType="email-address"
						autoCorrect={false}
						autoCapitalize="none"
						placeholder="Digite seu e-mail"
					/>
					
					<FormInput 
						icon="lock-outline"
						secureTextEntry
						placeholder="Digite sua senha"
					/>

					<SubmitButton onPress={() => {}} >Acessar</SubmitButton>
				</Form>

				<SignLink onPress={() => navigation.navigate('SignUp')}>
					<SignLinkText>Criar conta gratuita</SignLinkText>
				</SignLink>
			</Container>
		</Background>
	);
}
