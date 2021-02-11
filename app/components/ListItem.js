import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import colors from '../config/colors';

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
                        <AppText style={styles.title} numberOfLines={1} >{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle} numberOfLines={2} >{subTitle}</AppText>}
                    </View>
                    <MaterialCommunityIcons color={colors.grey} name="chevron-right" size={25} />
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
        flex: 1,
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