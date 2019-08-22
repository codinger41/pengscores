import { StyleSheet, Platform } from 'react-native'
import { getHeight, getWidth } from '../../utils/styles'

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        height: getHeight(80),
        paddingHorizontal: getWidth(10)
      },
      android: {
        height: getHeight(70),
        alignItems: 'center'
      }
    }),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerIcon: {
    ...Platform.select({
      ios: {
        marginTop: getHeight(30)
      }
    })
  },
  titleText: {
    fontSize: getHeight(20),
    fontFamily: 'ubuntu',
    alignSelf: 'center',
    fontWeight: 'bold',
    ...Platform.select({
      ios: {
        marginTop: getHeight(30)
      }
    })
  },
  rightIcon: {
    width: getWidth(40)
  }
})

export default styles
