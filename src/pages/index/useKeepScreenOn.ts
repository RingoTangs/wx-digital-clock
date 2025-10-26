import Taro, { useDidShow } from '@tarojs/taro'
import { useCallback } from 'react'

/**
 * 保持屏幕长亮
 */
export const useKeepScreenOn = () => {
  const fn = useCallback(() => {
    Taro.setKeepScreenOn({ keepScreenOn: true })
  }, [])

  useDidShow(() => {
    console.log('app show.set keep screen on')
    fn()
  })
}
