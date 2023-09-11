import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

const PersonalJotter = () => {
  const navigation = useNavigation();

  const jotter = [
    {
        id: 1,
        title: 'First As a panicked world goes....',
        date: '01 January 06:30pm'
    },
    {
        id: 2,
        title: 'First As a panicked world goes....',
        date: '01 January 06:30pm'
    },
    {
        id: 3,
        title: 'First As a panicked world goes....',
        date: '01 January 06:30pm'
    },
    {
        id: 4,
        title: 'First As a panicked world goes....',
        date: '01 January 06:30pm'
    },
    {
        id: 5,
        title: 'First As a panicked world goes....',
        date: '01 January 06:30pm'
    },
    {
        id: 6,
        title: 'First As a panicked world goes....',
        date: '01 January 06:30pm'
    },
    {
        id: 7,
        title: 'First As a panicked world goes....',
        date: '01 January 06:30pm'
    },
  ]

  return (
    <ScrollView
    contentContainerStyle={styles.wrapper}
    >
        <View style={styles.topCon}>
            <Pressable
            onPress={() => navigation.goBack()} 
            style={styles.backCon}
            >
                <Image style={{height: 15, width: 15}} source={require('../../assets/icons/back.png')} />
            </Pressable>
            <View>
                <Text style={{fontSize: 20, fontWeight: 500}}>Personal Jotter</Text>
            </View>
            <Pressable
            onPress={() => navigation.navigate('newJotter')} 
            style={styles.addCon}
            >
                <Image style={{height: 20, width: 18}} source={require('../../assets/icons/Plus.png')} />
            </Pressable>
        </View>

        <View style={{flex: 1}}>
       <ScrollView 
       showsVerticalScrollIndicator={false}
       contentContainerStyle={styles.jotterwrapper}
       >
        {jotter.map((item) => {
            return(
        <Pressable 
        key={item.id}
        style={styles.jotter}
        onPress={() => navigation.navigate('editNote')}
        >
            <View style={styles.imgCon}>
                <Image style={{height: 30, width: 30}} source={require('../../assets/icons/note.png')} />
            </View>

            <View style={styles.contents}>
                <Text style={{fontSize: 16, fontWeight: 400, marginBottom: 2}}>{item.title}</Text>
                <Text style={{fontSize: 12, fontWeight: 400, color: '#14141499'}}>{item.date}</Text>
            </View>
        </Pressable>
            )
        })}
       </ScrollView>
       </View>

       <View style={styles.jotterCon}>
         <Pressable onPress={() => navigation.goBack()}
         style={styles.jotterBtn}>
            <Image style={{height: 13, width: 13, marginRight: 15}} source={require('../../assets/icons/add.png')} />
           <Text style={{fontSize: 15, fontWeight: 600, color: '#ffff'}}>Save changes</Text>
         </Pressable>
       </View>

    </ScrollView>
  )
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#FFF6DE',
    paddingHorizontal: 25
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
    backgroundColor: '#FFF6DE',
    height: 25,
    width: 25,
    borderRadius: 5,
},
addCon: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF6DE',
    height: 25,
    width: 25,
    borderRadius: 5,
},
jotterwrapper: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: 55,
    paddingBottom: 80,
},
jotter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FFD672',
    borderRadius: 32,
    width: '100%',
    height: 86,
    marginBottom: 23,
    paddingHorizontal: 25
},
imgCon: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    // width: '30%'
},
contents: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    marginLeft: 15
},
jotterCon: {
    // flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // backgroundColor: '#dddd'
},
jotterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#141414',
    borderRadius: 16,
    width: '100%',
    height: 50,
    marginBottom: 23,
    color: '#ffff',
},

})

export default PersonalJotter