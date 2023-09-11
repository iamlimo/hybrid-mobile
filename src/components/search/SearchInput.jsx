import React from 'react'
import { Image } from 'react-native'
import { StyleSheet, TextInput, View } from 'react-native'

const SearchInput = () => {
  return (
    <View style={styles.searchCon}>
        <TextInput 
        style={styles.searchInput}
        placeholder="Name category, book, author"
        />
        <View style={styles.searchIcons}>
            <Image 
            style={{height: 16, width: 17}}
            source={require('../../../assets/icons/searchIcon.png')} 
            />
            <Image 
               style={{height: 20, width: 22}}
               source={require('../../../assets/icons/filterIcon.png')} 
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
        paddingHorizontal: 18,
        marginTop: 45,
    },
    searchInput: {
        backgroundColor: '#FFF6DE',
        color: '#14141499',
        fontSize: 13,
        width: '100%',
        height: 45,
        borderRadius: 28,
        paddingLeft: 50,
        // zIndex: 10,
    },
    searchIcons: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 18,
    }
})

export default SearchInput