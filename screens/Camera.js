import React from 'react';
import { Text, View, TouchableOpacity, Platform, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Ionicons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';

export default class CameraExample extends React.Component {
	state = {
		hasCameraPermission: null,
		type: Camera.Constants.Type.back,
		previewUri: null
	};

	async componentDidMount() {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({ hasCameraPermission: status === 'granted' });
	}
	snap = async () => {
		if (this.camera) {
			let photo = await this.camera.takePictureAsync({
				quality: 0.5,
				base64: true,
				forceUpOrientation: true,
				fixOrientation: true
			});
			this.setState({ previewUri: photo.uri });
			alert(this.state.previewUri);
		}
	};
	render() {
		const { goBack } = this.props.navigation;
		const { hasCameraPermission } = this.state;
		if (this.state.previewUri) {
			return (
				<View style={{ flex: 1 }}>
					<View style={{ flex: 1 }} />
					<View style={{ flex: 3, backgroundColor: '#ccc' }}>
						<Image
							stlye={{ width: 70, height: 70 }}
							resizeMode="cover"
							source={{ uri: this.state.previewUri }}
						/>
						<Image source={require('../assets/icon.png')} />
					</View>
					<View
						style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
					>
						<TouchableOpacity style={{ padding: 20 }} onPress={() => (this.state.previewUri = null)}>
							<Text style={{ fontSize: 18 }}>Cancel</Text>
						</TouchableOpacity>
						<TouchableOpacity style={{ padding: 20 }} onPress={() => alert(this.state.previewUri)}>
							<Text style={{ fontSize: 18 }}>Save to CRoll</Text>
						</TouchableOpacity>
					</View>
				</View>
			);
		}
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
					<Camera
						ref={(ref) => {
							this.camera = ref;
						}}
						style={{ flex: 3 }}
						type={this.state.type}
					>
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
							onPress={this.snap}
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
