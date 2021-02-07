import React from 'react';
import { Text, StyleSheet } from 'react-native';

function AppText({children}) {
    return (
        <Text style={styles.text}>
            {children}
        </Text>
    );
}
// Platfrom settings

const styles = StyleSheet.create({
    text: {
        color: "red",
        fontSize: 18,
        fontFamily: "Roboto",
    }
})

export default AppText;