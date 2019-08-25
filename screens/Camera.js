import React from 'react';
import { Text, View, TouchableOpacity, Platform } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Ionicons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';

export default class CameraExample extends React.Component {
	state = {
		hasCameraPermission: null,
		type: Camera.Constants.Type.back
	};

	async componentDidMount() {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({ hasCameraPermission: status === 'granted' });
	}

	render() {
		const { goBack } = this.props.navigation;
		const { hasCameraPermission } = this.state;
		if (hasCameraPermission === null) {
			return <View />;
		} else if (hasCameraPermission === false) {
			return <Text>No access to camera</Text>;
		} else {
			return (
				<View style={{ flex: 1 }}>
					<View style={{ fontSize: 18, flex: 1, justifyContent: 'center', marginLeft: 15 }}>
						<TouchableOpacity onPress={() => goBack()}>
							<Text>Back</Text>
						</TouchableOpacity>
					</View>
					<Camera style={{ flex: 3 }} type={this.state.type}>
						<View
							style={{
								flex: 1,
								backgroundColor: 'transparent',
								flexDirection: 'row'
							}}
						>
							<TouchableOpacity
								style={{
									flex: 0.1,
									alignSelf: 'flex-end',
									alignItems: 'center'
								}}
								onPress={() => {
									this.setState({
										type:
											this.state.type === Camera.Constants.Type.back
												? Camera.Constants.Type.front
												: Camera.Constants.Type.back
									});
								}}
							>
								<Ionicons
									name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-reverse-camera`}
									style={{ fontSize: 30, marginBottom: 15, color: 'white' }}
								/>
							</TouchableOpacity>
						</View>
					</Camera>
					<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
						<TouchableOpacity
							style={{
								width: 60,
								height: 60,
								backgroundColor: '#f2f2f2',
								borderRadius: 30,
								borderWidth: 3,
								borderColor: '#4169e1'
							}}
						/>
					</View>
				</View>
			);
		}
	}
}
