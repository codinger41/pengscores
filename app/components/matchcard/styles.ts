import { StyleSheet } from 'react-native'
import { getHeight, getWidth } from '../../utils/styles'

const styles = StyleSheet.create({
  container: {
    marginHorizontal: getWidth(15),
    paddingHorizontal: getWidth(15),
    width: getWidth(350),
    height: getHeight(130),
    alignSelf: 'center',
    borderRadius: getWidth(15),
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    paddingVertical: getHeight(10),
    marginBottom: getHeight(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3
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
  logo: {
    height: getHeight(60),
    width: getWidth(60),
    resizeMode: 'contain'
  },
  column: {
    flexDirection: 'column',
    height: getHeight(90),
    width: getWidth(120),
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: getHeight(2),
    alignSelf: 'center',
    width: getWidth(250)
  },
  club: {
    color: '#7c7b82',
    fontSize: getHeight(15),
    fontFamily: 'ubuntu',
    fontWeight: 'bold'
  },
  vs: {
    color: '#c6c6c8',
    marginTop: getHeight(5)
  },
  score: {
    color: '#c4c6cf',
    fontSize: getHeight(22),
    fontFamily: 'ubuntu'
  },
  imageContainer: {
    opacity: 0.2
  },
  image: {},
  date: {
    color: '#3353dd',
    fontSize: getHeight(15),
    fontFamily: 'ubuntu',
    alignSelf: 'center'
  }
})

export default styles
