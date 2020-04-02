import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import params from '../params';
import Mine from './Mine';
import Flag from './Flag';

export default ({ mined, opened, nearMines, exploded, flagged, onOpen, onSelect }) => {
	const stylesField = [ styles.field ];

	if (opened) stylesField.push(styles.opened);
	if (exploded) stylesField.push(styles.exploded);
	if (flagged) stylesField.push(styles.flagged, styles.regular);
	if (stylesField.length === 1) stylesField.push(styles.regular);
	if (!opened && !exploded) stylesField.push(styles.regular);

	let color = null;
	if (nearMines > 0) {
		if (nearMines === 1) color = '#2a28d7';
		if (nearMines === 2) color = '#2b520f';
		if (nearMines > 2 && nearMines < 6) color = '#f9060a';
		if (nearMines >= 6) color = '#f221a9';
	}

	return (
		<TouchableWithoutFeedback onPress={onOpen} onLongPress={onSelect}>
			<View style={stylesField}>
				{!mined && opened && nearMines > 0 ? (
					<Text style={[ styles.label, { color } ]}>{nearMines}</Text>
				) : (
					false
				)}
				{mined && opened ? <Mine /> : false}
				{flagged && !opened ? <Flag bigger /> : false}
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	regular: {
		backgroundColor: '#999',
		borderLeftColor: '#ccc',
		borderTopColor: '#ccc',
		borderRightColor: '#333',
		borderBottomColor: '#333'
	},
	field: {
		height: params.blockSize,
		width: params.blockSize,
		borderWidth: params.borderSize
	},
	opened: {
		backgroundColor: '#999',
		borderColor: '#777',
		alignItems: 'center',
		justifyContent: 'center'
	},
	label: {
		fontWeight: 'bold',
		fontSize: params.fontSize
	},
	exploded: {
		backgroundColor: 'red',
		borderColor: 'red'
	},
	flagged: {}
});
