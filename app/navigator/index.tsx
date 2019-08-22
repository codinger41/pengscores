import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from '../screens/home'

const Navigator = createStackNavigator({
  Home
}, {
  initialRouteName: 'Home',
  headerMode: 'none'
})


export default createAppContainer(Navigator)
