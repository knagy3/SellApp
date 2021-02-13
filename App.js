// import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, Image, Platform, StyleSheet, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from './app/navigation/AppNavigator';


const categories = [
  {label: "Furniture", value: 1 },
  {label: "Clothing", value: 2 },
  {label: "Cameras", value: 3 },
];

// import Picture from './assets/icon.png' did not work!
export default function App() {

  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

// Validates the property, inline style (style={{}}), does not.
// If you do a mistake you will not have an error without sylesheet

{/* <Screen>
  <AppPicker 
    selectedItem={category}
    onSelectItem={item=>setCategory(item)}
    items={categories}
    icon="apps" 
    placeholder="Username"/>
  <AppTextInput icon="email" placeholder="Email"/>
</Screen> */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 200,
  }
});
