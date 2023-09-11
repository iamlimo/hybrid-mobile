import React from 'react'
import { Pressable, ScrollView, StyleSheet } from 'react-native'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Text } from 'react-native'
import { Image } from 'react-native'
// import FeatherIcon from 'react-native-vector-icons/Feather';
import ChatInput from '../components/message/ChatInput'
import SentChat from '../components/message/SentChat'
import RecievedChat from '../components/message/RecievedChat'
import { useNavigation } from '@react-navigation/native'


const ChatInbox = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
        <View style={styles.headerCon}>
            <View style={styles.leftCon}>
                <Pressable onPress={() => navigation.goBack()}>
                   <Ionicons name="arrow-back-outline" size={24} color="#1338BE" strokeWidth={1}  />
                </Pressable>
              <View>
                 <Image style={{height: 42, width: 42, position: 'relative', marginLeft: 10}} source={require('../../assets/images/avatar1.png')} />
                 <View style={styles.dot}></View>
              </View>
              <Text style={{fontSize: 14, fontWeight: 500, color: "#1338BE", marginLeft: 15}}>Shelby Goode</ Text>
            </View>

            <View style={styles.rightCon}>
                <Image style={{height: 22.5, width: 22.5}} source={require('../../assets/icons/phoneCall.png')} />
                <Pressable>
                  {/* <FeatherIcon style={{marginLeft: 23}} name="heart" size={30} color="#1338BE" /> */}
                </Pressable>
            </View>
        </View>

        <ScrollView
        contentContainerStyle={styles.messagesCon}
        width="100%"
        >
          <SentChat />
          <RecievedChat />
          <SentChat />
          <RecievedChat />
          <SentChat />
        </ScrollView>

        <ChatInput />
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
    },
    headerCon: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        backgroundColor: '#FFD672',
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 70,
        paddingBottom: 11,
    },
    leftCon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '70%'
    },
    dot: {
        width: 9.75,
        height: 9.75,
        backgroundColor: '#39BA00',
        borderRadius: 5,
        borderWidth: 1.3,
        borderColor: 'white',
        position: 'absolute',
        bottom: 1,
        right: 3
      },
    rightCon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    messagesCon: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 25
    }
})

export default ChatInbox