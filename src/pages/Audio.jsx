import React from 'react'
import { View } from 'react-native'
import History from '../components/categoryList/History'
import Crime from '../components/categoryList/Crime'
import Psychology from '../components/categoryList/Psychology'
import Recommended from '../components/categoryList/Recommended'
import BestSelling from '../components/categoryList/BestSelling'

const Audio = ({selectedTab}) => {
  return (
    <View>
        <History selectedTab={selectedTab} />
        <Crime selectedTab={selectedTab} />
        <Psychology selectedTab={selectedTab} />
        <Recommended selectedTab={selectedTab} />
        <BestSelling selectedTab={selectedTab} />
    </View>
  )
}

export default Audio