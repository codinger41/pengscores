import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import styles from './styles'

const ICONS = {
  grid: () => (
    <Entypo name="grid" color="#C4C5C9" style={styles.headerIcon} size={29} />
  ),
  back: () => (
    <Entypo
      name="chevron-left"
      color="#C4C5C9"
      style={styles.headerIcon}
      size={29}
    />
  )
}

interface HeaderProps {
  leftIcon: 'grid' | 'back'
  rightIcon?: string
  title?: string
  onPressLeft?: Function
  titleColor?: string
}

const Header = ({
  leftIcon,
  title,
  rightIcon,
  onPressLeft,
  titleColor
}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onPressLeft()}>
        {ICONS[leftIcon]()}
      </TouchableOpacity>
      {title && (
        <Text style={[styles.titleText, titleColor && { color: titleColor }]}>
          {title}
        </Text>
      )}
      {rightIcon ? (
        <TouchableOpacity>{ICONS[leftIcon]()}</TouchableOpacity>
      ) : (
        <View style={styles.rightIcon} />
      )}
    </View>
  )
}

export default Header
