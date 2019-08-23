import React, { useState, useEffect, useReducer } from 'react'
import { View } from 'react-native'
import * as Font from 'expo-font'
import Navigation from './app/navigator'
import MatchesContext from './app/contexts/matches'
import combined from './app/reducers'
import { getLiveMatches, getSingleMatch, getSingleMatchStats, getSingleMatchEvents } from './app/actions/matches'
import { initialState } from './app/utils/constants'

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)
  const [state, dispatch] = useReducer(combined, initialState);

  useEffect(() => {
    Font.loadAsync({
      'ubuntu': require('./assets/Ubuntu-Regular.ttf'),
    }).then(() => setFontLoaded(true))
  })

  if (!fontLoaded) {
    return <View />
  }
  return (
    <MatchesContext.Provider
      value={{
        ...state,
        getLiveMatches: getLiveMatches.bind(null, dispatch),
        getMatchDetails: getSingleMatch.bind(null, dispatch),
        getMatchStat: getSingleMatchStats.bind(null, dispatch),
        getMatchEvents: getSingleMatchEvents.bind(null, dispatch)
      }}>
      <Navigation />
    </MatchesContext.Provider>
  );
}
