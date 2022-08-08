import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

interface LayoutProps {
  children: any
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <main className="min-h-[90vh]">{children}</main>
      <Footer />
    </div>
  )
}