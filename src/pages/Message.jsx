import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import MessageSearch from '../components/message/MessageSearch';
import Communities from '../components/message/Communities';
import PersonalMessage from '../components/message/PersonalMessage';

const Message = () => {
    const [active, setActive] = useState(false)

    const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
        <View style={styles.topCon}>
            <Pressable
            onPress={() => navigation.goBack()} 
            style={styles.backCon}
            >
              <Ionicons name="arrow-back-outline" size={24} color="#1338BE" strokeWidth={1}  />
           </Pressable>

            <View>
                <Text style={{fontSize: 16, fontWeight: 500, color: "#1338BE"}}>Message</Text>
            </View>

            <Pressable
            style={styles.addCon}
            >
                <Ionicons name="add-outline" size={24} color="#1338BE" strokeWidth={50}  />
            </Pressable>
            
        </View>

        <MessageSearch />

        <View style={{height: 0.8, backgroundColor: '#EBEBEB', width: '90%', marginTop: 19}}></View>

        <View style={styles.tabCon}>
            <Pressable 
            onPress={() => setActive(false)}
            style={styles.tab}
            >
                <Text style={{fontSize: 16, fontWeight: 500, color: !active ? "#1338BE" : "#A1AFE5"}}>Communities</Text>
                {
                !active
                ?<View style={styles.tabUnderline}></View>
                :''
                }
                
            </Pressable>

            <Pressable 
            onPress={() => setActive(true)}
            style={styles.tab}
            >
                <Text style={{fontSize: 16, fontWeight: 500, color: active ? "#1338BE" : "#A1AFE5"}}>Personal</Text>
                {
                active
                ?<View style={styles.tabUnderline}></View>
                :''
                }
            </Pressable>
        </View>

        <ScrollView
        contentContainerStyle={styles.tabContentCon}
        >
            {
             active
             ?<PersonalMessage />
             :<Communities />
            }
        </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#FFFFFF',
        width: '100%',
    },
    topCon: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 60,
        paddingHorizontal: 25,
    },
    backCon: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    addCon: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF6DE',
        height: 32,
        width: 32,
        borderRadius: 30,
    },
    tabCon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '65%',
        marginTop: 20,
        marginBottom: 15
    },
    tab: {
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    tabUnderline: {
        height: 1.5,
        width: '120%',
        backgroundColor: '#FFD672'
    },
    tabContentCon: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
        marginTop: 15,
        paddingHorizontal: 25,
        paddingBottom: 40
    }
})

export default Message