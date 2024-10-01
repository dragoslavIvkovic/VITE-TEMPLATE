import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginForm from './page/Login'

// Lazy loading komponenti
const Home = lazy(() => import('./page/Home'))
const NotFound = lazy(() => import('./page/NotFound'))

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <div className='logo-block'></div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/login'
            element={<LoginForm />}
          />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
