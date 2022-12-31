import { Route, Routes } from 'react-router-dom'
import Contact from '../Contact'
import Home from '../Home'
import NotFound from '../NotFound'
import Projects from '../Projects'

export default function Router(props) {
  const { headerHeight } = props
    return(
        <Routes>
          <Route path='/' element={<Home headerHeight={ headerHeight } />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    )
}