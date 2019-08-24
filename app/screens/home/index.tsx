import React, { useContext, useEffect } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import Header from '../../components/header'
import MatchesContext from '../../contexts/matches'
import LiveMatchCard from '../../components/livecards'
import MatchCard from '../../components/matchcard'
import Leagues from '../../components/leagues'
import styles from './styles'

const Home = ({ navigation }: ScreenProp) => {
  const context: any = useContext(MatchesContext)
  const {
    matchesReducer: { live, liveLoading, upcoming, upcomingLoading, league }
  } = context

  useEffect(() => {
    context.getLiveMatches(league)
    context.getUpcomingMatches(league)
  }, [league])

  return (
    <View style={styles.container}>
      <Header title="Home" leftIcon="grid" />
      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Today</Text>
          <Text style={styles.titleBody}>Football Matches</Text>
        </View>
        <Leagues />
        <ScrollView
          horizontal
          style={{ flex: 0.1 }}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScroll}
        >
          {live.length > 0 &&
            live.map(match => (
              <LiveMatchCard
                navigation={navigation}
                key={match.fixture_id}
                match={match}
              />
            ))}
          {live.length < 1 && !liveLoading && (
            <Text style={styles.upcomingText2}>
              There are no live matches for this league.
            </Text>
          )}
        </ScrollView>
        {liveLoading && (
          <ActivityIndicator
            size="large"
            color="#3353dd"
            style={styles.activityIndicator}
          />
        )}
        <ScrollView contentContainerStyle={styles.upcomingmatches}>
          <View style={styles.row}>
            <Text style={styles.upcomingText}>Upcoming Matches</Text>
          </View>
          {upcomingLoading && (
            <ActivityIndicator size="large" color="#3353dd" />
          )}
          {upcoming &&
            upcoming.map(match => (
              <MatchCard
                navigation={navigation}
                key={match.fixture_id}
                match={match}
              />
            ))}
        </ScrollView>
      </ScrollView>
    </View>
  )
}

export default Home
