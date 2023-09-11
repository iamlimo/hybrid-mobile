import React from 'react'
import { Image } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'


const SentChat = () => {
  return (
    <View style={styles.wrapper}>
        <View style={styles.chatCon}>
            <View style={styles.contentCon}>
                <Text style={{fontSize: 12, fontWeight: 400, color: '#1338BE'}}>You're  welcome just don't be late to class.</Text>
            </View>

            <View style={styles.imageCon}>
                <Image style={{height: 27, width: 27, resizeMode: "cover"}} source={require('../../../assets/images/avatar2.png')} />
            </View>
        </View>

        <View style={styles.timeCon}>
           <Ionicons name="checkmark-done-outline" size={16} color="#00E19E" strokeWidth={1} />
           <Text style={{fontSize: 10, fontWeight: 500, color: '#B3B3B3', marginLeft: 5}}>15:18 AM</Text>
        </View>

    </View>
  )
}


const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 25,
    },
    chatCon: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFD672',
        width: '80%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        paddingLeft: 40,
        paddingRight: 15,
        paddingVertical: 18,
    },
    contentCon: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '75%'
    },
    imageCon: {
        position: 'absolute',
        bottom: 15,
        right: 15,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    timeCon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 4
    }
})


export default SentChat