import React from 'react';
import { TextInput, View, StyleSheet, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import defaultStyles from '../config/styles';

function AppTextInput({ icon, width="100%", ...otherProps }) {
    return (
        <View style={[styles.container, {width}]}>
            {icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={colors.grey}/>}
            <TextInput 
                placeholderTextColor={colors.grey}
                style={defaultStyles.text} 
                {...otherProps}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGrey,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 20,
    },
})
export default AppTextInput;