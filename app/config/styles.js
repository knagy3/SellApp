import { StyleSheet, Platform } from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
    text: {
        color: colors.darkGrey,
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    },
})

export default styles;