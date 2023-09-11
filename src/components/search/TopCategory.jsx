import React, { useState } from 'react'
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const TopCategory = () => {
    const [ close, setClose ] = useState(null);

    const category = [
        {
            id: 1,
            name: 'Adventures',
        },
        {
            id: 2,
            name: 'Short Stories',
        },
        {
            id: 3,
            name: 'Classic',
        },
        {
            id: 4,
            name: 'Fantasy',
        },
        {
            id: 5,
            name: 'Crime',
        },
        {
            id: 6,
            name: 'Romance',
        },
    ]

  return (
<View style={styles.categoryCon}>
    <View>
        <Text style={{fontSize: 20, fontWeight: 400}}>Top Category</Text>
    </View>

    <View style={styles.categoriesCon}>
      {category.map((item) => {
          return(
      <TouchableOpacity
      key={item.id}
      onPress={() => setClose(close === item.id ? null : item.id)}
       style={close === item.id ? styles.categories2 : styles.categories1}
      >
            <Text style={{color: close === item.id ? '#FFFFFF' : '#141414B2', fontSize: 15 }}>{item.name}</Text>
            <Pressable
            onPress={() => setClose(false)}
            >
              {
               close === item.id
               ? <Image style={{height: 15, width: 15, marginLeft: 12}} source=  {require  ('../../../assets/icons/x.png')} />
               :''
              }
            </Pressable>
      </TouchableOpacity>
          )
      })}
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
    categoryCon: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingHorizontal: 18,
        marginTop: 20,
    },
    categoriesCon: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        marginTop: 27
    },
    categories1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 8,
        height: 35,
        backgroundColor: '#FFF6DE',
        borderRadius: 16,
        elevation: 4,
        marginRight: 21,
        marginVertical: 7,
    },
    categories2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 8,
        height: 35,
        backgroundColor: '#71623B',
        borderRadius: 16,
        elevation: 4,
        marginRight: 21,
        marginVertical: 7,
    }
})

export default TopCategory