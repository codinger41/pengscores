import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

type OddsProps = {}

const Odds = ({  }: OddsProps) => {
  return (
    <View style={styles.oddsRow}>
      <View style={styles.oddPill}>
        <Text style={styles.oddTitle}>H</Text>
        <Text style={styles.oddValue}>5.55</Text>
      </View>
      <View style={styles.oddPill2}>
        <Text style={styles.oddTitle}>D</Text>
        <Text style={styles.oddValue2}>5.55</Text>
      </View>
      <View style={styles.oddPill}>
        <Text style={styles.oddTitle}>H</Text>
        <Text style={styles.oddValue}>5.55</Text>
      </View>
    </View>
  )
}

export default Odds
