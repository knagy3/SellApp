import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Image } from "react-native-expo-image-cache";

import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import colors from '../config/colors';

function ListingDetails({ route }) {
    const listing = route.params;

    return (
        <View>
            <Image 
                style={styles.image}
                preview={{ uri: listing.images[0].thumbnailUrl }}
                tint="light"
                uri={listing.images[0].url}
            />
            <View style={styles.detailesContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}>${listing.price}</AppText>
                <View style={styles.userContainer}>
                    <ListItem image={require('../../assets/me.jpg')} title="Kristof Nagy" subTitle="5 Listings"/>   
                </View>
                
            </View>
            
        </View>
    );
}
const styles = StyleSheet.create({
    detailesContainer:{
        padding: 20,
    },
    image: {
        width: '100%',
        height: 300,
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
        marginBottom: 7,
    },
    userContainer: {
        marginVertical: 40,

    },
})
export default ListingDetails;