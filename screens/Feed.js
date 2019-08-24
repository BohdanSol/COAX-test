import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Platform, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export class Feed extends React.Component {
	render() {
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
						Feed
					</Text>
				</View>
			</SafeAreaView>
		);
	}
}
export default Feed;

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
