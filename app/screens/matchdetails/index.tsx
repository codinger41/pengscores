import React from 'react'
import { Text, View, ScrollView, ImageBackground, Image } from 'react-native'
import Modalize from 'react-native-modalize'
import Header from '../../components/header'
import Odds from '../../components/odds'
import styles from './styles'
import { getHeight } from '../../utils/styles'

const background = require('../../../assets/epl.png')
const manchester_united = require('../../../assets/manchester-united.png')
const barcelona = require('../../../assets/barcelona.png')

const Home = ({ navigation }: ScreenProp) => {
  return (
    <View style={styles.container}>
      <Header
        title="Home"
        leftIcon="back"
        titleColor="#FFFFFF"
        onPressLeft={() => navigation.goBack()}
      />
      <ImageBackground
        source={background}
        style={styles.imgbackground}
        imageStyle={styles.background}
      >
        <View style={styles.livePill}>
          <Text style={styles.liveText}>LIVE 39'</Text>
        </View>
        <Text style={styles.leagueText}>English Premier League</Text>
        <Text style={styles.weekText}>Week 20</Text>
        <View style={styles.row}>
          <View style={styles.column}>
            <Image style={styles.logo} source={manchester_united} />
            <Text style={styles.clubText}>Man United</Text>
          </View>
          <Text style={styles.scores}>3 : 1</Text>
          <View style={styles.column}>
            <Image style={styles.logo} source={barcelona} />
            <Text style={styles.clubText}>barcelona</Text>
          </View>
        </View>
        <View style={styles.stats}>
          <View style={styles.statsRow}>
            <Text style={styles.statValue}>90</Text>
            <Text style={styles.statDesc}>Possession</Text>
            <Text style={styles.statValue}>10</Text>
          </View>
          <View style={styles.statsRow}>
            <Text style={styles.statValue}>900</Text>
            <Text style={styles.statDesc}>Shots</Text>
            <Text style={styles.statValue}>2</Text>
          </View>
          <View style={styles.statsRow}>
            <Text style={styles.statValue}>542</Text>
            <Text style={styles.statDesc}>Passes</Text>
            <Text style={styles.statValue}>5</Text>
          </View>
        </View>
      </ImageBackground>
      <Modalize
        alwaysOpen={getHeight(300)}
        HeaderComponent={() => (
          <Text style={styles.modalHeader}>Match Results</Text>
        )}
        modalStyle={styles.modal}
      >
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Scorers</Text>
          <Text style={styles.sectionValue}>1. Rashford 10'</Text>
          <Text style={styles.sectionValue}>2. Rashford 12'</Text>
          <Text style={styles.sectionValue}>3. Rashford 13'</Text>
          <Text style={styles.sectionValue}>4. Messi 90'</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Odds</Text>
          <Odds />
        </View>
      </Modalize>
    </View>
  )
}

export default Home
