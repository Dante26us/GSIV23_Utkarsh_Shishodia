import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <>
    <Outlet/>
    <div>Home</div>
    </>
  )
}
