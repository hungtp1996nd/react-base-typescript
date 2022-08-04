import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Navigate } from 'react-router-dom'
import styled from 'styled-components'
import { useAuthStore } from './store'
import logo from './logo.svg'
import './App.css'

function App() {
  const [lang, setLang] = useState('en')
  const { t, i18n } = useTranslation()

  const { user, logout } = useAuthStore()

  useEffect(() => {
    i18n.changeLanguage(lang)
  }, [lang, i18n])
  if (!user) return <Navigate to="/auth" replace />
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="bg-red-600">
          Edit <code>src/App.tsx</code> and save to reload.{' '}
          {t('learn xay base')}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <WelcomeUser>{`Welcome ${user}`}</WelcomeUser>
      <Logout onClick={logout}>Logout</Logout>
      <select
        value={lang}
        onChange={e => setLang(e.target.value)}
        className="text-blue absolute top-0 left-0"
      >
        <option value="en">Eng-US</option>
        <option value="vi">Tiếng việt</option>
      </select>
    </div>
  )
}

export default App

const WelcomeUser = styled.span.attrs({
  className: 'absolute text-white top-0 right-24',
})``

const Logout = styled.span.attrs({
  className:
    'absolute top-0 right-0 text-lime-600 underline cursor-pointer underline-offset-1',
})``
