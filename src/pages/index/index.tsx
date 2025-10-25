import { View, Text } from '@tarojs/components'
import Taro, { useLoad, useReady } from '@tarojs/taro'
import dayjs from 'dayjs'
import { useState } from 'react'
import { useNow } from './useNow'
import './index.scss'

export default function Index() {
  const [navBarHeight, setNavBarHeight] = useState<number>(0)

  useLoad(() => {
    console.log('Page loaded.')
  })

  useReady(() => {
    console.log('ready')
    const height = 44
    setNavBarHeight(height)
  })

  const now = useNow()
  const timestring = dayjs(now).format('HH:mm:ss')
  const datestr = dayjs().format('ddd DD MMM').toUpperCase()

  return (
    <View className="container">
      <View className="inner-container" style={{ marginTop: -navBarHeight }}>
        <Text className="time-txt">{timestring}</Text>
        <Text className="date-text">{datestr}</Text>
      </View>
    </View>
  )
}
