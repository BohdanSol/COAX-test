import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
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
				<TouchableOpacity style={styles.photoPicker}>
					<Text style={{ color: '#ccc' }}>Photo</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Ionicons name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-camera`} style={styles.pickIcon} />
				</TouchableOpacity>
				<TouchableOpacity>
					<Ionicons name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-image`} style={styles.pickIcon} />
				</TouchableOpacity>
			</View>
			<View style={styles.alignRow}>
				<Text>Nickname</Text>
			</View>
			<View style={styles.alignRow}>
				<Text>Password</Text>
			</View>
			<View style={styles.alignRow}>
				<Text>Btn</Text>
			</View>
			<View style={styles.alignRow}>
				<Text>Log In</Text>
			</View>
		</SafeAreaView>
	);
}

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
	}
});
