import React, { useEffect, useContext } from 'react'
import { Text, View, ImageBackground, Image } from 'react-native'
import Modalize from 'react-native-modalize'
import { ActivityIndicator } from 'react-native-paper'
import Header from '../../components/header'
import HighLights from '../../components/highlights'
import Stats from '../../components/stats'
import Banner from '../../components/admob'
import MatchContext from '../../contexts/matches'
import styles from './styles'
import { getHeight } from '../../utils/styles'
import { getDate } from '../../utils/helpers'

const background = require('../../../assets/epl.png')

const Home = ({ navigation }: ScreenProp) => {
  const context: any = useContext(MatchContext)
  const {
    state: {
      params: { fixtureId }
    }
  } = navigation

  const {
    matchesReducer: {
      singleMatch,
      singleMatchStat,
      singleMatchLoading,
      singleMatchEvents,
      singleMatchEventsLoading
    },
    getMatchDetails,
    getMatchStat,
    getMatchEvents
  } = context

  useEffect(() => {
    getMatchDetails(fixtureId)
    getMatchStat(fixtureId)
    getMatchEvents(fixtureId)
  }, [fixtureId])

  let matchHasNotStarted
  let matchHasFinished

  if (singleMatch) {
    if (singleMatch.status === 'Not Started') {
      matchHasNotStarted = true
    } else if (singleMatch.status === 'Time To Be Defined') {
      matchHasNotStarted = true
    } else if (singleMatch.status === 'Match Finished') {
      matchHasFinished = true
    }
  }

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
            {!matchHasNotStarted && !matchHasFinished && (
              <View style={styles.livePill}>
                <Text style={styles.liveText}>LIVE {singleMatch.elapsed}'</Text>
              </View>
            )}
            <Text style={styles.leagueText}>{singleMatch.round}</Text>
            <Text style={styles.weekText}>{singleMatch.status}</Text>
            {matchHasNotStarted && (
              <Text style={styles.dateText}>
                {getDate(singleMatch.event_date)}
              </Text>
            )}
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
              {matchHasNotStarted ? (
                <Text style={styles.scores}>VS</Text>
              ) : (
                <Text style={styles.scores}>
                  {singleMatch.goalsHomeTeam} : {singleMatch.goalsAwayTeam}
                </Text>
              )}
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
            <Stats stats={singleMatchStat} />
          </View>
        )}
      </ImageBackground>
      <Banner style={styles.banner} />
      <Modalize
        alwaysOpen={getHeight(190)}
        HeaderComponent={() => (
          <Text style={styles.modalHeader}>Match Results</Text>
        )}
        modalStyle={styles.modal}
      >
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Highlights</Text>
          {singleMatch && (
            <HighLights
              home={singleMatch.homeTeam.team_name}
              away={singleMatch.awayTeam.team_name}
              events={singleMatchEvents}
            />
          )}
        </View>
      </Modalize>
    </View>
  )
}

export default Home
