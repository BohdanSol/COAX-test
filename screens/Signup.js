import React from 'react';
import { SafeAreaView, Image, StyleSheet, Text, View, TouchableOpacity, Platform, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export class Signup extends React.Component {
	state = {
		image: null
	};
	render() {
		let { image } = this.state;
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
						Sign Up
					</Text>
				</View>
				<View
					style={{
						flex: 2,
						marginLeft: 40,
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'flex-start'
					}}
				>
					<Image source={{ uri: image }} style={styles.photoPicker} />

					<TouchableOpacity>
						<Ionicons
							onPress={() => navigate('Camera')}
							name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-camera`}
							style={styles.pickIcon}
						/>
					</TouchableOpacity>
					<TouchableOpacity>
						<Ionicons
							onPress={this._pickImage}
							name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-image`}
							style={styles.pickIcon}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.alignRow}>
					<TextInput style={styles.inputRow} placeholder="Nickname" />
				</View>
				<View style={styles.alignRow}>
					<TextInput style={styles.inputRow} placeholder="Password" secureTextEntry={true} />
				</View>
				<View style={styles.alignRow}>
					<TouchableOpacity style={styles.btn}>
						<Text
							style={{
								color: '#fff',
								fontSize: 14,
								fontWeight: 'bold'
							}}
						>
							Sign Up
						</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.alignRowLogin}>
					<Text>Already have account?</Text>
					<TouchableOpacity onPress={() => navigate('Login')}>
						<Text
							style={{
								paddingHorizontal: 5,
								color: '#4169e1'
							}}
						>
							Log In
						</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		);
	}
	componentDidMount() {
		this.getPermissionAsync();
	}
	getPermissionAsync = async () => {
		if (Constants.platform.ios) {
			const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
			if (status !== 'granted') {
				alert('Sorry, we need camera roll permissions to make this work!');
			}
		}
	};
	_pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [ 4, 3 ]
		});

		console.log(result);

		if (!result.cancelled) {
			this.setState({ image: result.uri });
		}
	};
}
export default Signup;

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
