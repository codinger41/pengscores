import React from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import styles from './styles'

type HighlightsProps = {
  home: string
  away: string
}

const yellowcard = require('../../../assets/yellowcard.png')
const redcard = require('../../../assets/redcard.png')
const football = require('../../../assets/football.png')

const Icons = {
  yellowcard,
  redcard,
  football
}

const HighLights = ({ home, away }: HighlightsProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.eventCardHome}>
        <Image style={styles.image} source={Icons.football} />
        <Text style={styles.player}>Rashford</Text>
        <Text style={styles.time}>90'</Text>
      </View>
      <View style={styles.eventCardAway}>
        <Text style={styles.time}>50'</Text>
        <Text style={styles.player}>Rashford</Text>
        <Image style={styles.image} source={Icons.yellowcard} />
      </View>
    </View>
  )
}

export default HighLights
