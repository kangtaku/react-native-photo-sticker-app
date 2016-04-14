import React, {
	StyleSheet,
	View
} from 'react-native';

const ColorBox = React.createClass({
	propTypes: {
		color: React.PropTypes.string.isRequired
	},

	render() {
		const { color } = this.props;
		let colorBox = styles.colorBox;
		colorBox['backgroundColor'] = color;
		return (
			<View style={colorBox}>
			</View>
		);
	}
});

const styles = StyleSheet.create({
	colorBox: {
		height: 30,
		width: 30,
		margin: 10
	}
});

export default ColorBox;