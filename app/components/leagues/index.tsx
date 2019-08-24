import React, { useContext } from 'react'
import { ScrollView, Text, Image } from 'react-native'
import Context from '../../contexts/matches'
import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

type LeaguesProps = {}

const epl = require('../../../assets/epl.png')
const laLiga = require('../../../assets/la-liga.png')
const league1 = require('../../../assets/league-1.png')
const bundesliga = require('../../../assets/bundesliga.png')

const leagues = [
  { name: 'EPL', logo: epl, id: 524 },
  { name: 'La Liga', logo: laLiga, id: 775 },
  { name: 'Ligue 1', logo: league1, id: 525 },
  { name: 'Bundesliga', logo: bundesliga, id: 754 }
]

const Leagues = ({  }: LeaguesProps) => {
  const context: any = useContext(Context)

  const {
    matchesReducer: { league: activeLeague },
    changeLeague
  } = context

  return (
    <ScrollView
      horizontal
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsHorizontalScrollIndicator={false}
    >
      {leagues &&
        leagues.map(league => (
          <TouchableOpacity
            key={league.name}
            onPress={() => changeLeague(league.id)}
            style={[
              styles.leaguePill,
              league.id === activeLeague && styles.activeLeague
            ]}
          >
            <Image source={league.logo} style={styles.image} />
            <Text style={styles.leageText}>{league.name}</Text>
          </TouchableOpacity>
        ))}
    </ScrollView>
  )
}

export default Leagues
