import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ApiContext } from './context/Api'
import Banner from './components/Banner'
import Button from './components/Button'
import Categoria from './components/Category'
import Footer from './components/Footer'
import Header from './components/Header'
import NuevaCategoria from './components/NewCategory'
import VideoNuevo from './components/NewVideo'

function App() {
  const { categories } = useContext(ApiContext)
  return (
    <>
      <Header />
      <main className='flex flex-col w-full justify-center gap-8 px-4 pb-4 max-w-6xl mx-auto relative overflow-hidden min-h-[calc(100vh-170px)]'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Banner />
                {categories &&
                  categories?.map(({ titulo, color, id }) => (
                    <Categoria key={id} title={titulo} color={color} />
                  ))}
                <div className='md:hidden'>
                  <Button
                    name='Añadir video'
                    position='left'
                    path='/nuevo-video'
                    handle
                  />
                </div>
              </>
            }
          />
          <Route path='/nuevo-video' element={<VideoNuevo />} />
          <Route path='/nueva-categoria' element={<NuevaCategoria />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
