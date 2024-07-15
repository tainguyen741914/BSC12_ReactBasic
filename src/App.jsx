import { useState } from 'react'
import HeaderDemo from './components/HeaderDemo'
import HomeComponent from './components/HomeComponent'
import HeaderComponent from './components/HeaderComponent'
import NavigationComponent from './components/NavigationComponent'
import ContentComponent from './components/ContentComponent'
import FooterComponent from './components/FooterComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HeaderDemo/>
    <HomeComponent/>
    <HeaderComponent/>
    <div className="grid grid-cols-3 h-32">
    <NavigationComponent/>
    <ContentComponent/>
    </div>
    <FooterComponent/>
    </>
  )
}

export default App
