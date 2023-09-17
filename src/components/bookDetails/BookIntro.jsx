import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const BookIntro = ({selectedTab}) => {
    const star = [ {id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5},]
  return (
    <View style={styles.wrapper}>
        <View style={styles.leftCon}>
            {
             selectedTab === 'Tab1'
             ?<Image style={{width: '100%', height: 230, borderRadius: 11}} source={require('../../../assets/images/narnia1.png')} />
             :<>
               <Image style={{position: 'relative', width: 180, height: 180, borderRadius: 100}} source={require('../../../assets/images/narnia1.png')} />
               <View style={{position: 'absolute', height: 60, width: 60, backgroundColor: '#FFD672', borderWidth: 10, borderRadius: 50, borderColor: 'black'}}></View>
             </>
            }
        </View>

        <View style={styles.rightCon}>
            <Text style={{fontSize: 24, fontWeight: 400}}>The Chronicles of Narnia</Text>
            <Text style={{fontSize: 14, fontWeight: 400, color: '#1338BE', marginTop: 8}}>C.S.Lewis</Text>
            <View style={styles.ratingsCon}>
              {star.map((item) => {
                  return(
               <Pressable key={item.id}
                      >
                <Ionicons name="star" size={18} color="#FFF6DE" strokeWidth={1} />
               </Pressable>
                )
            })}
            </View>
            <Text style={{fontSize: 14, fontWeight: 400, color: '#1338BE', marginTop: 10}}>172 pages</Text>
            <View style={styles.category}>
                <Text style={{fontSize: 14, fontWeight: 400, color: '#000000B2'}}>Adventure</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 18,
        marginTop: 13,
        marginBottom: 20
    },
    leftCon: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '48%',
    },
    rightCon: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '46%',
    },
    ratingsCon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '58%',
        marginTop: 12
    },
    category: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        width: 87,
        height: 41,
        marginTop: 15,
    }
})

export default BookIntro