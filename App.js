// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
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
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import Screen from './app/components/Screen';
import AppPicker from './app/components/AppPicker';
import Login from './app/screens/Login';
import ListingsEdit from './app/screens/ListingsEdit';

const categories = [
  {label: "Furniture", value: 1 },
  {label: "Clothing", value: 2 },
  {label: "Cameras", value: 3 },
];

// import Picture from './assets/icon.png' did not work!
export default function App() {
  const [category, setCategory] = useState(categories[0]);

  return (
    <ListingsEdit/>  
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

// const styles = StyleSheet.create({
//   container: {

//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
