import React from 'react'
import { View } from 'react-native'
import AppStack from './AppStack'
import AuthStack from './AuthStack'
import { useSelector } from 'react-redux'

const MainStack = () => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  return (
    <>
        { isLoggedIn === false ? <AuthStack /> : <AppStack /> }
    </>
  )
}

export default MainStack