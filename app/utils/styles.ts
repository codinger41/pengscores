import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'

const main: any = {
  h_1: hp('0.123%'),
  h_2: hp('0.246%'),
  h_5: hp('0.615%'),
  h_10: hp('1.23%'),
  h_20: hp('2.46%'),
  h_50: hp('6.15%'),
  h_100: hp('12.3%'),
  h_200: hp('24.6%'),
  h_500: hp('61.5%'),
  w_1: wp('0.267%'),
  w_2: wp('0.533%'),
  w_5: wp('1.333%'),
  w_10: wp('2.67%'),
  w_20: wp('5.33%'),
  w_50: wp('13.33%'),
  w_100: wp('26.67%'),
  w_200: wp('53.33%'),
  w_500: wp('133.33%')
}

const getComputed = (value: number, type: string) => {
  let total = 0
  while (value > 0) {
    ;[500, 200, 100, 50, 20, 10, 5, 2, 1].forEach(i => {
      if (value >= i) {
        total += main[`${type}_${i}`]
        value -= i
      }
    })
  }
  return total
}

export const getWidth = (value: number) => getComputed(value, 'w')
export const getHeight = (value: number) => getComputed(value, 'h')
