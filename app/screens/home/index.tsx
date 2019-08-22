import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import Header from '../../components/header'
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
  return (
    <View style={styles.container}>
      <Header title="Home" leftIcon="grid" />
      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Today</Text>
          <Text style={styles.titleBody}>Soccer Matches</Text>
        </View>
        <ScrollView
          horizontal
          style={{ flex: 0.1 }}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScroll}
        >
          {LiveMatches.map(() => (
            <LiveMatchCard key={Math.random()} />
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
