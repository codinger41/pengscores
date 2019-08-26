import React, { useContext, useEffect, useState } from 'react'
import { Text, View, ScrollView, FlatList, RefreshControl } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import Header from '../../components/header'
import MatchesContext from '../../contexts/matches'
import LiveMatchCard from '../../components/livecards'
import MatchCard from '../../components/matchcard'
import Leagues from '../../components/leagues'
import Banner from '../../components/admob'
import styles from './styles'

const Home = ({ navigation }: ScreenProp) => {
  const [refreshing, setRefresh] = useState(false)

  const context: any = useContext(MatchesContext)
  const {
    matchesReducer: { live, liveLoading, upcoming, upcomingLoading, league }
  } = context

  useEffect(() => {
    context.getLiveMatches(league, 'load')
    context.getUpcomingMatches(league, 'load')
  }, [league])

  const refresh = () => {
    setRefresh(true)
    context.getLiveMatches(league, 'refresh')
    context.getUpcomingMatches(league, 'refresh')
    setRefresh(false)
  }

  return (
    <View style={styles.container}>
      <Header title="Home" leftIcon="grid" onPressLeft={() => {}} />
      <Banner />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={() => refresh()} />
        }
      >
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
            <Text style={styles.upcomingText}>All Matches This Season</Text>
          </View>
          {upcomingLoading && (
            <ActivityIndicator size="large" color="#3353dd" />
          )}
          {upcoming && (
            <FlatList
              data={upcoming}
              keyExtractor={(i, t) => t.toString()}
              removeClippedSubviews
              renderItem={({ item }) => (
                <MatchCard navigation={navigation} match={item} />
              )}
            />
          )}
        </ScrollView>
      </ScrollView>
    </View>
  )
}

export default Home
