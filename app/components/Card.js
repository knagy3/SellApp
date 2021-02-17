import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from "react-native-expo-image-cache";

import colors from '../config/colors';
import AppText from './AppText';

function Card({ title, subTitle, imageUrl, onPress, thumbnailUrl }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.card}>
                <Image 
                    style={styles.image}
                    tint="light"
                    preview={{ uri: thumbnailUrl }}
                    uri={imageUrl} 
                />
                <View style={styles.detailesContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subTitle}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableOpacity>
        
    );
}
const styles = StyleSheet.create({
    detailesContainer:{
        padding: 20,
    },
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden",
    },
    image:{
        width: '100%',
        height: 200,
        overflow: "hidden",
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold"

    },
    title: {
        marginBottom: 7,
    }
})
export default Card;