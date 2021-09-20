import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeBaseProvider } from 'native-base';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import merge from 'deepmerge';

const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);
const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  let theme = colorScheme === 'dark' ? CombinedDarkTheme : CombinedDefaultTheme;
  
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NativeBaseProvider>
          <Navigation theme={theme} />
          <StatusBar />
        </NativeBaseProvider>
    );
  }
}
