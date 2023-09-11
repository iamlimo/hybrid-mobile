import React from 'react'
import { Image } from 'react-native'
import { StyleSheet, TextInput, View } from 'react-native'

const MessageSearch = () => {
  return (
    <View style={styles.searchCon}>
        <TextInput 
        style={styles.searchInput}
        placeholder="Search"
        />
        <View style={styles.searchIcons}>
            <Image 
            style={{height: 16, width: 16}}
            source={require('../../../assets/icons/searchIcon.png')} 
            />
        </View>
   </View>
  )
}

const styles = StyleSheet.create({
    searchCon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 22,
    },
    searchInput: {
        backgroundColor: '#EBEBEB',
        color: '#14141499',
        fontSize: 13,
        width: '100%',
        height: 45,
        borderRadius: 16,
        paddingLeft: 70,
    },
    searchIcons: {
        position: 'absolute',
        left: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 28,
    }
})

export default MessageSearch