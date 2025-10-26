import { View, Text } from '@tarojs/components'
import { useReady } from '@tarojs/taro'
import dayjs from 'dayjs'
import { useState } from 'react'
import { useNow } from './useNow'
import { useKeepScreenOn } from './useKeepScreenOn'
import './index.scss'

export default function Index() {
  const [navBarHeight, setNavBarHeight] = useState<number>(0)

  useReady(() => {
    const height = 44
    setNavBarHeight(height)
  })

  useKeepScreenOn()

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
