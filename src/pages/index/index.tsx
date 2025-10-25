import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import dayjs from 'dayjs'
import { useNow } from './useNow'
import './index.scss'

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  const now = useNow()
  const timestring = dayjs(now).format('HH:mm:ss')
  const datestr = dayjs().format('ddd DD MMM').toUpperCase()

  return (
    <View className="container">
      <Text className="time-txt">{timestring}</Text>
      <Text className="date-text">{datestr}</Text>
    </View>
  )
}
