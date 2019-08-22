import React from 'react'
import { View, TouchableOpacity, Text, ImageBackground } from 'react-native'
import { ProgressBar, Colors } from 'react-native-paper';
import styles from './styles'


const image = require('../../../assets/epl.png')

interface LiveMatchProps {

}

const LiveCards = ({  }: LiveMatchProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground source={image} style={styles.image} imageStyle={styles.imageContainer}>
        <View style={styles.livePill}>
          <Text style={styles.liveText}>LIVE</Text>
        </View>
        <View style={styles.clubs}>
          <View style={styles.row}>
            <Text style={styles.club}>Juventus</Text>
            <Text style={styles.score}>2</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.club}>Chelsea</Text>
            <Text style={styles.score}>0</Text>
          </View>
        </View>
        <ProgressBar progress={0.5} color='#1fef4c' />
      </ImageBackground>
    </TouchableOpacity>
  );
}

export default LiveCards
