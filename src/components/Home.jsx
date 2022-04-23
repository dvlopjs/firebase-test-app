import React from 'react'
import { useAuth } from '../context/authContext'
import { context } from '../context/authContext'
export default function Home() {
  const authContext = useAuth()
  console.log(authContext)
  return (
    <div>Home</div>
  )
}
