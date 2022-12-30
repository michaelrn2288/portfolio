import { Route, Routes } from 'react-router-dom'
import Contact from '../Contact'
import Home from '../Home'
import NotFound from '../NotFound'
import Projects from '../Projects'

export default function Router() {
    return(
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    )
}