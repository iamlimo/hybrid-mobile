import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import reading from '../../data/profile/reading'

const ReadingNow = () => {
  return (
    <View style={styles.wrapper}>
        <View style={styles.titleCon}>
          <Text style={{fontSize: 20, fontWeight: 400, marginBottom: 22}}>Reading Now</Text>
        </View>
        <View style={{width: '100%',}}>
            <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
             contentContainerStyle={styles.scrollCon}
            >
                {reading.map((item) => {
                    return(
                <View key={item.id}>
                   <View style={styles.bookCon}>
                       <Image style={{height: 154, width: 112,}} source={item.img} />
                       <View style={{width: 134, marginTop: 6}}>
                           <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 16, color: '#141414'}}>{item.title}</Text>
                           <Text style={{fontSize: 12, color: '#141414', marginTop: 8}}>{item.author}</Text>
                       </View>

                       <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: 146, marginTop: 12,}}>
                          <View style={styles.percentageCon}>
                            <View style={styles.percentageBackground}>
                               <View style={{backgroundColor: '#141414',
                               width: item.percent, height: 8, borderRadius: 16}}></View>
                            </View>
                          </View>
                          <Text style={{fontSize: 10, fontWeight: 400, color: '#141414', marginLeft: 5}}>{item.percent}</Text>
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
        marginTop: 30,
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
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingRight: 50,
    },
    percentageCon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: 115,
        height: 8,
    },
    percentageBackground: {
        height: 8,
        width: '100%',
        borderRadius: 16,
        backgroundColor: '#D7D7D7'
    },
})

export default ReadingNow