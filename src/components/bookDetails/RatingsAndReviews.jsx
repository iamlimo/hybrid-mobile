import React, { useState } from 'react'
import { Image } from 'react-native'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const RatingsAndReviews = () => {
    const star = [ {id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5},]

  return (
    <View style={styles.wrapper}>
        <Text style={{fontSize: 16, fontWeight: 500, color: '#1338BE'}}>Ratings & Reviews:</Text>
        <View style={styles.contentCon}>
            <View style={styles.contentLeft}>
                <Image style={{width: 64, height: 64, borderRadius: 50}} source={require('../../../assets/images/merlin.png')} />
            </View>
            <View style={styles.contentRight}>
              <View style={styles.rightTop}>
                <View style={styles.nameCon}>
                    <Text style={{fontSize: 16, fontWeight: 400, color: '#1338BE'}}>John William</Text>
                   <View style={styles.ratingsCon}>
                     {star.map((item) => {
                        return(
                      <Pressable key={item.id}
                            >
                      <Ionicons style={{marginRight: 4}} name="star" size={18} color="#FFD672" strokeWidth=  {1} />
                      </Pressable>
                      )
                      })}
                  </View>
                </View>
                <View>
                  <Text style={{fontSize: 12, fontWeight: 400, color: '#14141499'}}>Today   08:30PM</Text>
                </View>

              </View>

                <View style={styles.rightMiddle}>
                    <Text style={{fontSize: 12, fontWeight: 400, color: '#00000099', lineHeight: 20,}}>So perhaps, you've generated some fancy text and you're content that you are publishing it</Text>
                </View>

                <View style={styles.rightBottom}>
                    <View style={styles.container}>
                       <Ionicons style={{marginRight: 4}} name="chatbubbles" size={24}    color="#D9D9D9" strokeWidth=  {1} />
                       <Text style={{fontSize: 12, fontWeight: 400, color: '#14141499', paddingLeft: 4}}>23 Replies</Text>
                    </View>
                    <View style={styles.container}>
                       <Pressable style={styles.iconCon}>
                          <Ionicons name="heart" size={16} color="#FFF6DE" strokeWidth={1} />
                       </Pressable>
                       <Text style={{fontSize: 12, fontWeight: 400, color: '#14141499', paddingLeft: 8}}>62 Likes</Text>
                    </View>
                </View>

            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 18,
        paddingTop: 10,
        paddingBottom: 120,
        backgroundColor: '#FFF6DE',
    },
    contentCon: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginTop: 37,
    },
    contentLeft: {
        width: '25%',
    },
    contentRight: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '75%',
    },
    rightTop: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '100%'
    },
    ratingsCon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 8
    },
    rightMiddle: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '95%',
        marginTop: 10
    },
    rightBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: 8,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconCon: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 24.5,
        width: 24,
        borderRadius: 8,
        backgroundColor: '#CDCDCD'
    },
})

export default RatingsAndReviews