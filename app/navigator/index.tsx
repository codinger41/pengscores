import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from '../screens/home'
import MatchDetails from '../screens/matchdetails'

const Navigator = createStackNavigator(
  {
    Home,
    MatchDetails
  },
  {
    initialRouteName: 'MatchDetails',
    headerMode: 'none'
  }
)

export default createAppContainer(Navigator)
