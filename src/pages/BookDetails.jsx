import React, { useState } from 'react'
import { Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Touchable } from 'react-native'
import { Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import BookIntro from '../components/bookDetails/BookIntro'
import BookDescription from '../components/bookDetails/BookDescription'
import RatingsAndReviews from '../components/bookDetails/RatingsAndReviews'
import AudioControl from '../components/bookDetails/AudioControl'

const BookDetails = () => {
    const [selectedTab, setSelectedTab] = useState('Tab1');

    const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.wrapper}>
    <ScrollView
    contentContainerStyle={styles.scrollWrapper}
    >
        <View style={styles.topCon}>
           <Pressable
            onPress={() => navigation.navigate('home')} 
            style={styles.backCon}
            >
              <Ionicons name="arrow-back-outline" size={24} color="#1338BE" strokeWidth={1}  />
           </Pressable>
            <Text style={{fontSize: 20, fontWeight: 500, width: '62%', color: '#1338BE'}}>Book Details</Text>
        </View>

                   {/* TAB */}
        <View style={{alignItems: 'center', justifyContent: 'center', width: '100%', marginVertical: 20}}>
          <View style={styles.tabCon}>
            <TouchableOpacity
             style={ selectedTab === 'Tab1' ? styles.tabA : styles.tabB}
             onPress={() => setSelectedTab('Tab1')}
             >
                <Text style={{fontSize: 13, color: '#000000B2'}}>E-Book</Text>
            </TouchableOpacity>

            <TouchableOpacity 
             style={ selectedTab === 'Tab2' ? styles.tabA : styles.tabB}
             onPress={() => setSelectedTab('Tab2')}
            >
                <Text style={{fontSize: 13, color: '#000000B2'}}>Audio</Text>
            </TouchableOpacity>
          </View>
        </View>

        <BookIntro selectedTab={selectedTab} />

        <BookDescription />

        <RatingsAndReviews />

    </ScrollView>

      {
        selectedTab === 'Tab2'
        ?<AudioControl />
            //    START READING 
        :<Pressable onPress={() => navigation.navigate('eBook')} 
        style={styles.bottomCon}>
             <View style={styles.startReading}>
                 <Text style={{fontSize: 16, fontWeight: 500, color: '#FFFFFF'}}>Start Reading</Text>
                 <Ionicons name="arrow-forward-outline" size={27} color="#FFFFFF" strokeWidth={1}  />
             </View>
         </Pressable> 
      }

              {/* CONTINUE READING */}
        {/* <Pressable onPress={() => navigation.navigate('eBook')}
         style={styles.bottomCon}>
            <View style={styles.percentageCon}>
                <View style={styles.percentage}>
                    <Text style={{fontSize: 16, fontWeight: 600, color: '#FFFFFF'}}>Continue Reading</Text>
                </View>
                 <Text style={{fontSize: 16, fontWeight: 600, color: '#1338BE', alignItems: 'center', marginLeft: 20}}>85%</Text>
            </View>
        </ViPressableew> */}


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#FFD672',
        paddingTop: StatusBar.currentHeight, 
    },
    scrollWrapper: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: '#FFD672',
    },
    topCon: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 30,
        paddingHorizontal: 18
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
        width: '75%',
        height: 35,
        borderRadius: 4,
        backgroundColor: '#FFF6DE',
        paddingHorizontal: 20,
    },
    tabA: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        height: '80%',
        backgroundColor: '#CDCDCD',
        borderRadius: 3,
    },
    tabB: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        height: '80%',
        borderRadius: 3,
    },
    // bottom: {
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     width: '100%',
    // },
    bottomCon: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 18,
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#FFFFFF',
        height: 95,
        width: '100%',
    },
    percentageCon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 50,
        width: '100%',
        borderRadius: 16,
        backgroundColor: '#FFD672'
    },
    percentage: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: '80%',
        borderRadius: 16,
        backgroundColor: '#1338BE'
    },
    startReading: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        width: '85%',
        paddingHorizontal: 60,
        borderRadius: 16,
        backgroundColor: '#1338BE'
    },
})

export default BookDetails