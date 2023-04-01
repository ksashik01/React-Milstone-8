import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Device from './component/Device'
import Watch from './component/Watch/Watch'
import Dial from './component/Dial/Dial'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

<Device name="iPhone" price = "13000"></Device>
<Device name="Symphony" price = "1000"></Device>
<Watch></Watch>



      
    </div>
  )
}

export default App
