import { registerRootComponent } from 'expo';
// import TrackPlayer from 'react-native-track-player';
import App from './App';
// import playbackService from './service'; // Import your playback service file


// TrackPlayer.addEventListener('remote-play', () => TrackPlayer.play());
// TrackPlayer.addEventListener('remote-pause', () => TrackPlayer.pause());
// TrackPlayer.addEventListener('remote-stop', () => TrackPlayer.destroy());

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
// TrackPlayer.registerPlaybackService(() => playbackService); // Register playback service
