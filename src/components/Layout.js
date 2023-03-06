import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
        <header>
            <h1>Custom Hooks</h1>
        </header>
        <main>
            <Outlet />
        </main>
    </>
  )
}
