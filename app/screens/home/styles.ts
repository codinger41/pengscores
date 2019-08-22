import { StyleSheet } from 'react-native'
import { getHeight, getWidth } from '../../utils/styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7FB'
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
    flex: 0.1,
    marginTop: getHeight(30)
  }
})

export default styles
