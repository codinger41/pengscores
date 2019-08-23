import React, { useEffect, useContext } from 'react'
import { Text, View, ImageBackground, Image } from 'react-native'
import Modalize from 'react-native-modalize'
import { ActivityIndicator } from 'react-native-paper'
import Header from '../../components/header'
import Odds from '../../components/odds'
import HighLights from '../../components/highlights'
import MatchContext from '../../contexts/matches'
import styles from './styles'
import { getHeight } from '../../utils/styles'

const background = require('../../../assets/epl.png')

const Home = ({ navigation }: ScreenProp) => {
  const context: any = useContext(MatchContext)
  const {
    state: {
      params: { fixtureId }
    }
  } = navigation

  const {
    matchesReducer: { singleMatch, singleMatchStat, singleMatchLoading },
    getMatchDetails,
    getMatchStat
  } = context

  useEffect(() => {
    getMatchDetails(fixtureId)
    getMatchStat(fixtureId)
  }, [fixtureId])

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
        {singleMatchLoading || !singleMatch ? (
          <ActivityIndicator
            color="#ffffff"
            size="large"
            style={{ alignSelf: 'center' }}
          />
        ) : (
          <View style={styles.imgbackground}>
            <View style={styles.livePill}>
              <Text style={styles.liveText}>LIVE {singleMatch.elapsed}'</Text>
            </View>
            <Text style={styles.leagueText}>{singleMatch.round}</Text>
            <Text style={styles.weekText}>{singleMatch.status}</Text>
            <View style={styles.row}>
              <View style={styles.column}>
                <Image
                  style={styles.logo}
                  source={{ uri: singleMatch.homeTeam.logo }}
                />
                <Text style={styles.clubText}>
                  {singleMatch.homeTeam.team_name}
                </Text>
              </View>
              <Text style={styles.scores}>
                {singleMatch.goalsHomeTeam} : {singleMatch.goalsAwayTeam}
              </Text>
              <View style={styles.column}>
                <Image
                  style={styles.logo}
                  source={{ uri: singleMatch.awayTeam.logo }}
                />
                <Text style={styles.clubText}>
                  {singleMatch.awayTeam.team_name}
                </Text>
              </View>
            </View>
            <View style={styles.stats}>
              <View style={styles.statsRow}>
                <Text style={styles.statValue}>
                  {singleMatchStat['Ball Possession']['home']}
                </Text>
                <Text style={styles.statDesc}>Possession</Text>
                <Text style={styles.statValue}>
                  {singleMatchStat['Ball Possession']['away']}
                </Text>
              </View>
              <View style={styles.statsRow}>
                <Text style={styles.statValue}>
                  {singleMatchStat['Total Shots']['home']}
                </Text>
                <Text style={styles.statDesc}>Shots</Text>
                <Text style={styles.statValue}>
                  {singleMatchStat['Total Shots']['away']}
                </Text>
              </View>
              <View style={styles.statsRow}>
                <Text style={styles.statValue}>
                  {singleMatchStat['Total Shots']['home']}
                </Text>
                <Text style={styles.statDesc}>Shots on Goal</Text>
                <Text style={styles.statValue}>
                  {singleMatchStat['Total Shots']['away']}
                </Text>
              </View>
              <View style={styles.statsRow}>
                <Text style={styles.statValue}>
                  {singleMatchStat['Passes %']['home']}
                </Text>
                <Text style={styles.statDesc}>Passes</Text>
                <Text style={styles.statValue}>
                  {singleMatchStat['Passes %']['away']}
                </Text>
              </View>
              <View style={styles.statsRow}>
                <Text style={styles.statValue}>
                  {singleMatchStat['Fouls']['home']}
                </Text>
                <Text style={styles.statDesc}>Fouls</Text>
                <Text style={styles.statValue}>
                  {singleMatchStat['Fouls']['away']}
                </Text>
              </View>
              <View style={styles.statsRow}>
                <Text style={styles.statValue}>
                  {singleMatchStat['Yellow Cards']['home']}
                </Text>
                <Text style={styles.statDesc}>Yellow Cards</Text>
                <Text style={styles.statValue}>
                  {singleMatchStat['Yellow Cards']['away']}
                </Text>
              </View>
              <View style={styles.statsRow}>
                <Text style={styles.statValue}>
                  {singleMatchStat['Goalkeeper Saves']['home']}
                </Text>
                <Text style={styles.statDesc}>Saves</Text>
                <Text style={styles.statValue}>
                  {singleMatchStat['Goalkeeper Saves']['away']}
                </Text>
              </View>
              <View style={styles.statsRow}>
                <Text style={styles.statValue}>
                  {singleMatchStat['Offsides']['home']}
                </Text>
                <Text style={styles.statDesc}>Offsides</Text>
                <Text style={styles.statValue}>
                  {singleMatchStat['Offsides']['away']}
                </Text>
              </View>
            </View>
          </View>
        )}
      </ImageBackground>
      <Modalize
        alwaysOpen={getHeight(210)}
        HeaderComponent={() => (
          <Text style={styles.modalHeader}>Match Results</Text>
        )}
        modalStyle={styles.modal}
      >
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Highlights</Text>
          <HighLights
            home={singleMatch.homeTeam.team_name}
            away={singleMatch.awayTeam.team_name}
          />
        </View>
      </Modalize>
    </View>
  )
}

export default Home
