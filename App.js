import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import your screen components
import SongsScreen from './.expo/screens/SongsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//icons

import GetSongs from './.expo/Data/GetSongs';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <GetSongs>
      <NavigationContainer >
      <SongsScreen />
        {/* <Tab.Navigator screenOptions={{ tabBarPosition: 'top', }}> */}
          {/* <Tab.Screen name="Songs" options={{ tabBarIcon: (Color, size) => (<Feather name="headphones" size={24} color="black" />) }} component={SongsScreen} /> */}
          {/* <Tab.Screen name="Player" options={{tabBarIcon:(Color, size)=>(<FontAwesome5 name="compact-disc" size={24} color="black" />)}} component={PlayerScreen} /> */}
          {/* <Tab.Screen name="Playlists" options={{ tabBarIcon: (Color, size) => (<Entypo name="list" size={24} color="black" />) }} component={PlaylistScreen} /> */}
          {/* <Tab.Screen name="Albums" options={{ tabBarIcon: (Color, size) => (<Ionicons name="albums" size={24} color="black" />) }} component={AlbumsScreen} /> */}
        {/* </Tab.Navigator> */}
        <StatusBar style="auto" />
      </NavigationContainer>
    </GetSongs>
  );
}


