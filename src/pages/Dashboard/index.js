import React, { useEffect, useState } from 'react';
import api from '../../services/api'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '../../components/background';
import Appointment from '../../components/Appointment';
import { Container, Title, List } from './styles';

const Dashboard = () => {
	const [appointments, setAppoitments] = useState([]);
	useEffect(() => {
		async function loadAppointments() {
			const response = await api.get('appointments');
			setAppoitments(response.data);
		}
		loadAppointments();
	}, []);

	async function handleCancel(id) {
		const response = await api.delete(`appointments/${id}`);
		
		setAppoitments(
			appointments.map(appointment =>
				appointment.id == id 
					?	{
							...appointment,
							canceled_at: response.data.canceled_at
						}
					:	appointment
				)
		)
	}
	return (
		<Background>
			<Container>
				<Title>Agendamentos</Title>
				<List
					data={appointments}
					keyExtractor={item => String(item.id)}
					renderItem={({ item }) => <Appointment onCancel={() => handleCancel(item.id)} data={item} />}
				/>
			</Container>
		</Background>
	)
}
Dashboard.navigationOptions = {
	tabBarLabel: 'Agendamentos',
	tabBarIcon: ({ tintColor }) => <Icon name="event" size={20} color={tintColor} />
}
export default Dashboard;