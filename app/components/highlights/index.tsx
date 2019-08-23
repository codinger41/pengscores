import React from 'react'
import { View, Text, Image } from 'react-native'
import { getFirstWord } from '../../utils/helpers'
import styles from './styles'

type HighlightsProps = {
  home: string
  away: string
  events: Array<any>
}

const yellowcard = require('../../../assets/yellowcard.png')
const redcard = require('../../../assets/redcard.png')
const Goal = require('../../../assets/football.png')
const subst = require('../../../assets/substitution.png')

const Icons = {
  'Yellow Card': yellowcard,
  'Red Card': redcard,
  Goal,
  subst
}

const HighLights = ({ home, away, events }: HighlightsProps) => {
  const getIcon = (eventType: string, detail: string) => {
    if (eventType !== 'Card') return Icons[eventType]

    return Icons[detail]
  }
  return (
    <View style={styles.container}>
      {events &&
        events.map(event => (
          <React.Fragment
            key={`${event.teamName}${event.detail}${event.player}`}
          >
            {event.teamName === home && (
              <View style={styles.eventCardHome}>
                <Image
                  style={styles.image}
                  source={getIcon(event.type, event.detail)}
                />
                <Text style={styles.player}>{getFirstWord(event.player)}</Text>
                <Text style={styles.time}>{event.elapsed}</Text>
              </View>
            )}
            {event.teamName === away && (
              <View style={styles.eventCardAway}>
                <Text style={styles.time}>{event.elapsed}</Text>
                <Text style={styles.player}>{getFirstWord(event.player)}</Text>
                <Image
                  style={styles.image}
                  source={getIcon(event.type, event.detail)}
                />
              </View>
            )}
          </React.Fragment>
        ))}
    </View>
  )
}

export default HighLights
