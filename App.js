// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, View} from 'react-native';
import Welcome from './app/screens/Welcome';
import ViewImage from './app/screens/ViewImage';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';

// import Picture from './assets/icon.png' did not work!
export default function App() {

  return (
    <Welcome/>
    // <ViewImage/>
    // <View  style={styles.container}> 
    //   <AppText> I love ract native! </AppText>
    //   <MaterialCommunityIcons name="email" size={60} color="dodgerblue"/>
    // </View>
    
  );
}

// Validates the property, inline style (style={{}}), does not.
// If you do a mistake you will not have an error without sylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
