import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItem({ title, subTitle, image, IconComponet, onPress, renderRightActions }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight 
                underlayColor={colors.lightGrey}
                onPress={onPress}>
                <View style={styles.container}>
                    {IconComponet}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailesContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
        
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white,
        alignItems: 'center',
    },
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden",
    },
    detailesContainer:{
        flexDirection: "column",
        marginLeft: 10,
        justifyContent: 'center',
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    subTitle: {
        color: colors.grey,
        fontWeight: "bold",
    },
    title: {
        fontWeight: "600",
    }
})
export default ListItem;