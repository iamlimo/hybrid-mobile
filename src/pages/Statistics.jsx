import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

const Statistics = () => {
  const [click, setClick] = useState(null)

  const tab = [
    {
      id: 1,
      name: 'Day',
    },
    {
      id: 2,
      name: 'Week',
    },
    {
      id: 3,
      name: 'Month',
    },
    {
      id: 4,
      name: 'Year',
    },
  ]

  const navigation = useNavigation();

  return (
    <ScrollView
    contentContainerStyle={styles.wrapper}
    >
        <View style={styles.topCon}>
            <Pressable
            onPress={() => navigation.goBack()}
            style={styles.backCon}>
                <Image style={{height: 15, width: 15}} source={require('../../assets/icons/back.png')} />
            </Pressable>
            <Text style={{fontSize: 20, fontWeight: 500, width: '62%'}}>Statistics</Text>
        </View>

        <View style={styles.tabCon}>
          {tab.map((item) => {
            return(
          <Pressable 
          key={item.id}
          onPress={() => setClick(click === item.id ? null : item.id)}
          style={click === item.id ? styles.tab2 : styles.tab1}
          >
            <Text style={{fontSize: 15, fontWeight: 400, color: click === item.id ? '#ffff' : '#1414144D'}}>{item.name}</Text>
          </Pressable>
            )
          })}
        </View>

    </ScrollView>
  )
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#FFD672',
    paddingHorizontal: 18
},
topCon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 60,
},
backCon: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF6DE99',
    height: 25,
    width: 25,
    borderRadius: 5,
},
tabCon: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: 35,
},
tab1: {
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#ffff',
  borderRadius: 8,
  width: 75,
  height: 35
},
tab2: {
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#CCAB5B',
  borderRadius: 8,
  width: 75,
  height: 35
},

})



export default Statistics