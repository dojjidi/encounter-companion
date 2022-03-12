import React from 'react'
import Nav from '.././Shared/Header'
import Footer from './Footer'

const Layout = props => (
  <div>
    <h1>Encounter Companion</h1>
    <Nav />

    {props.children}

    <Footer />
  </div>
)

export default Layout
