import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '../../components/background';
import { Container, Title, Separator, Form, FormInput, SubmitButton } from './styles';
import { updateProfileRequest } from '../../store/modules/user/actions'
export default function Profile(){
	const dispatch = useDispatch();
	const profile = useSelector(state => state.user.profile)
	const [name, setName] = useState(profile.name);
	const [email, setEmail] = useState(profile.email);
	const [oldPassword, setOldPassword] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	function handleSubmit() {
		dispatch(updateProfileRequest({
			name,
			email,
			oldPassword,
			password,
			confirmPassword
		}))
	}

	useEffect(() => {
		setOldPassword('');
		setPassword('');
		setConfirmPassword('');
	}, [profile])
  return (
	<Background>
		<Container>
			<Title>Meu perfil</Title>

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
				
				<Separator />

				<FormInput 
					icon="lock-outline"
					secureTextEntry
					placeholder="Digite sua senha atual"
					value={oldPassword}
					onChangeText={setOldPassword}
				/>

				<FormInput 
					icon="lock-outline"
					secureTextEntry
					placeholder="Digite sua nova senha"
					value={password}
					onChangeText={setPassword}
				/>

				<FormInput 
					icon="lock-outline"
					secureTextEntry
					placeholder="Confirme sua senha"
					value={confirmPassword}
					onChangeText={setConfirmPassword}
				/>

				<SubmitButton onPress={handleSubmit}>Atualizar perfil</SubmitButton>
			</Form>
		</Container>
	</Background>
  );
}

Profile.navigationOptions = {
	tabBarLabel: 'Meu perfil',
	tabBarIcon: ({ tintColor }) => <Icon name="person" size={20} color={tintColor} />
}


