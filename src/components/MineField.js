import React from 'react';
import { View, StyleSheet } from 'react-native';
import Field from './Field';

export default ({ board, openField, onSelectField }) => {
	const rows = board.map((row, r) => {
		const columns = row.map((field, c) => {
			return <Field {...field} key={c} onOpen={() => openField(r, c)} onSelect={() => onSelectField(r, c)} />;
		});

		return (
			<View style={{ flexDirection: 'row' }} key={r}>
				{columns}
			</View>
		);
	});

	return <View style={styles.container}>{rows}</View>;
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#eee'
	}
});
