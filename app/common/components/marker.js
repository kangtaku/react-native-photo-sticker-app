import React, {
	View,
	StyleSheet,
	Image,
	Text
} from 'react-native';

const Marker = React.createClass({
	propTypes: {
		x: React.PropTypes.number.isRequired,
		y: React.PropTypes.number.isRequired,
		color: React.PropTypes.string.isRequired
	},

	getDefaultProps() {
		return {
			image: require('../../resources/close.png'),
			color: 'red'
		};
	},

	getLocationStyle(x, y) {
		let width = 25,
			height = 25;
		return {
			left: (x - (width / 2)),
			top: (y - (height / 2)),
			width: width,
			height: height,
			position: 'absolute'
		}
	},

	render() {
		const { x, y, color } = this.props;
		return (
			<View>
				<Image
					source={require('../../resources/close.png')}
					style={[this.getLocationStyle(x, y), {borderRadius: 5, tintColor: color}]} 
				/>
			</View>
		);
	}
});

const styles = StyleSheet.create({
	marker: {
		width: 25,
		height: 25,
		position: 'absolute'
	}
});

export default Marker;