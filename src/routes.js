import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from '../src/pages/SigIn';
import SignUp from '../src/pages/SignUp';
import Dashboard from '../src/pages/Dashboard';

export default (isSigned = false) => createAppContainer(
	createSwitchNavigator({
		Sign: createSwitchNavigator({
			SignIn,
			SignUp
		}),
		App: createBottomTabNavigator({
			Dashboard,
		}),
	}, {
		initialRouteName: isSigned ? 'App' : 'Sign'
	})
);