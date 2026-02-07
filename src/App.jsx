import { Routes, Route } from 'react-router'
import Terminal from './components/terminal'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'
import Skills from './components/skills'
import About from './components/about'
import Home from './components/home'
import './styles/App.css'

function App() {

  return (
    <>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Terminal />} >
            <Route index element={<Home />} />
            <Route path='about' element={<About />}/>
            <Route path='projects'element={<Projects />}/>
            <Route path='skills' element={<Skills />}/>
            <Route path='contact' element={<Contact />}  />
          </Route>
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
