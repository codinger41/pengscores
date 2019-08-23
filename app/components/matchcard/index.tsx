import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { withNavigation } from 'react-navigation'
import { getFirstWord } from '../../utils/helpers'
import Odds from '../odds'
import styles from './styles'

const image = require('../../../assets/epl.png')

type MatchCardProps = {
  match: any
  key: number
} & ScreenProp

const MatchCard = ({ navigation, match }: MatchCardProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.6}
      onPress={() =>
        navigation.navigate('MatchDetails', { fixtureId: match.fixture_id })
      }
    >
      <View style={styles.row}>
        <Text style={styles.club}>
          {getFirstWord(match.homeTeam.team_name)}
        </Text>
        <Text style={styles.vs}>VS</Text>
        <Text style={styles.club}>
          {getFirstWord(match.awayTeam.team_name)}
        </Text>
      </View>
      <Odds />
    </TouchableOpacity>
  )
}

export default withNavigation(MatchCard)
