import React from 'react'
import { AdMobBanner } from 'expo-ads-admob'
import { View, Platform } from 'react-native'

type BannerProps = {
  style?: any
}

let unitID

const Banner = ({ style = {} }: BannerProps) => {
  if (Platform.OS === 'android') {
    unitID = 'ca-app-pub-1065143922822854/4953472889'
  } else {
    unitID = 'ca-app-pub-1065143922822854~3308578099'
  }
  return (
    <View style={[style, { height: 20, zIndex: 1 }]}>
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID={unitID}
        onDidFailToReceiveAdWithError={err => console.log(err)}
        // testDeviceID={"EMULATOR"}
      />
    </View>
  )
}

export default Banner
