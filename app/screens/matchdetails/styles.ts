import { StyleSheet } from 'react-native'
import { getHeight, getWidth } from '../../utils/styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3353dd'
  },
  titleContainer: {
    paddingHorizontal: getWidth(15),
    paddingVertical: getHeight(10),
    height: getHeight(80)
  },
  titleText: {
    fontSize: getHeight(22),
    fontWeight: '500',
    color: '#4f525d'
  },
  titleBody: {
    fontSize: getHeight(30),
    fontWeight: '700',
    color: '#363944'
  },
  horizontalScroll: {
    alignItems: 'center',
    marginTop: getHeight(20),
    height: getHeight(260)
  },
  upcomingmatches: {
    paddingHorizontal: getWidth(15)
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: getHeight(10)
  },
  upcomingText: {
    fontSize: getHeight(22),
    fontWeight: '500',
    color: '#4f525d'
  },
  background: {
    opacity: 0.1
  },
  imgbackground: {
    flex: 0.5,
    paddingHorizontal: getWidth(20),
    alignItems: 'center'
  },
  livePill: {
    backgroundColor: '#ffffff',
    width: getWidth(100),
    height: getHeight(30),
    borderRadius: getWidth(15),
    marginTop: getHeight(20),
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7
  },
  liveText: {
    color: '#3353dd',
    fontWeight: 'bold',
    fontSize: getHeight(18)
  },
  leagueText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: getHeight(20),
    marginVertical: getHeight(10)
  },
  weekText: {
    color: '#b1bef0',
    fontWeight: 'bold',
    fontSize: getHeight(17)
  },
  logo: {
    height: getHeight(80),
    width: getWidth(120),
    resizeMode: 'contain'
  },
  scores: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: getHeight(40),
    alignSelf: 'center',
    marginBottom: getHeight(40)
  },
  column: {
    flexDirection: 'column'
  },
  clubText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: getHeight(15),
    marginVertical: getHeight(10),
    alignSelf: 'center'
  },
  stats: {
    width: getWidth(330),
    marginTop: getHeight(20),
    height: getHeight(110),
    borderRadius: getWidth(20),
    backgroundColor: '#3e5bde'
  },
  statsRow: {
    flexDirection: 'row',
    width: getWidth(200),
    marginTop: getHeight(10),
    alignSelf: 'center',
    justifyContent: 'space-between'
  },
  statDesc: {
    color: '#b1bef0',
    fontWeight: 'bold',
    fontSize: getHeight(17),
    width: getWidth(100)
  },
  statValue: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: getHeight(15),
    alignSelf: 'center'
  },
  modalHeader: {
    color: '#7a7980',
    fontWeight: 'bold',
    fontSize: getHeight(25),
    marginVertical: getHeight(10),
    alignSelf: 'center'
  },
  modal: {
    paddingHorizontal: getWidth(15)
  },
  section: {
    marginVertical: getHeight(15)
  },
  sectionTitle: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: getHeight(17)
  },
  sectionValue: {
    color: '#7a7980',
    fontWeight: 'bold',
    fontSize: getHeight(15),
    marginLeft: getHeight(15)
  }
})

export default styles
