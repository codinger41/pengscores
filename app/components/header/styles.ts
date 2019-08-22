import { StyleSheet } from 'react-native'
import { getHeight, getWidth } from '../../utils/styles'

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: getWidth(10),
    height: getHeight(80),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerIcon: {
    marginTop: getHeight(30)
  },
  titleText: {
    fontSize: getHeight(20),
    fontFamily: 'ubuntu',
    marginTop: getHeight(30),
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  rightIcon: {
    width: getWidth(40)
  }
})

export default styles
