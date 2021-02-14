import React from 'react';
import Constants from 'expo-constants';
import { View, StyleSheet } from 'react-native';

function Screen({ children, style }) {
    return (
        <View style={[styles.screen, style]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Constants.statusBarHeight * 1.5,
    },
    view: {
        flex: 1,
    }
})

export default Screen;