// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, View} from 'react-native';
import Welcome from './app/screens/Welcome';
import ViewImage from './app/screens/ViewImage';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetails from './app/screens/ListingDetails';
import Messages from './app/screens/Messages';
import Account from './app/screens/Account';

// import Picture from './assets/icon.png' did not work!
export default function App() {

  return (
    // <Welcome/>
    <Account/>
    //<ListingDetails />
    
  );
}

// Validates the property, inline style (style={{}}), does not.
// If you do a mistake you will not have an error without sylesheet


// const styles = StyleSheet.create({
//   container: {

//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
