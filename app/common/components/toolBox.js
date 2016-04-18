import React, {
	StyleSheet,
	View
} from 'react-native';

import ColorBox from './colorBox';

const colorList = ['red', 'yellow', 'green'];

const ToolBox = React.createClass({
	render() {
		const { selectedColorIdx, onSelectColor } = this.props;
		return (
			<View style={styles.toolBox}>
				{colorList.map((color, key) => {
					let isSelected = false;
					if (key === selectedColorIdx) {
						isSelected = true;
					}
					return (
						<ColorBox
							key={key}
							idx={key} 
							color={color}
							isSelected={isSelected}
							onSelect={onSelectColor}
						/>
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