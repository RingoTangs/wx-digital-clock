import { PropsWithChildren } from 'react'
import Taro from '@tarojs/taro'
import './app.scss'

Taro.loadFontFace({
  global: true,
  family: 'Orbitron',
  source:
    'url("https://ringotangs-fonts.oss-cn-shanghai.aliyuncs.com/Orbitron/Orbitron-VariableFont_wght.ttf")',
})

function App({ children }: PropsWithChildren<any>) {
  // children 是将要会渲染的页面
  return children
}

export default App
