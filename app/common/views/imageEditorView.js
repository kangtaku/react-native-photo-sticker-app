import React, {
	StyleSheet,
	View,
	Image,
	Text,
	PanResponder
} from 'react-native';

import NavigationBar from '../components/navigationBar';

var ImageEditorView = React.createClass({
	componentWillMount() {

	},

	render() {
		const { name, onForward } = this.props;
		return (
			<View style={styles.container}>
				<NavigationBar
					name={name}
					style={styles.navBar}
					onRightButton={onForward}
				/>
				<View style={styles.contentContainer}>
					<View 
					 style={styles.imageBox} onStartShouldSetResponder={this._onPressImage}>
						<Image 
							ref="imageBox"
							onPress={this.handlePressImageBox}
							style={styles.image}
							source={require('../../resources/bg2.jpg')}
							resizeMode='contain'/>
					</View>
					<View style={styles.toolBox}>
					</View>
				</View>
			</View>
		);
	},

	_onPressImage(e) {;
		const { locationX, locationY } = e.nativeEvent;
		this.refs.imageBox.measure( (fx, fy, width, height, px, py) => {
			console.log('Component width is: ' + width)
            console.log('Component height is: ' + height)
            console.log('X offset to frame: ' + fx)
            console.log('Y offset to frame: ' + fy)
            console.log('X offset to page: ' + px)
            console.log('Y offset to page: ' + py)

		});
		console.log(locationX + ',' + locationY);
	}
});

const styles = StyleSheet.create({
	container: {
		flexDirection : 'column',
		flex: 1
	},
	navBar: {
		flex: 1
	},
	contentContainer: {
		flexDirection: 'column',
		flex: 1
	},
	image: {
		flex: 1,
		alignSelf: 'center'
	},
	imageBox: {
		flex: 3,
		flexDirection: 'row',
	},
	toolBox: {
		backgroundColor: 'black',
		flex: 1
	}
});

export default ImageEditorView;