import { Text, View } from '@tarojs/components'
import { useReady } from '@tarojs/taro'
import dayjs from 'dayjs'
import { useState } from 'react'
import { useNow } from './useNow'
import { useKeepScreenOn } from './useKeepScreenOn'
import { TimeFormat } from './TimeFormat'
import styles from './index.module.scss'

export default function Index() {
  const [navBarHeight, setNavBarHeight] = useState<number>(0)

  useReady(() => {
    const height = 44
    setNavBarHeight(height)
  })

  useKeepScreenOn()

  const now = useNow()
  // const timestring = dayjs(now).format('HH:mm:ss')
  const datestr = dayjs().format('ddd DD MMM').toUpperCase()

  return (
    <View className={styles.container}>
      <View
        className={styles.inner_container}
        style={{ marginTop: -navBarHeight }}
      >
        <TimeFormat date={now} />
        <Text className={styles.datetext}>{datestr}</Text>
      </View>
    </View>
  )
}
