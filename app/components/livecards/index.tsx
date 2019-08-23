import React from 'react'
import { View, TouchableOpacity, Text, ImageBackground } from 'react-native'
import { ProgressBar } from 'react-native-paper'
import { withNavigation } from 'react-navigation'
import { getFirstWord, getMatchProgress } from '../../utils/helpers'
import styles from './styles'

const image = require('../../../assets/epl.png')

type LiveMatchProps = {
  match: any
  key: number
} & ScreenProp

const LiveCards = ({ navigation, match }: LiveMatchProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.6}
      onPress={() =>
        navigation.navigate('MatchDetails', { fixtureId: match.fixture_id })
      }
    >
      <ImageBackground
        source={image}
        style={styles.image}
        imageStyle={styles.imageContainer}
      >
        <View style={styles.livePill}>
          <Text style={styles.liveText}>LIVE</Text>
        </View>
        <View style={styles.clubs}>
          <View style={styles.row}>
            <Text style={styles.club}>
              {getFirstWord(match.homeTeam.team_name)}
            </Text>
            <Text style={styles.score}>{match.goalsHomeTeam}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.club}>
              {getFirstWord(match.awayTeam.team_name)}
            </Text>
            <Text style={styles.score}>{match.goalsAwayTeam}</Text>
          </View>
        </View>
        <ProgressBar
          progress={getMatchProgress(match.elapsed)}
          color="#1fef4c"
        />
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default withNavigation(LiveCards)
