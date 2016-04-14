import React, {
	StyleSheet,
	View,
	Image,
	Text,
	PanResponder
} from 'react-native';

import NavigationBar from '../components/navigationBar';
import Marker from '../components/marker';

const ImageEditorView = React.createClass({
	getInitialState() {
		return {
			markers: []
		};
	},

	componentWillMount() {
	},

	componentDidMount() {
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
							{this.state.markers.map((marker, key) => {
								console.log(marker);
								return (
									<Marker 
										key={key} 
										x={marker.x} 
										y={marker.y}
									/>);
							})}
						</Image>
					</View>
					<View style={styles.toolBox}>
					</View>
				</View>
			</View>
		);
	},

	setMarkerOnImageBox(x, y) {
		let newMarker = {
			x: x,
			y: y
		}
		let markers = this.state.markers;
		markers.push(newMarker);
		this.setState({
			markers: markers
		});
	},

	_onPressImage(e) {
		const { locationX, locationY } = e.nativeEvent;
		this.refs.imageBox.measure( (fx, fy, width, height, px, py) => {
			if ((fx < locationX && fx + width > locationX) &&
				(fy < locationY && fy + height > locationY)) {
				this.setMarkerOnImageBox(locationX, locationY);
			}
		});
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
		flexDirection: 'row',
	},
	toolBox: {
		backgroundColor: 'black',
		flex: 1
	},
	test: {
		color: 'black',
		fontSize: 10,
		position: 'absolute',
		top: 50,
		left: 50
	}
});

export default ImageEditorView;