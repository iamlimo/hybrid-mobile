import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../Store/AuthSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Settings = () => {

    const activity = [
        {
            id: 1,
            icon1: require('../../assets/icons/language.png'),
            title: 'Language',
            language: 'English',
            icon2: require('../../assets/icons/arrow.png'),
        },
        {
            id: 2,
            icon1: require('../../assets/icons/notification.png'),
            title: 'Notifications',
            icon2: require('../../assets/icons/arrow.png'),
        },
        {
            id: 3,
            icon1: require('../../assets/icons/hybrid.png'),
            title: 'About Hybrid',
            icon2: require('../../assets/icons/arrow.png'),
        },
        {
            id: 4,
            icon1: require('../../assets/icons/faq.png'),
            title: 'FAQs',
            icon2: require('../../assets/icons/arrow.png'),
        }
    ]

    const navigation = useNavigation();

    const dispatch = useDispatch();

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem("userData")
            console.log('LOGGED OUT');
            dispatch(logoutUser())
            navigation.navigate("login")
          } catch (error) {
            console.log(error);
          }
    }

  return (
    <ScrollView
    contentContainerStyle={styles.wrapper}
    >
        <View style={styles.topCon}>
            <Pressable
            onPress={() => navigation.goBack()}
            style={styles.backCon}>
                <Image style={{height: 15, width: 15}} source={require('../../assets/icons/back.png')} />
            </Pressable>
            <Text style={{fontSize: 20, fontWeight: 500, width: '62%'}}>Settings</Text>
        </View>

        <View style={{marginTop: 60}}>
            <Text style={{fontSize: 20, fontWeight: 500, width: '62%', marginBottom: 30}}>Account</Text>
            <Pressable onPress={() => navigation.navigate('personal')}
            style={styles.activityCon}>
                <View style={styles.leftDiv}>
                    <Image style={{height: 16, width: 16}} source={require('../../assets/icons/profile1.png')} />
                    <Text style={{fontSize: 16, fontWeight: 500, color: '#141414', marginLeft: 20}}>Personal Info</Text>
                </View>
                <View style={styles.rightDiv}>
                    <Image style={{height: 20, width: 10}} source={require('../../assets/icons/arrow.png')} />
                </View>
            </Pressable>
        </View>

        <View style={{marginTop: 30}}>
            <Text style={{fontSize: 20, fontWeight: 500, width: '62%', marginBottom: 30}}>General</Text>
            {activity.map((item) => {
                return(
            <Pressable style={styles.activityCon}>
                <View style={styles.leftDiv}>
                    <Image style={{height: 20, width: 20}} source={item.icon1} />
                    <Text style={{fontSize: 16, fontWeight: 500, color: '#141414', marginLeft: 20}}>{item.title}</Text>
                </View>
                <View>
                    <Text style={{fontSize: 14, fontWeight: 400, color: '#141414B2',}}>{item.language}</Text>
                </View>
                <View style={styles.rightDiv}>
                    <Image style={{height: 20, width: 10}} source={item.icon2} />
                </View>
            </Pressable>
                )
            })}
        </View>

        <Pressable 
        onPress={() => navigation.navigate('login')}
        style={styles.button}>
            <Image style={{height: 18, width: 17.58}} source={require('../../assets/icons/logout.png')} />
            <Text style={{fontSize: 16, fontWeight: 500, color: '#FFD672'}}
            onPress={handleLogout}
            >Log Out</Text>
        </Pressable>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: '#FFD672',
        paddingHorizontal: 18
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
        backgroundColor: '#FFF6DE99',
        height: 25,
        width: 25,
        borderRadius: 5,
    },
    activityCon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 30
    },
    leftDiv: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    rightDiv: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 18,
        height: 40,
        width: 130,
        borderRadius: 16,
        backgroundColor: '#141414',
        marginTop: 40
    }
})


export default Settings