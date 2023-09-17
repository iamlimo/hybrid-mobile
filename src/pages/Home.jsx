import React, { useState } from 'react'
import { Image, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import recent from '../data/search/recentSearch'
import home from '../data/home'
import { useNavigation } from '@react-navigation/native'
import Drawer from '../components/home/Drawer'

const Home = () => {
    const [tab, setTab] = useState(true);

    const [openDrawer, setOpenDrawer] = useState(false);

    const navigation = useNavigation();

    const category = [
        {
            id: 1,
            img: require('../../assets/images/adventures.png'),
            title: 'Adventures',
            imgWidth: 35,
            imgHeight: 28
        },
        {
            id: 2,
            img: require('../../assets/images/psychology.png'),
            title: 'Psychology',
            imgWidth: 35,
            imgHeight: 28
        },
        {
            id: 3,
            img: require('../../assets/images/money.png'),
            title: 'Money',
            imgWidth: 30,
            imgHeight: 28
        },
        {
            id: 4,
            img: require('../../assets/images/romance.png'),
            title: 'Romance',
            imgWidth: 30,
            imgHeight: 28
        },
        {
            id: 5,
            img: require('../../assets/images/science.png'),
            title: 'Science',
            imgWidth: 30,
            imgHeight: 28
        },
    ]

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={styles.wrapper}>
           {/* NAVBAR */}
        <View style={styles.topCon}>
            <Pressable onPress={() => setOpenDrawer(true)}
            >
              <Ionicons name="menu-outline" size={35} color="#000000" strokeWidth={1}  />
            </Pressable>
            <Pressable onPress={()=>navigation.navigate('message')}>
                <Image style={{height: 24, width: 24}} source={require('../../assets/icons/community.png')} />
            </Pressable>
        </View>

        <Text style={{fontSize: 32, fontWeight: 400, color: '#1338BE' , marginTop: 25}}>Welcome, Isaac</Text>

        <Image style={{height: 210.67, width: 316, marginTop: 5}} source={require('../../assets/images/book.png')} />

        <Text style={{fontSize: 16, fontWeight: 400, color: '#000000'}}>You don't have a book</Text>

        <TouchableOpacity onPress={()=>navigation.navigate('bookDetails')}
        style={styles.mainBtn}>
            <Text style={{fontSize: 16, fontWeight: 500, color: '#FFFFFF'}}>Continue Reading</Text>
        </TouchableOpacity>

          {/* CATEGORIES */}
        <View style={{paddingHorizontal: 18, width: '100%', marginTop: 40}}>
          <Text style={{fontSize: 20, fontWeight: 500, color: '#1338BE',}}>Categories</Text>
        </View>

           {/* TAB */}
        <View style={styles.tabBtn}>
            <Pressable onPress={() => setTab(true)}>
              <Text style={{fontSize: 16, fontWeight: 600, color: tab ? '#14141480' : '#141414'}}>Fiction</Text>
            </Pressable>
            <Pressable onPress={() => setTab(false)}>
              <Text style={{fontSize: 16, fontWeight: 600, color: tab ? '#141414' : '#14141480'}}>Non-fiction</Text>
            </Pressable>
        </View>

        <View style={styles.categoryCon}>
            {category.map((item) => {
                return(
            <TouchableOpacity key={item.id}
            style={styles.categories}
            >
                <Image style={{height: item.imgHeight, width: item.imgWidth}} source={item.img} />
                <Text style={{fontSize: 16, fontWeight: 400, color: '#14141499', paddingLeft: 10}}>{item.title}</Text>
            </TouchableOpacity>
                )
            })}
        </View>

          {/* READING */}
        <View style={{paddingHorizontal: 18, width: '100%', marginTop: 30}}>
          <Text style={{fontSize: 20, fontWeight: 500, color: '#1338BE',}}>Reading</Text>
        </View>
        <View style={{width: '100%', marginTop: 25}}>
            <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
             contentContainerStyle={styles.scrollCon}
            >
                {recent.map((item) => {
                    return(
                <View key={item.id}>
                   <View style={styles.bookCon}>
                       <Image style={{height: 195, width: 149, borderRadius: 17,}} source={item.img} />
                       <View style={{width: '95%', marginTop: 6}}>
                          <View style={{height: 37}}>
                            <Text style={{fontSize: 14.6, fontWeight: 400, color: '#1338BE'}}>{item.title}</Text>
                          </View>
                           <Text style={{fontSize: 8.52, fontWeight: 400, color: '#1338BE', marginTop: 2}}>{item.author}</Text>
                       </View>
                       <View style={styles.bookBottom}>
                            <Text style={{fontSize: 11, fontWeight: 400, color: '#14141499', marginBottom: 5}}>You completed 72%</Text>
                            <View style={{height: 7.4, width: '100%', backgroundColor: "#D7D7D7", borderRadius: 15, marginBottom: 6}}>
                                <View style={{height: 7.4, width: '65%', backgroundColor: "#1338BE", borderRadius: 15}}></View>
                            </View>
                            <TouchableOpacity style={styles.continueBtn1}>
                                <Text style={{fontSize: 11.24, fontWeight: 600, color: '#FFFFFF'}}>Continue Reading</Text>
                            </TouchableOpacity>
                       </View>
                   </View>
                </View>
                    )
                })}
            </ScrollView>
        </View>

            {/* UNREAD */}
        <View style={{paddingHorizontal: 18, width: '100%', marginTop: 50}}>
          <Text style={{fontSize: 20, fontWeight: 500, color: '#1338BE',}}>Unread</Text>
        </View>
        <View style={{  width: '100%', marginTop: 25}}>
            <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
             contentContainerStyle={styles.scrollCon2}
            >
                {home.map((item) => {
                    return(
                <View key={item.id}>
                   <View style={styles.bookCon2}>
                       <View style={{alignItems: 'flex-start', justifyContent: 'center', width: '100%'}}>
                          <Image style={{height: 152, width: 115, borderRadius: 13,}} source={item.img} />
                       </View>
                       <View style={{marginTop: 6}}>
                          <View style={{width: 110, marginTop: 6}}>
                            <Text style={{fontSize: 16, fontWeight: 400, color: '#1338BE'}}  numberOfLines={1} ellipsizeMode="tail">{item.title}</Text>
                          </View>
                           <Text style={{fontSize: 12, fontWeight: 400, color: '#141414B2', marginTop: 8}}>{item.author}</Text>
                       </View>
                       <View style={styles.bookBottom}>
                            <Text style={{fontSize: 12, fontWeight: 400, color: '#14141499', marginBottom: 5}}>120 pages</Text>
                            <TouchableOpacity style={styles.continueBtn2}>
                                <Text style={{fontSize: 8.69, fontWeight: 600, color: '#FFFFFF'}}>Start Reading</Text>
                            </TouchableOpacity>
                       </View>
                   </View>
                </View>
                    )
                })}
            </ScrollView>
        </View>
    </ScrollView>
        {openDrawer ? <Drawer setOpenDrawer={setOpenDrawer} /> : ''}
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFD672',
        paddingTop: StatusBar.currentHeight, 
      },
    wrapper: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        backgroundColor: '#FFD672',
        paddingTop: 25,
        paddingBottom: 50,
    },
    topCon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 18,
    },
    mainBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        backgroundColor: '#1338BE',
        marginTop: 20,
        height: 41,
        width: 165,
    },
    tabBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '46%',
        marginTop: 25,
    },
    categoryCon: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 27,
        paddingHorizontal: 18,
    },
    categories: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 36,
        backgroundColor: '#D7D7D7',
        borderRadius: 4,
        paddingHorizontal: 8,
        marginBottom: 28
    },
    scrollCon: {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingRight: 18,
        paddingLeft: 8,
    },
    bookCon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingRight: 6,
        marginLeft: 10
    },
    bookBottom: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '95%',
        marginTop: 8,
    },
    continueBtn1: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: 29,
        borderRadius: 3,
        backgroundColor: '#1338BE'

    },
    scrollCon2: {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingLeft: 8,
    },
    bookCon2: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
        paddingRight: 6,
        marginLeft: 10,
        marginRight: 35,
    },
    titleCon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: 110,
    },
    continueBtn2: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '65%',
        height: 25,
        borderRadius: 3,
        backgroundColor: '#1338BE'
    },

})

export default Home