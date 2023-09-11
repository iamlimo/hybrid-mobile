import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import ReadingNow from '../components/profile/ReadingNow';

const Profile = () => {
    const navigation = useNavigation();

    const activity = [
        {
            id: 1,
            icon1: require('../../assets/icons/plans.png'),
            title: 'My Plans',
            icon2: require('../../assets/icons/arrow.png'),
        },
        {
            id: 2,
            icon1: require('../../assets/icons/books.png'),
            title: 'My Books',
            icon2: require('../../assets/icons/arrow.png'),
            link: 'personalJotter',
        },
        {
            id: 3,
            icon1: require('../../assets/icons/read.png'),
            title: 'Already read',
            icon2: require('../../assets/icons/arrow.png'),
        },
        {
            id: 4,
            icon1: require('../../assets/icons/statistics.png'),
            title: 'Statistics',
            icon2: require('../../assets/icons/arrow.png'),
            link: 'statistics',
        },
        {
            id: 5,
            icon1: require('../../assets/icons/subscription.png'),
            title: 'Subscription',
            icon2: require('../../assets/icons/arrow.png'),
            link: 'subscription',
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
                <Text style={{fontSize: 20, fontWeight: 500}}>Profile</Text>
            </View>
            <Pressable
            onPress={() => navigation.navigate('settings')}
            style={styles.settingsCon}
            >
                <Image style={{height: 24, width: 23}} source={require('../../assets/icons/settings.png')} />
            </Pressable>

        </View>


        <View style={styles.profileCon}>
            <Image style={styles.profileImg} source={require('../../assets/icons/picture.png')} />
            <Text style={{fontSize: 20, fontWeight: 600, marginTop: 5, color: '#141414' }}>Isaac Limo</Text>
            <Text style={{fontSize: 12, fontWeight: 400, color: '#141414B2', marginTop: 6,}}>@isaaclimo</Text>

            <View style={styles.ribbonCon}>
              <Image style={{height: 27.66, width: 22.08}} source={require('../../assets/icons/black.png')} />
              <Image style={{height: 27.66, width: 22.08}} source={require('../../assets/icons/red.png')} />
              <Image style={{height: 27.66, width: 22.08}} source={require('../../assets/icons/purple.png')} />
            </View>

            <View style={styles.statsCon}>
                <View style={styles.statsDiv}>
                    <Text style={{fontSize: 16, fontWeight: 500, color: '#141414', marginBottom: 7,}}>2</Text>
                    <Text style={{fontSize: 12, fontWeight: 400, color: '#00000080'}}>Reading</Text>
                </View>
                <View style={styles.statsDiv}>
                    <Text style={{fontSize: 16, fontWeight: 500, color: '#141414', marginBottom: 7,}}>32</Text>
                    <Text style={{fontSize: 12, fontWeight: 400, color: '#00000080'}}>Read</Text>
                </View>
                <View style={styles.statsDiv}>
                    <Text style={{fontSize: 16, fontWeight: 500, color: '#141414', marginBottom: 7,}}>48</Text>
                    <Text style={{fontSize: 12, fontWeight: 400, color: '#00000080'}}>Favorites</Text>
                </View>
            </View>

        </View>

        <ReadingNow />

        <View style={styles.activityWrapper}>
            {activity.map((item) => {
                return(
            <Pressable 
            onPress={() => navigation.navigate(item.link)}
            style={styles.activityCon}>
                <View style={styles.leftDiv}>
                    <Image style={{height: 25.4, width: 24}} source={item.icon1} />
                    <Text style={{fontSize: 16, fontWeight: 500, color: '#141414', marginLeft: 20}}>{item.title}</Text>
                </View>
                <View style={styles.rightDiv}>
                    <Image style={{height: 20, width: 10}} source={item.icon2} />
                </View>
            </Pressable>
                )
            })}
        </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: '#FFD672',
        paddingBottom: 15,
    },
    topCon: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 40,
        paddingHorizontal: 18,
        paddingTop: 18,
    },
    backCon: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF6DE99',
        height: 22,
        width: 20,
        borderRadius: 7,
        paddingHorizontal: 12,
    },
    settingsCon: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF6DE99',
        height: 41,
        width: 40,
        borderRadius: 15,
        paddingHorizontal: 12,
    },
    profileCon: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
        marginTop: 13,
    },
    profileImg: {
        height: 119,
        width: 108,
        borderRadius: 13,
    },
    ribbonCon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width:'30%',
        marginTop: 12,
    },
    statsCon: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        marginTop: 12,
        height: 62,
        width: '70%',
        backgroundColor: '#FFF6DE',
        borderRadius: 4,
        paddingHorizontal: 16
    },
    statsDiv: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    activityWrapper: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        paddingHorizontal: 18,
        marginTop:60,
    },
    activityCon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 23
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
})

export default Profile