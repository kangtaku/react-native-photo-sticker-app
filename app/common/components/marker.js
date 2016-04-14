import React, {
	View,
	StyleSheet,
	Image,
	Text
} from 'react-native';

const Marker = React.createClass({
	propTypes: {
		x: React.PropTypes.number.isRequired,
		y: React.PropTypes.number.isRequired
	},

	getDefaultProps() {
		return {
			image: require('../../resources/close.png')
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
		const { x, y } = this.props;
		return (
			<View>
				<Image
					source={require('../../resources/close.png')}
					style={[this.getLocationStyle(x, y), {borderRadius: 5, tintColor: '#5ac8fa'}]} 
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