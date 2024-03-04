import Initial from './pages/initial'
import About from './pages/about';
import Projects from './pages/projects';
import ScreenScrolling from './ScreenScrolling';
import './App.css'
import 'tailwindcss/tailwind.css';
function App() {
  
  return (
    <ScreenScrolling>
        <Initial/>
        <About/>
        <Projects/>
    </ScreenScrolling>
  )
}

export default App
