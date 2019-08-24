import { StyleSheet } from 'react-native'
import { getHeight, getWidth } from '../../utils/styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6fa'
    // backgroundColor: '#e2e5eb'
  },
  titleContainer: {
    paddingHorizontal: getWidth(15),
    paddingVertical: getHeight(10),
    height: getHeight(80)
  },
  titleText: {
    fontSize: getHeight(22),
    fontWeight: '500',
    fontFamily: 'ubuntu',
    color: '#4f525d'
  },
  titleBody: {
    fontSize: getHeight(30),
    fontWeight: '700',
    color: '#363944',
    fontFamily: 'ubuntu'
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
    fontSize: getHeight(18),
    fontWeight: '500',
    fontFamily: 'ubuntu',
    color: '#4f525d'
  },
  upcomingText2: {
    fontSize: getHeight(18),
    fontWeight: '500',
    fontFamily: 'ubuntu',
    color: '#4f525d',
    marginLeft: getWidth(20)
  },
  activityIndicator: {
    alignSelf: 'center',
    position: 'absolute',
    top: getHeight(250)
  }
})

export default styles
