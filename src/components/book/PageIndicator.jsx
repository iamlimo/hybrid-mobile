import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const PageIndicator = () => {
  return (
    <View style={styles.wrapper}>
        <View>
           <Text style={{fontSize: 12, fontWeight: 500, color: "#14141499"}}>Page 1 of 172</Text>
        </View>

        <View style={styles.container}>
            <View style={styles.page}></View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: 61,
    },
    container: {
        height: 8,
        borderRadius: 18,
        width: '75%',
        backgroundColor: '#D7D7D7',
        marginTop: 7,
    },
    page: {
        height: 8,
        borderRadius: 20,
        width: '30%',
        backgroundColor: '#FFD672',
    }
})

export default PageIndicator