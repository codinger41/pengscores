import { StyleSheet } from 'react-native'
import { getHeight, getWidth } from '../../utils/styles'

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: getWidth(15),
    alignSelf: 'center',
    width: getWidth(365),
    borderRadius: getWidth(15),
    paddingVertical: getHeight(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.29,
    shadowRadius: 1.65,
    elevation: 2
  },
  eventCardHome: {
    width: getWidth(160),
    height: getHeight(40),
    backgroundColor: '#ffffff',
    alignItems: 'center',
    marginVertical: getHeight(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: getWidth(10)
  },
  eventCardAway: {
    width: getWidth(160),
    height: getHeight(40),
    marginVertical: getHeight(5),
    marginLeft: getWidth(175),
    backgroundColor: '#ffffff',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: getWidth(10)
  },
  clubs: {
    marginTop: getHeight(100)
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: getHeight(2)
  },
  player: {
    fontSize: getHeight(15),
    fontFamily: 'ubuntu',
    color: '#7a7980',
    fontWeight: 'bold'
  },
  time: {
    color: '#000000',
    fontSize: getHeight(16),
    fontFamily: 'ubuntu'
  },
  imageContainer: {
    opacity: 0.2
  },
  image: {
    resizeMode: 'contain',
    height: getHeight(25),
    width: getWidth(20)
  }
})

export default styles
