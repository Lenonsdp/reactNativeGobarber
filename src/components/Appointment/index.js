import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Left, Avatar, Info, Time, Name } from './styles';

export default function Appointment({ data, onCancel }) {
	const dataParsed = useMemo(() => {
		return formatRelative(parseISO(data.data), new Date(), {
			locale: pt,
			addSuffix: true
		});
	},[data.data]);

	return <Container past={data.past}>
		<Left>
			<Avatar source={{ uri:
				data.provider.avatar ? data.provider.avatar.url :
				`https://api.adorable.io/avatar/50/${data.provider.name}.png`}} />

			<Info>
				<Name>{data.provider.name}</Name>
				<Time>{dataParsed}</Time>
			</Info>
		</Left>
		{data.cancelable && !data.canceled_at && (
			<TouchableOpacity onPress={onCancel}>
				<Icon name="event-busy" size={20} color='#f64c75'/>
			</TouchableOpacity>
		)}
	</Container>;
};