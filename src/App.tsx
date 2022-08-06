import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Spinner from './components/Spinner'
import Header from './pages/Header'
import { useAuthStore } from './store'
import './App.css'

const Content = React.lazy(() => import('./pages/Content'))
const Pokemons = React.lazy(() => import('./pages/Pokemon'))

function App() {
  const { user } = useAuthStore()

  if (!user) return <Navigate to="/auth" replace />

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          index
          element={
            <Suspense fallback={<Spinner />}>
              <Content />
            </Suspense>
          }
        />
        <Route
          path="/pokemons"
          element={
            <Suspense fallback={<Spinner />}>
              <Pokemons />
            </Suspense>
          }
        />
      </Routes>
    </div>
  )
}

export default App
