import { StyleSheet } from 'react-native'
import { getHeight, getWidth } from '../../utils/styles'

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: getWidth(10),
    paddingVertical: getHeight(5),
    height: getHeight(55),
    marginTop: getHeight(20)
  },
  contentContainer: {},
  leaguePill: {
    backgroundColor: '#ffffff',
    width: getWidth(110),
    height: getHeight(40),
    borderRadius: getWidth(19),
    flexDirection: 'row',
    paddingHorizontal: getWidth(5),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: getWidth(5),
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7
  },
  image: {
    height: getHeight(30),
    width: getWidth(30),
    resizeMode: 'contain'
  },
  leageText: {
    fontSize: getHeight(13),
    fontFamily: 'ubuntu',
    marginRight: getWidth(30)
  },
  activeLeague: {
    borderWidth: 2,
    borderColor: '#3353dd'
  }
})

export default styles
