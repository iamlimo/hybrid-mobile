import React from 'react'
import { View } from 'react-native'
import History from '../components/categoryList/History'
import Crime from '../components/categoryList/Crime'
import Psychology from '../components/categoryList/Psychology'
import Recommended from '../components/categoryList/Recommended'
import BestSelling from '../components/categoryList/BestSelling'

const Ebook = () => {
  return (
    <View>
        <History />
        <Crime />
        <Psychology />
        <Recommended />
        <BestSelling />
    </View>
  )
}

export default Ebook