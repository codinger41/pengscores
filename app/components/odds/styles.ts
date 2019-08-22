import { StyleSheet } from 'react-native'
import { getHeight, getWidth } from '../../utils/styles'

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: getHeight(2),
    alignSelf: 'center',
    width: getWidth(200)
  },
  club: {
    color: '#7c7b82',
    fontSize: getHeight(20),
    fontWeight: 'bold'
  },
  vs: {
    color: '#c6c6c8',
    marginTop: getHeight(5)
  },
  score: {
    color: '#c4c6cf',
    fontSize: getHeight(22)
  },
  imageContainer: {
    opacity: 0.2
  },
  image: {},
  oddsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  oddPill: {
    width: getWidth(100),
    height: getHeight(40),
    marginVertical: getHeight(4),
    backgroundColor: '#f4f6fa',
    borderRadius: getWidth(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: getHeight(27),
    alignItems: 'center'
  },
  oddPill2: {
    width: getWidth(100),
    height: getHeight(40),
    marginVertical: getHeight(4),
    backgroundColor: '#f67f4f',
    borderRadius: getWidth(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: getHeight(27),
    alignItems: 'center'
  },
  oddTitle: {
    color: '#c3c4ca',
    fontWeight: 'bold'
  },
  oddValue: {
    color: '#3353dd',
    fontWeight: 'bold'
  },
  oddValue2: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  }
})

export default styles
