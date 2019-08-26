import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';

export class Feed extends React.Component {
	state = {
		nick: this.props.navigation.state.params.nickname,
		isLoading: true,
		dataSource: []
	};
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json()).then((responseJson) => {
			this.setState({
				isLoading: false,
				dataSource: responseJson
			});
		});
	}
	renderItem = ({ item }) => (
		<TouchableOpacity style={styles.wholePost}>
			<Text style={styles.itemHeader}>{item.title}</Text>
			<Text style={styles.itemBody}>{item.body}</Text>
		</TouchableOpacity>
	);
	render() {
		if (this.state.isLoading) {
			return (
				<View style={styles.container}>
					<ActivityIndicator size="large" animating />
				</View>
			);
		} else {
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
						<Text style={{ marginRight: 40 }}>User: {this.state.nick ? this.state.nick : 'Anonymous'}</Text>
					</View>
					<View style={{ flex: 6 }}>
						<FlatList
							data={this.state.dataSource}
							renderItem={this.renderItem}
							keyExtractor={(item, index) => index.toString()}
						/>
					</View>
				</SafeAreaView>
			);
		}
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
	headerRow: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginLeft: 40
	},
	itemHeader: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 2,
		padding: 10
	},
	itemBody: {
		color: '#555',
		paddingHorizontal: 10,
		paddingBottom: 10
	},
	wholePost: {
		margin: 10,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: '#ccc',
		backgroundColor: '#ededed'
	}
});
