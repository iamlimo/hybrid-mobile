import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import recent from '../../data/search/authors'

const TopAuthors = () => {
  return (
    <View style={styles.wrapper}>
        <View style={styles.titleCon}>
          <Text style={{fontSize: 20, fontWeight: 400, marginBottom: 22}}>Top Authors</Text>
        </View>
        <View style={{width: '100%',}}>
            <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
             contentContainerStyle={styles.scrollCon}
            >
                {recent.map((item) => {
                    return(
                <View key={item.id}>
                   <View style={styles.bookCon}>
                       <Image style={{height: 123, width: 115, marginLeft: -15, borderRadius: 14}} source={item.img} />
                       <View style={{width: 115, marginTop: 6}}>
                           <Text style={{fontSize: 15, fontWeight: 500, color: '#141414', width: 90,}}>{item.author}</Text>
                       </View>
                   </View>
                </View>
                    )
                })}
            </ScrollView>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: 45,
    },
    titleCon: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: 18,
    },
    scrollCon: {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingLeft: 18
    },
    bookCon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 10
    }
})

export default TopAuthors