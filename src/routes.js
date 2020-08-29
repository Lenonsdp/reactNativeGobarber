import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from '../src/pages/SigIn';
import SignUp from '../src/pages/SignUp';
import Dashboard from '../src/pages/Dashboard';
import Profile from '../src/pages/Profile';

export default (isSigned = false) => createAppContainer(
	createSwitchNavigator({
		Sign: createSwitchNavigator({
			SignIn,
			SignUp
		}),
		App: createBottomTabNavigator({
			Dashboard,
			Profile
		}, {
			tabBarOptions: {
				keyboardHidesTabBar: true,
				activeTintColor: '#fff',
				inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
				style: {
					backgroundColor: '#8d41a8'
				}
			}
		}),
	}, {
		initialRouteName: isSigned ? 'App' : 'Sign'
	})
);