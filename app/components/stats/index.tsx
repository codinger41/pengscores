import React from 'react'
import { Text, View, ImageBackground, Image } from 'react-native'
import styles from '../../screens/matchdetails/styles'

interface StatsProp {
  stats: object
}

const Stats = ({ stats }: StatsProp) => {
  return (
    <View style={styles.stats}>
      <View style={styles.statsRow}>
        <Text style={styles.statValue}>
          {(stats && stats['Ball Possession']['home']) || 0}
        </Text>
        <Text style={styles.statDesc}>Possession</Text>
        <Text style={styles.statValue}>
          {(stats && stats['Ball Possession']['away']) || 0}
        </Text>
      </View>
      <View style={styles.statsRow}>
        <Text style={styles.statValue}>
          {(stats && stats['Total Shots']['home']) || 0}
        </Text>
        <Text style={styles.statDesc}>Shots</Text>
        <Text style={styles.statValue}>
          {(stats && stats['Total Shots']['away']) || 0}
        </Text>
      </View>
      <View style={styles.statsRow}>
        <Text style={styles.statValue}>
          {(stats && stats['Total Shots']['home']) || 0}
        </Text>
        <Text style={styles.statDesc}>Shots on Goal</Text>
        <Text style={styles.statValue}>
          {(stats && stats['Total Shots']['away']) || 0}
        </Text>
      </View>
      <View style={styles.statsRow}>
        <Text style={styles.statValue}>
          {(stats && stats['Passes %']['home']) || 0}
        </Text>
        <Text style={styles.statDesc}>Passes</Text>
        <Text style={styles.statValue}>
          {(stats && stats['Passes %']['away']) || 0}
        </Text>
      </View>
      <View style={styles.statsRow}>
        <Text style={styles.statValue}>
          {(stats && stats['Fouls']['home']) || 0}
        </Text>
        <Text style={styles.statDesc}>Fouls</Text>
        <Text style={styles.statValue}>
          {(stats && stats['Fouls']['away']) || 0}
        </Text>
      </View>
      <View style={styles.statsRow}>
        <Text style={styles.statValue}>
          {(stats && stats['Yellow Cards']['home']) || 0}
        </Text>
        <Text style={styles.statDesc}>Yellow Cards</Text>
        <Text style={styles.statValue}>
          {(stats && stats['Yellow Cards']['away']) || 0}
        </Text>
      </View>
      <View style={styles.statsRow}>
        <Text style={styles.statValue}>
          {(stats && stats['Goalkeeper Saves']['home']) || 0}
        </Text>
        <Text style={styles.statDesc}>Saves</Text>
        <Text style={styles.statValue}>
          {(stats && stats['Goalkeeper Saves']['away']) || 0}
        </Text>
      </View>
      <View style={styles.statsRow}>
        <Text style={styles.statValue}>
          {(stats && stats['Offsides']['home']) || 0}
        </Text>
        <Text style={styles.statDesc}>Offsides</Text>
        <Text style={styles.statValue}>
          {(stats && stats['Offsides']['away']) || 0}
        </Text>
      </View>
    </View>
  )
}

export default Stats
