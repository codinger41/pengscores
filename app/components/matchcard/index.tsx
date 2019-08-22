import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { withNavigation } from 'react-navigation'
import Odds from '../odds'
import styles from './styles'

const image = require('../../../assets/epl.png')

type MatchCardProps = {} & ScreenProp

const MatchCard = ({ navigation }: MatchCardProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.6}
      onPress={() => navigation.navigate('MatchDetails')}
    >
      <View style={styles.row}>
        <Text style={styles.club}>Chelsea</Text>
        <Text style={styles.vs}>VS</Text>
        <Text style={styles.club}>Juventus</Text>
      </View>
      <Odds />
    </TouchableOpacity>
  )
}

export default withNavigation(MatchCard)
