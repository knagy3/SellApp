import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Platform, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import defaultStyles from '../config/styles';
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';


function AppPicker({ 
    icon, 
    items,
    numberOfColumns=1,
    onSelectItem, 
    selectedItem,  
    PickerItemComponent=PickerItem, 
    placeholder, 
    width="100%"
}) {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <>
            <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>
                <View style={[styles.container, {width} ]}>
                    {icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={colors.grey}/>}
                    {selectedItem ? (
                        <AppText style={styles.text}>{selectedItem.label}</AppText>
                    ) : (
                        <AppText style={styles.placeholder}>{placeholder}</AppText>
                    )}
                    <MaterialCommunityIcons name="chevron-down" size={20} color={colors.grey}/>
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen>    
                    <Button title="Close" onPress={()=>setModalVisible(false)}/>
                    <FlatList
                        data={items}
                        keyExtractor={item=>item.value.toString()}
                        numColumns={numberOfColumns}
                        renderItem={({ item }) => 
                            <PickerItemComponent
                                item={item}
                                onPress={()=>{
                                    setModalVisible(false);
                                    onSelectItem(item);
                                }}
                            />}
                    />
                </Screen>
            </Modal>
        </>
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
    text: {
        flex: 1,
    },
    placeholder: {
        color: colors.grey,
        flex: 1,
    }
})
export default AppPicker;