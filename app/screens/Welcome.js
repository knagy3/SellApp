import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppButton from '../components/AppButton';
import routes from '../navigation/routes';

function Welcome({ navigation }) {

    const handleOnPressLogin = () => {
        navigation.navigate(routes.LOGIN);
    };

    const handleOnPressRegister = () => {
        navigation.navigate(routes.REGISTER);
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                blurRadius={1.5}
                source={require("../../assets/background.jpg")}
                style={styles.background} 
            >   
                <View style={styles.logoContainer}>
                    <ImageBackground 
                        style={styles.logo}
                        source={require("../../assets/logo.jpg")}
                    />
                    <Text style={styles.tagline}>Sell what you don't need!</Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <AppButton title="login" onPress={handleOnPressLogin}/>            
                    <AppButton title="register" onPress={handleOnPressRegister} color="secondary"/> 
                </View>
            </ImageBackground>
        </View>
        
    )
}

//rnss
const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flex: 1,
    },
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems:"center",
    },
    buttonsContainer: {
        padding: 20,
        width: '100%',
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#4ecdc4",
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems:"center",
    },
    logo: {
        width: 100, 
        height: 100,
        resizeMode: "contain",
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
        textTransform: 'capitalize', 
    }
})

export default Welcome
