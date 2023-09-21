import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StatusBar } from 'react-native';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const Personal = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView
    contentContainerStyle={styles.wrapper}
    >
        <View style={styles.topCon}>
            <Pressable
            onPress={() => navigation.goBack()}
            style={styles.backCon}>
              <Image style={{height: 15, width: 15}} source={require('../../assets/icons/back.png')} />
            </Pressable>
            <View style={styles.topCenterCon}>
              <Text style={{fontSize: 20, fontWeight: 500}}>personal info</Text>
              <Image style={styles.profileImg} source={require('../../assets/icons/picture.png')} />
              <View style={styles.changeImg}>
                <Image style={{height: 18.25, width: 18.28}} source={require('../../assets/icons/change.png')} />
              </View>
              <Text style={{fontSize: 12, fontWeight: 400, color: '#141414B2', marginTop: 8,}}>@isaaclimo</Text>
            </View>
        </View>

        <View style={styles.formCon}> 
            <Text style={{fontSize: 16, fontWeight: 500, marginBottom: 8}}>First name</Text>
            <TextInput 
             style={styles.input}
             placeholder="First name"
            />

            <Text style={{fontSize: 16, fontWeight: 500, marginBottom: 8}}>Last name</Text>
            <TextInput 
             style={styles.input}
             placeholder="Last name"
            />

            <Text style={{fontSize: 16, fontWeight: 500, marginBottom: 8}}>Email</Text>
            <TextInput 
             style={styles.input}
             placeholder="Email@email.com"
            />

            <Text style={{fontSize: 16, fontWeight: 500, marginBottom: 8}}>Username</Text>
            <TextInput 
             style={styles.input}
             placeholder="@username"
            />

            <Text style={{fontSize: 16, fontWeight: 500, marginBottom: 8}}>Password</Text>
            <View style={{width: '100%', position: 'relative'}}>
              <TextInput 
               style={styles.input}
               secureTextEntry={true}
               placeholder="***************"
              />
              <Image style={styles.inputIcon} source={require('../../assets/icons/eye.png')} />
            </View>

            <TouchableOpacity 
            onPress={() => navigation.goBack()}
            style={styles.button}>
                <Text style={{fontSize: 16, fontWeight: 600, color: '#FFFF'}}>Save changes</Text>
            </TouchableOpacity>

        </View>

    </ScrollView>
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
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: '#FFD672',
        paddingHorizontal: 18,
        paddingBottom: 30
    },
    topCon: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '67%',
        marginTop: 25,
    },
    backCon: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF6DE99',
        height: 25,
        width: 25,
        borderRadius: 5,
    },
    topCenterCon: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImg: {
        height: 148,
        width: 134,
        borderRadius: 13,
        marginTop: 20
    },
    changeImg: {
        position: 'absolute',
        bottom: 24,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        height: 24,
        width: 24,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 13,
    },
    formCon: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%',
        marginTop: 40
    },
    input: {
        width: '100%',
        height: 46,
        borderRadius: 8,
        backgroundColor: '#FFFFFFB2',
        paddingLeft: 20,
        marginBottom: 22
    },
    PasswordInput: {
        position: 'relative',
        width: '100%',
        height: 46,
        borderRadius: 8,
        backgroundColor: '#FFFFFFB2',
        paddingLeft: 20,
        marginBottom: 20
    },
    inputIcon: {
        position: 'absolute',
        top: '24%',
        right: 15,
        height: 13,
        width: 20,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 56,
        borderRadius: 4,
        backgroundColor: '#141414',
        marginTop: 25,
    }
})

export default Personal