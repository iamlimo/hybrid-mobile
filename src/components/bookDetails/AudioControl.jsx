import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const AudioControl = () => {
    const [play, setPlay] = useState(false);

  return (
    <View style={styles.wrapper}>
        <View style={{height: 4, width: 55, backgroundColor: '#CFCFCF', borderRadius: 8}}></View>
        
        <Text style={{fontSize: 14, fontWeight: 500, color: '#1338BE', marginTop: 10}}>Chapter 01. Aslan the king</Text>

        <View style={{width: '100%', marginTop: 5}}>
            <View style={styles.timeStamp}>
                <Text style={{fontSize: 12, fontWeight: 400, color: '#14141499', marginTop: 10}}>10:30</Text>
                <Text style={{fontSize: 12, fontWeight: 400, color: '#14141499', marginTop: 10}}>01:05:28</Text>
            </View>
            <View style={{height: 8, width: '100%', backgroundColor: '#D7D7D7', borderRadius: 16}}>
                <View style={{height: 8, width: '25%', backgroundColor: '#FFD672', borderRadius: 16}}></View>
            </View>
        </View>

        <View style={styles.controlCon}>
            <TouchableOpacity>
               <Image style={{height: 23, width: 20}} source={require('../../../assets/icons/T.png')} />
            </TouchableOpacity>

            <TouchableOpacity>
               <Image style={{height: 24, width: 24}} source={require('../../../assets/icons/audioBack.png')} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setPlay(!play)}
            style={styles.playButton}>
               {
                play
                ?<Ionicons name="play" size={30} color="#FFF6DE" strokeWidth={50}  />
                :<Ionicons name="pause" size={30} color="#FFF6DE" strokeWidth={50}  />
               }
            </TouchableOpacity>

            <TouchableOpacity>
               <Image style={{height: 24, width: 24}} source={require('../../../assets/icons/audioForward.png')} />
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={{fontSize: 20, fontWeight: 500, color: '#14141499'}}>x2</Text>
            </TouchableOpacity>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: 190,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 18,
        paddingTop: 3
    },
    timeStamp: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 8,
        marginBottom: 7,
    },
    controlCon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 35,
    },
    playButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 54,
        height: 54,
        borderRadius: 100,
        backgroundColor: '#FFD672'
    },
})

export default AudioControl