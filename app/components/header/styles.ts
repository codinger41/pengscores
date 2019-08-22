import { StyleSheet } from 'react-native'
import { getHeight, getWidth } from '../../utils/styles'

const styles = StyleSheet.create({
  container: {
    flex: 0.11,
    paddingHorizontal: getWidth(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F6F7FB'
  },
  headerIcon: {
    marginTop: getHeight(30)
  },
  titleText: {
    fontSize: getHeight(20),
    marginTop: getHeight(30)
  }
})

export default styles
