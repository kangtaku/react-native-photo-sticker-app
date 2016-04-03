'use strict';

import React, {
	StyleSheet,
	View,
	TouchableHighlight,
	Text
} from 'react-native';

var NavigationBar = React.createClass({

	render() {
		const { name,
				leftButton,
				rightButton } = this.props;
		return (
			<View style={styles.navigation}>
				<TouchableHighlight>
					<Text style={styles.toolbarButton}>BACK</Text>
				</TouchableHighlight>
				<Text style={styles.toolbarTitle}>{name}</Text>
				<TouchableHighlight>
					<Text style={styles.toolbarButton}>
						SAVE
					</Text>
				</TouchableHighlight>
			</View>
		);
	}
});

const styles = StyleSheet.create({
	navigation: {
		height: 60,
		backgroundColor: '#2B2A2A',
		flexDirection: 'row',
		paddingTop: 30,
		paddingBottom: 10
	},
	toolbarButton: {
		width: 50,
		color: '#fff',
		textAlign: 'center'
	},
	toolbarTitle: {
		color: '#fff',
		textAlign: 'center',
		fontWeight: 'bold',
		flex: 1
	},
	rightButton: {
		width: 50
	}
});

export default NavigationBar;