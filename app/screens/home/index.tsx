import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import Header from '../../components/header'
import LiveMatchCard from '../../components/livecards'
import styles from './styles'

const Home = ({ navigation }: ScreenProp) => {
  return (
    <View style={styles.container}>
      <Header title="Home" leftIcon="grid" />
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Today</Text>
        <Text style={styles.titleBody}>Soccer Matches</Text>
      </View>
      <ScrollView horizontal style={styles.horizontalScroll}>
        <LiveMatchCard />
        <LiveMatchCard />
      </ScrollView>
    </View>
  )
}

export default Home
