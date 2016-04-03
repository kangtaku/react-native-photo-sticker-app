import React, {
	StyleSheet,
	View,
	Text
} from 'react-native';

import NavigationBar from '../components/navigationBar';

var ImageEditorView = React.createClass({
	render() {
		const { name } = this.props;
		return (
			<View style={styles.container}>
				<NavigationBar
					name={name}
				/>
				<Text style={styles.textS}>asdf</Text>
			</View>
		);
	}
});

const styles = StyleSheet.create({
	container: {
		flexDirection : 'column'
	},
	textS: {
		color: 'red'
	}
});

export default ImageEditorView;