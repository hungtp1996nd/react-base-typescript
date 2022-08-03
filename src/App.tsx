import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useAuthStore } from './store'
import logo from './logo.svg'
import './App.css'

function App() {
  const [lang, setLang] = useState('en')
  const { t, i18n } = useTranslation()

  const { bears, increasePopulation } = useAuthStore()

  const changeLanguage = () => {
    i18n.changeLanguage('vi')
  }
  useEffect(() => {
    i18n.changeLanguage(lang)
  }, [lang])
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
        <span>{bears}</span>
        <div className="cursor-pointer" onClick={increasePopulation}>
          Change bears
        </div>
      </header>
      <button
        onClick={changeLanguage}
        type="button"
        className="text-white absolute top-0"
      >
        Change Vietnamese language
      </button>
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
