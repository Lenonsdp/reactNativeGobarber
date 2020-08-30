import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';
import SignIn from '../src/pages/SigIn';
import SignUp from '../src/pages/SignUp';
import SelectProvider from '../src/pages/New/SelectProvider';
import SelectDateTime from '../src/pages/New/SelectDateTime';
import Confirm from '../src/pages/New/Confirm';

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
			New: {
				screen: createStackNavigator({
					SelectProvider,
					SelectDateTime,
					Confirm
				}, {
					defaultNavigationOptions: {
						headerTransparent: true,
						headerTintColor: '#FFF',
						headerLeftContainerStyle: {
							marginLeft: 20,
						}
					}
				}),
				navigationOptions: {
					tabBarVisible: false,
					tabBarLabel: 'Agendar',
					tabBarIcon: (
						<Icon name="add-circle-outline" size={20} color="rgba(255, 255, 255, 0.6)" />
					)
				}
			},
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