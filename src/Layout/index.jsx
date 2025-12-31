import React from 'react'
import { Outlet } from 'react-router'

import Header from '../components/Header'

const Layout = () => {
  return (
      <div className="text-ink antialiased flex flex-col min-h-screen overflow-x-hidden">
          <div className="noise-layer"></div>
          <Header />
          <Outlet />
    </div>
  )
}

export default Layout