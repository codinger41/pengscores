import React, { useContext, useEffect } from 'react'
import { Text, View, ScrollView } from 'react-native'
import Header from '../../components/header'
import MatchesContext from '../../contexts/matches'
import LiveMatchCard from '../../components/livecards'
import MatchCard from '../../components/matchcard'
import styles from './styles'

const LiveMatches = [
  {
    club1: { name: 'Juventus', score: 1 },
    club2: { name: 'Juventus', score: 1 }
  },
  {
    club1: { name: 'Juventus', score: 1 },
    club2: { name: 'Juventus', score: 1 }
  },
  {
    club1: { name: 'Juventus', score: 1 },
    club2: { name: 'Juventus', score: 1 }
  },
  {
    club1: { name: 'Juventus', score: 1 },
    club2: { name: 'Juventus', score: 1 }
  }
]

const UpcomingMatches = [
  {
    club1: { name: 'Juventus', score: 1 },
    club2: { name: 'Juventus', score: 1 }
  },
  {
    club1: { name: 'Juventus', score: 1 },
    club2: { name: 'Juventus', score: 1 }
  },
  {
    club1: { name: 'Juventus', score: 1 },
    club2: { name: 'Juventus', score: 1 }
  },
  {
    club1: { name: 'Juventus', score: 1 },
    club2: { name: 'Juventus', score: 1 }
  }
]

const Home = ({ navigation }: ScreenProp) => {
  const context: any = useContext(MatchesContext)

  useEffect(() => {
    context.getLiveMatches()
  }, [])

  const {
    matchesReducer: { live, liveLoading }
  } = context
  return (
    <View style={styles.container}>
      <Header title="Home" leftIcon="grid" />
      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Today</Text>
          <Text style={styles.titleBody}>Football Matches</Text>
        </View>
        <ScrollView
          horizontal
          style={{ flex: 0.1 }}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScroll}
        >
          {live &&
            live.map(match => (
              <LiveMatchCard
                navigation={navigation}
                key={match.fixture_id}
                match={match}
              />
            ))}
        </ScrollView>
        <ScrollView contentContainerStyle={styles.upcomingmatches}>
          <View style={styles.row}>
            <Text style={styles.upcomingText}>Upcoming Matches</Text>
          </View>
          {UpcomingMatches.map(() => (
            <MatchCard key={Math.random()} />
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  )
}

export default Home
