import { Text, View } from '@tarojs/components'
import dayjs from 'dayjs'
import { fontsConfig } from './config'
import './TimeFormat.scss'

const formatFn: (n: number) => [string, string] = (n: number) => {
  let str = n < 10 ? `0${n}` : n.toString()
  return [str.slice(0, 1), str.slice(1, 2)]
}

export const TimeFormat: React.FC<{ date: Date }> = ({ date }) => {
  const now = dayjs(date)
  const hours = formatFn(now.hour())
  const minutes = formatFn(now.minute())
  const seconds = formatFn(now.second())
  const { fontSize, width } = fontsConfig['Orbitron']

  return (
    <View className="timeformat" style={{ fontSize: fontSize }}>
      <Text className="digital" style={{ width }}>
        {hours[0]}
      </Text>
      <Text className="digital" style={{ width }}>
        {hours[1]}
      </Text>
      <Text>:</Text>
      <Text className="digital" style={{ width }}>
        {minutes[0]}
      </Text>
      <Text className="digital" style={{ width }}>
        {minutes[1]}
      </Text>
      <Text>:</Text>
      <Text className="digital" style={{ width }}>
        {seconds[0]}
      </Text>
      <Text className="digital" style={{ width }}>
        {seconds[1]}
      </Text>
    </View>
  )
}
