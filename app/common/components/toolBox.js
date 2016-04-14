import React, {
	StyleSheet,
	View
} from 'react-native';

import ColorBox from './colorBox';

const colorList = ['red', 'yellow', 'green'];

const ToolBox = React.createClass({
	render() {
		return (
			<View style={styles.toolBox}>
				{colorList.map((color, key) => {
					return (
						<ColorBox key={key} color={color}/>
					);
				})}
			</View>
		);
	}
});

const styles = StyleSheet.create({
	toolBox: {
		backgroundColor: 'black',
		flexDirection: 'row',
		flex: 2
	}
});

export default ToolBox;