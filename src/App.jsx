import './App.css'
import Home from './Layouts/Home/Home'
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Login from './Layouts/Login/Login'
import Register from './Layouts/Register/Register'
import Init from './Layouts/Init/Init'
import RootLayout from './Layouts/RootLayout/RootLayout'
import Cupid from './Layouts/Cupid/Cupid'
import Contextual from './Layouts/Contextual/Contextual'
import Playlist from './Layouts/Playlist/Playlist'
import Profile from './Layouts/Profile/Profile'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Init />} />
      <Route path='/login' element={< Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={<Home />} />
      <Route path='/cupido' element={<Cupid />} />
      <Route path='/contextual' element={<Contextual />} />
      <Route path='/playlist' element={<Playlist />} />
      <Route path='/profile' element={<Profile />} />

    </Route>
  )
)
function App() {

  return (
    <RouterProvider router={router} />

  )
}

export default App
