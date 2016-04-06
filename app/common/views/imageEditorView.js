import React, {
	StyleSheet,
	View,
	Image,
	Text,
	PanResponder
} from 'react-native';

import NavigationBar from '../components/navigationBar';

var ImageEditorView = React.createClass({
	getInitialState() {
		return {
			markers: []
		};
	},

	componentWillMount() {
	},

	componentDidMount() {
	},

	initImageBoxLocation() {
		var imageBoxFrame = {};
		this.refs.imageBox.measure( (fx, fy, width, height, px, py) => {
			this.imageBoxFrame = {
				fx: fx,
				fy:	fy,
				width: width,
				height: height
			};
			console.log(width);
		});
		return imageBoxFrame;
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
							resizeMode='contain'>
							<Text>asdf </Text>
						</Image>
					</View>
					<View style={styles.toolBox}>
					</View>
				</View>
			</View>
		);
	},

	setMarkerOnImageBox(x, y) {
		const newMarker = (
			<Image ref="marker"
				   style={styles.marker}
				   source={require('../../resources/close.png')}
			/>
		);
		let markers = this.state.markers;
		markers.add(newMarker);
		this.setState({
			markers: markser
		});
	},

	_onPressImage(e) {
		const { locationX, locationY } = e.nativeEvent;
		const { fx, fy, width, height } = this.initImageBoxLocation();
		if ((fx < locationX && fx + width > locationX) &&
			(fy < locationY && fy + height > locationY)) {
			this.setMarkerOnImageBox(x, y);
		}
	}
});

const styles = StyleSheet.create({
	container: {
		flexDirection : 'column',
		flex: 1
	},
	navBar: {
	},
	marker: {
		width: 25,
		height: 25
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
		flexDirection: 'column',
	},
	toolBox: {
		backgroundColor: 'black',
		flex: 1
	}
});

export default ImageEditorView;