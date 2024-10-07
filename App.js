import React, { useEffect } from 'react';
import { View, Text, Platform, StatusBar } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import your screen components
import SongsScreen from './.expo/screens/SongsScreen';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//icons

import GetSongs from './.expo/Data/GetSongs';
// import TrackPlayer from 'react-native-track-player';
// import * as Notifications from 'expo-notifications';
import { Audio } from 'expo-av';

// const Stack = createNativeStackNavigator();

// const Tab = createBottomTabNavigator();

export default function App() {

  const startForegroundService = async () => {
    if (Platform.OS === 'android') {
      // Set notification handler for background audio service
      
      // await Notifications.setNotificationHandler({
      //   handleNotification: async () => ({
      //     shouldShowAlert: false,
      //     shouldPlaySound: false,
      //     shouldSetBadge: false,
      //   }),
      // });

      // Set audio mode for background playback
      await Audio.setAudioModeAsync({
        staysActiveInBackground: true,
        interruptionModeAndroid: 1, // 1 corresponds to "DUCK_OTHERS"
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,  // Keep other sounds quieter while your audio plays
      });
    }
  };

  // Use useEffect to start foreground service when the app starts
  useEffect(() => {
    startForegroundService(); 
  }, []);

  return (
    <GetSongs>
      {/* <NavigationContainer > */}
      <SongsScreen />
        {/* <Tab.Navigator screenOptions={{ tabBarPosition: 'top', }}> */}
          {/* <Tab.Screen name="Songs" options={{ tabBarIcon: (Color, size) => (<Feather name="headphones" size={24} color="black" />) }} component={SongsScreen} /> */}
          {/* <Tab.Screen name="Player" options={{tabBarIcon:(Color, size)=>(<FontAwesome5 name="compact-disc" size={24} color="black" />)}} component={PlayerScreen} /> */}
          {/* <Tab.Screen name="Playlists" options={{ tabBarIcon: (Color, size) => (<Entypo name="list" size={24} color="black" />) }} component={PlaylistScreen} /> */}
          {/* <Tab.Screen name="Albums" options={{ tabBarIcon: (Color, size) => (<Ionicons name="albums" size={24} color="black" />) }} component={AlbumsScreen} /> */}
        {/* </Tab.Navigator> */}
        <StatusBar style="auto" />
      {/* </NavigationContainer> */}
    </GetSongs>
  );
}


