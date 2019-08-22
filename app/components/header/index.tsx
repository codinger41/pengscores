import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import styles from './styles'


const ICONS = {
  grid: () => <Entypo name="grid" color="#C4C5C9" style={styles.headerIcon} size={29} />
}

interface HeaderProps {
  leftIcon: 'grid' | 'back'
  title?: string
}

const Header = ({ leftIcon, title }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        {ICONS[leftIcon]()}
      </TouchableOpacity>
      <Text style={styles.titleText}>{title}</Text>
      <TouchableOpacity>
        {ICONS[leftIcon]()}
      </TouchableOpacity>
    </View>
  );
}

export default Header
