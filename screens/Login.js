import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Platform, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export class Login extends React.Component {
	state = {
		nickname: ''
	};
	handleChangeText = (typedText) => {
		this.setState({ nickname: typedText });
	};
	render() {
		const { navigate } = this.props.navigation;
		return (
			<SafeAreaView style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
				<View style={styles.headerRow}>
					<Text
						style={{
							color: '#4169E1',
							fontSize: 40,
							fontWeight: 'bold'
						}}
					>
						Log In
					</Text>
				</View>
				<View style={styles.alignRow}>
					<TextInput
						onChangeText={this.handleChangeText}
						style={styles.inputRow}
						placeholder="Nickname"
						value={this.state.nickname}
					/>
				</View>
				<View style={styles.alignRow}>
					<TextInput style={styles.inputRow} placeholder="Password" secureTextEntry={true} />
				</View>
				<View style={styles.alignRow}>
					<TouchableOpacity
						style={styles.btn}
						onPress={() => navigate('Feed', { nickname: this.state.nickname })}
					>
						<Text
							style={{
								color: '#fff',
								fontSize: 14,
								fontWeight: 'bold'
							}}
						>
							Log In
						</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.alignRowLogin}>
					<Text>Don't have account?</Text>
					<TouchableOpacity onPress={() => navigate('Signup')}>
						<Text
							style={{
								paddingHorizontal: 5,
								color: '#4169e1'
							}}
						>
							Sign Up
						</Text>
					</TouchableOpacity>
				</View>
				<View style={{ flex: 2 }} />
			</SafeAreaView>
		);
	}
}
export default Login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f3f3f3',
		alignItems: 'center',
		justifyContent: 'center'
	},
	alignRow: {
		flex: 1,
		justifyContent: 'center',
		paddingLeft: 40,
		paddingRight: 40
	},
	alignRowLogin: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'flex-start',
		paddingLeft: 40,
		paddingRight: 40
	},
	headerRow: {
		flex: 1,
		justifyContent: 'center',
		marginLeft: 40
	},
	photoPicker: {
		height: 120,
		width: 120,
		borderRadius: 60,
		backgroundColor: '#eee',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3
		},
		shadowOpacity: 0.15,
		shadowRadius: 4.65,

		elevation: 5,
		alignItems: 'center',
		justifyContent: 'center'
	},
	pickIcon: {
		marginLeft: 40,
		fontSize: 30,
		color: '#4169e1'
	},
	inputRow: {
		padding: 20,
		borderWidth: 1,
		borderRadius: 5,
		borderColor: '#ccc'
	},
	btn: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 25,
		borderRadius: 10,
		backgroundColor: '#4169e1'
	}
});
