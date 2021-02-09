import React from 'react';
import { TextInput, View, StyleSheet, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import defaultStyles from '../config/styles';

function AppTextInput({ icon, ...props }) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={colors.grey}/>}
            <TextInput style={defaultStyles.text} {...props}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGrey,
        borderRadius: 25,
        flexDirection: "row",
        width: '100%',
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 20,
    },
})
export default AppTextInput;