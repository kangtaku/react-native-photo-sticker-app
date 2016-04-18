'use strict';

import React, {
	StyleSheet,
	View,
	Navigator
} from 'react-native';

import ImageEditorView from '../common/views/imageEditorView';

var App = React.createClass({
	render() {
		return (
			<Navigator
				style={styles.container}
				initialRoute={{name: 'Editor', index: 0}}
				renderScene={(route, navigator) => 
					<ImageEditorView
						name={route.name}
						onForward={() => {
							const nextIndex = route.index + 1;
							navigator.push({
								name: 'Saved Image',
								index: nextIndex
							});
						}}
					/>
				}
			/>
		);
	}
});

const styles = StyleSheet.create({
	container: {
    	flex: 1,
    	backgroundColor: 'white',
    	flexDirection:'column'
  	}
});

export default App;
