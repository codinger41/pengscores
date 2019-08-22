import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import * as Font from 'expo-font';
import Navigation from './app/navigator'

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)
  useEffect(() => {
    Font.loadAsync({
      'ubuntu': require('./assets/Ubuntu-Regular.ttf'),
    }).then(() => setFontLoaded(true))
  })
  if (!fontLoaded) {
    return <View />
  }
  return (
    <Navigation />
  );
}
