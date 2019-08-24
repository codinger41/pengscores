import React from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import { withNavigation } from 'react-navigation'
import { getFirstWord, getDate } from '../../utils/helpers'
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
      <Text style={styles.date}>{getDate(match.event_date)}</Text>
      <View style={styles.row}>
        <View style={styles.column}>
          <Image style={styles.logo} source={{ uri: match.homeTeam.logo }} />
          <Text style={styles.club}>
            {getFirstWord(match.homeTeam.team_name)}
          </Text>
        </View>
        <Text style={styles.vs}>VS</Text>
        <View style={styles.column}>
          <Image style={styles.logo} source={{ uri: match.awayTeam.logo }} />
          <Text style={styles.club}>
            {getFirstWord(match.awayTeam.team_name)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default withNavigation(MatchCard)
