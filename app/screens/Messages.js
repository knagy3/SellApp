import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../../assets/me.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../../assets/me.jpg')
    }
];

function Messages(props) {
    const [messages, setMessages] = useState(initMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (message) => {
        // Delete the msg and send to the server
        const newM = messages.filter((item) => (item.id !== message.id));
        setMessages(newM);
    };

    return (
        <Screen>
            <FlatList 
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({item}) => 
                <ListItem
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                    onPress={() => console.log("Message selected", item)}
                    renderRightActions={() => (
                        <ListItemDeleteAction onPress={() => handleDelete(item)}/>
                        // DOES NOT WORK --> onPress={handleDelete(item)}
                    )}
                /> }
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: 'T2',
                            description: 'D2',
                            image: require('../../assets/me.jpg')
                        }
                    ])
                }}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    
})

export default Messages;