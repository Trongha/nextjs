import React from 'react'
import AnnouncementBar from '../AnnouncementBar'
import Navbar from '../Navbar'
import Footer from '../Footer'
import LayoutProviders from '../LayoutProviders'
import LayoutHead from '../LayoutHead'

import useKeyboardNavigation from '../../hooks/useKeyboardNavigation'

const Layout = props => {
  const { children, noFooter, wrapperClassName, pageClassName } = props
  useKeyboardNavigation()
  return (
    <LayoutProviders>
      <LayoutHead {...props} />

      <AnnouncementBar />

      <Navbar />

      <Footer />
    </LayoutProviders>
  )
}

export default Layout
