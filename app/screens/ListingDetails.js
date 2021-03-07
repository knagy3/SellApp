import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Image } from "react-native-expo-image-cache";

import AppText from '../components/AppText';
import ContactSellerForm from '../components/ContactSellerForm';
import ListItem from '../components/ListItem';
import colors from '../config/colors';

function ListingDetails({ route }) {
    const listing = route.params;

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            // behavior="position"
            // keyboardVerticalOffset={100}
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : "50%"}
        >
            <ScrollView>
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
                        <ListItem
                            image={require('../../assets/me.jpg')}
                            title="Kristof Nagy"
                            subTitle="5 Listings"/>
                    </View>
                    <ContactSellerForm listing={listing} />
                </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
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
        marginVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
        // marginBottom: 7,
    },
    userContainer: {
        marginVertical: 10,
    },
});

export default ListingDetails;