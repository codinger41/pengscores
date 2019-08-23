import { StyleSheet } from 'react-native'
import { getHeight, getWidth } from '../../utils/styles'

const styles = StyleSheet.create({
  container: {
    marginLeft: getWidth(10),
    marginRight: getWidth(5),
    paddingHorizontal: getWidth(15),
    width: getWidth(160),
    height: getHeight(250),
    borderRadius: getWidth(15),
    backgroundColor: '#3353dd',
    paddingVertical: getHeight(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7
  },
  livePill: {
    backgroundColor: '#ffffff',
    width: getWidth(50),
    height: getHeight(25),
    borderRadius: getWidth(15),
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
    color: '#3353dd'
  },
  clubs: {
    marginTop: getHeight(100)
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: getHeight(2)
  },
  club: {
    color: '#FFFFFF',
    fontSize: getHeight(22),
    fontFamily: 'ubuntu',
    fontWeight: 'bold'
  },
  score: {
    color: '#c4c6cf',
    fontSize: getHeight(22),
    fontFamily: 'ubuntu'
  },
  imageContainer: {
    opacity: 0.2
  },
  image: {}
})

export default styles
