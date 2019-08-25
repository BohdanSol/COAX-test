import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Signup from './screens/Signup';
import Camera from './screens/Camera';
import Login from './screens/Login';
import Feed from './screens/Feed';

const App = createStackNavigator(
	{
		Signup: {
			screen: Signup
		},
		Camera: {
			screen: Camera
		},
		Login: {
			screen: Login
		},
		Feed: {
			screen: Feed
		}
	},
	{
		initialRouteName: 'Signup',
		headerMode: 'none',
		navigationOptions: {
			headerVisible: false
		}
	}
);

export default createAppContainer(App);
