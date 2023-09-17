import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const BookDescription = () => {
    const [showReadMore, setShowReadMore] = useState(true);

  return (
    <View style={styles.wrapper}>
        <View style={styles.iconWrapper}>
           <Pressable style={styles.iconCon}>
              <Ionicons name="heart" size={16} color="#FFF6DE" strokeWidth={1} />
           </Pressable>
           <Pressable style={styles.iconCon}>
              <Ionicons name="add" size={22} color="#FFF6DE" strokeWidth={1} />
           </Pressable>
           <Pressable style={styles.iconCon}>
              <Ionicons name="share-social" size={16} color="#FFF6DE" strokeWidth={1} />
           </Pressable>
        </View>

        <View style={styles.contentCon}>
            <Text style={{fontSize: 16, fontWeight: 500, color: '#1338BE', marginBottom: 10}}>Book Description:</Text>
            <Text style={!showReadMore ? styles.moreContent : styles.lessContent}>
            “As a panicked world goes into lockdown, Lucy Barton is uprooted from her life in Manhattan and bundled away to a small town in Maine by her ex-husband and on-again, off-again friend, William. For the next several months, it’s just Lucy, William, and their complex past together in a little house nestled against the moody, swirling sea. {'\n'}
            Rich with empathy and emotion, Lucy by the Sea vividly captures the fear and struggles that come with isolation, as well as the hope, peace, and possibilities that those long, quiet days can inspire.
            </Text>
            <Pressable onPress={()=>setShowReadMore(!showReadMore)}>
              <Text style={{fontSize: 12, fontWeight: 400, color: '#FFD672', marginVertical: 2}}>
                {!showReadMore ? 'Read Less...' : 'Read More...'}
              </  Text>
            </Pressable>
        </View>

        <View style={{height: 1, width: '100%', backgroundColor: '#FFFFFF'}}></View>
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
        paddingVertical: 10,
        backgroundColor: '#FFF6DE',
    },
    iconWrapper: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '30%'
    },
    iconCon: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 24.5,
        width: 24,
        borderRadius: 4,
        backgroundColor: '#CDCDCD'
    },
    contentCon: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%',
        marginTop: 40,
    },
    lessContent: {
        fontSize: 12,
        fontWeight: 500,
        lineHeight: 19,
        color: '#14141499',
        height: 160
    },
    moreContent: {
        fontSize: 12,
        fontWeight: 500,
        lineHeight: 19,
        color: '#14141499',
    },
})

export default BookDescription