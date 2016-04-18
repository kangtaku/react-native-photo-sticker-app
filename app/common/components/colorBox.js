import React, {
	StyleSheet,
	View,
	TouchableHighlight
} from 'react-native';

const ColorBox = React.createClass({
	propTypes: {
		idx: React.PropTypes.number.isRequired,
		color: React.PropTypes.string.isRequired,
		isSelected: React.PropTypes.bool
	},

	getDefaultProps() {
		return {
			isSelected: false
		};
	},


	getColorBoxStyle() {
		const { color, isSelected } = this.props;
		var borderColor = isSelected ? 'white' : 'black';
		return {
			height: 30,
			width: 30,
			backgroundColor: color,
			margin: 10,
			borderColor: borderColor,
			borderWidth: 2
		}
	},

	onClickBox() {
		const { idx, onSelect } = this.props;
		onSelect(idx);
	},

	render() {
		return (
			<TouchableHighlight style={{height: 30}} onPress={this.onClickBox}>
				<View style={this.getColorBoxStyle()}>
				</View>
			</TouchableHighlight>
		);
	}
});

const styles = StyleSheet.create({
});

export default ColorBox;