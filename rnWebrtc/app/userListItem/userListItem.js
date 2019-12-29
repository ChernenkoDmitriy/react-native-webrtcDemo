import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export class UserListItem extends PureComponent {
    constructor(props) {
        super(props)
    }

    onPress = () => {
        const { onPress, name } = this.props;
        if (onPress)
            onPress(name);
    }

    render() {
        const { name, itemHeight, testId } = this.props;
        return (
            <TouchableOpacity style={[styles.container, { height: itemHeight || 50 }]} onPress={this.onPress}>
                <View style={styles.nameAndSvg}>
                    <Text style={styles.text}>{name}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default UserListItem;