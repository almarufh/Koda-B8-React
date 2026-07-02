import React from 'react'
import { Outlet } from 'react-router'
import Header from '../../../components/main/Header'

function TokoLayout() {
  return (
    <>
    <Header />
    <Outlet />
    </>
  )
}

export default TokoLayout