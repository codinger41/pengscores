import React from 'react'
import { View, TouchableOpacity, Text, ImageBackground } from 'react-native'
import { ProgressBar, Colors } from 'react-native-paper'
import styles from './styles'

const image = require('../../../assets/epl.png')

interface MatchCardProps {}

const MatchCard = ({  }: MatchCardProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.club}>Chelsea</Text>
        <Text style={styles.vs}>VS</Text>
        <Text style={styles.club}>Juventus</Text>
      </View>
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
    </TouchableOpacity>
  )
}

export default MatchCard
