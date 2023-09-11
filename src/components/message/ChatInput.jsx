import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
// import { Ionicons } from '@expo/vector-icons'
import { Image } from 'react-native'

const ChatInput = () => {
    const [message, setMessage] = useState(null);

    const handleSubmitMessage = () => {
        setMessage('')
    }

  return (
    <View style={styles.wrapper}>
        <TextInput 
        style={styles.chatInput}
        placeholder='Type here'
        value={message}
        onChangeText={(newText) => setMessage(newText)}
        placeholderTextColor="#7184CB"
        />
        <TouchableOpacity 
        onPress={handleSubmitMessage}
        style={styles.sendCon}>
            <Image style={{height: 15, width: 15}} source={require('../../../assets/icons/send.png')} />
        </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        width: '100%',
        paddingBottom: 25,
        paddingTop: 30,
        paddingHorizontal: 20,
    },
    chatInput: {
        height: 48,
        borderRadius: 32,
        backgroundColor: '#FFF6DE',
        width: '85%',
        paddingLeft: 25,
        fontSize: 12,
        color: '#7184CB'
    },
    sendCon: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 39,
        width: 39,
        backgroundColor: '#00E19E',
        borderRadius: 30,
        paddingRight: 2,
        paddingTop: 2
    },
})


export default ChatInput