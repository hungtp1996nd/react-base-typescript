import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useAuthStore } from '../../store'

const Header = () => {
  const [lang, setLang] = useState('en')
  const { user, logout } = useAuthStore()
  const { i18n } = useTranslation()
  const navigate = useNavigate()

  useEffect(() => {
    i18n.changeLanguage(lang)
  }, [lang, i18n])

  return (
    <HeaderContainer>
      <select
        value={lang}
        onChange={e => setLang(e.target.value)}
        className="text-blue absolute top-0 left-0"
      >
        <option value="en">Eng-US</option>
        <option value="vi">Tiếng việt</option>
      </select>
      <WelcomeUser>{`Welcome ${user}`}</WelcomeUser>
      <Logout onClick={logout}>Logout</Logout>
      <Pokemon onClick={() => navigate('/pokemons')}>Pokemon</Pokemon>
      <HomeNavigation onClick={() => navigate('/')}>Home page</HomeNavigation>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div.attrs({
  className: 'h-12 bg-teal-400',
})``

const WelcomeUser = styled.span.attrs({
  className: 'absolute text-white top-0 right-24',
})``

const Logout = styled.span.attrs({
  className:
    'absolute top-0 right-0 text-lime-600 underline cursor-pointer underline-offset-1',
})``

const Pokemon = styled.div.attrs({
  className:
    'absolute top-0 right-60 text-lime-600 underline cursor-pointer underline-offset-1',
})``

const HomeNavigation = styled.div.attrs({
  className:
    'absolute top-0 right-96 text-lime-600 underline cursor-pointer underline-offset-1',
})``
