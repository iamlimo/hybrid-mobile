import React, { useState } from 'react'
import { Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native'
import { Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import PageIndicator from '../components/book/PageIndicator'
import BookSettings from '../components/book/BookSettings'
import ReviewModal from '../components/book/ReviewModal'
import { useNavigation } from '@react-navigation/core'

const Ebook = () => {
  const [settings, setSettings] = useState(false);
  const [review, setReview] = useState(false);

  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={styles.wrapper}>
       <View style={styles.topCon}>
            <Pressable
            onPress={() => navigation.navigate('bookDetails')} 
            style={styles.backCon}
            >
              <Ionicons name="arrow-back-outline" size={24} color="#1338BE" strokeWidth={1}  />
           </Pressable>

            <View style={styles.middleCon}>
                <Text style={{fontSize: 20, fontWeight: 500, color: "#000000"}}>Content</Text>
            </View>

            <Pressable style={styles.leftCon}
            >
              <Pressable onPress={() => setReview(!review)} 
              style={styles.starCon}>
                <Ionicons name="heart-outline" size={20} color="#1338BE" strokeWidth={30}  />
              </Pressable>

              <Pressable onPress={() => setSettings(true)}
              style={styles.settingsCon}>
                <Ionicons name="settings-outline" size={26} color="#1338BE" strokeWidth={50}  />
              </Pressable>
              
            </Pressable>
            
        </View>

        {/* TITLE AND AUTHOR */}
        <View style={styles.titleCon}>
          <Text style={{fontSize: 12, fontWeight: 500, color: '#14141499'}}>By C.S Lewis</Text>
          <Text style={{fontSize: 24, fontWeight: 400, color: '#000000'}}>The Chronicles of Narnia</Text>
        </View>

         {/* CHAPTER */}
        <View style={{marginTop: 75}}>
          <Text style={{fontSize: 14, fontWeight: 500, color: '#1338BE'}}>Chapter 01. The lost city</Text>
        </View>

        <View style={styles.contentCon}>
          <Text style={{fontSize: 12, fontWeight: 400, color: '#14141499', lineHeight: 22}}>
          {" "}     As a panicked world goes into lockdown, Lucy Barton is uprooted from her life in Manhattan and bundled away to a small town in Maine by her ex-husband and on-again, off-again friend, William. For the next several months, it's just Lucy, William, and their complex past together in a little house nestled against the moody, swirling sea. {'\n'}
           Rich with empathy and emotion, Lucy by the Sea vividly captures the fear and struggles that come with isolation, as well as the hope, peace, and possibilities that those long, quiet days can inspire. {'\n'} 
          {" "}     As a panicked world goes into lockdown, Lucy Barton is uprooted from her life in Manhattan and bundled away to a small town in Maine by her ex-husband and on-again, off-again friend, William. For the next several months, it's just Lucy, William, and their complex past together in a little house nestled against the moody, swirling sea. {'\n'}
           Rich with empathy and emotion, Lucy by the Sea vividly captures the fear and struggles that come with isolation, as well as the hope, peace, and possibilities that those long, quiet days can inspire. {'\n'}
          {" "}     As a panicked world goes into lockdown, Lucy Barton is uprooted from her life in Manhattan and bundled away to a small town in Maine by her ex-husband and on-again, off-again friend, William. For the next several months, it's just Lucy, William, and their complex past together in a little house nestled against the moody, swirling sea. {'\n'}
           Rich with empathy and emotion, Lucy by the Sea vividly captures the fear and struggles that come with isolation, as well as the hope, peace, and possibilities that those long, quiet days can inspire. 
          </Text>
        </View>

    </ScrollView>

        <PageIndicator />

        {settings ? <BookSettings setSettings={setSettings}  /> : null }
        { review ? <ReviewModal setReview={setReview} />  : null }


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7DE',
    paddingTop: StatusBar.currentHeight,
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FFF7DE',
    width: '100%',
    paddingBottom: 100,
  },
      topCon: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 35,
        paddingHorizontal: 20,
    },
    backCon: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    middleCon: {
      position: 'absolute',
      top: 0,
      right: '43%',
    },
    leftCon: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFF6DE',
    },
    starCon: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFD672',
      borderRadius: 30,
      height: 34,
      width: 34
    },
    settingsCon: {
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 18
    },
    titleCon: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 35,
      paddingHorizontal: 20,
    },
    contentCon: {
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginTop: 30,
      paddingHorizontal: 20,
    }
})

export default Ebook