import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const BookSettings = ({setSettings}) => {
    const [change, setChange] = useState(null);

    const changeFont = [
        {
            id: 1,
            font: 'lato'
        },
        {
            id: 2,
            font: 'popins'
        },
        {
            id: 3,
            font: 'inter'
        },
        {
            id: 4,
            font: 'helvetica'
        },
    ]

  return (
    <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => setSettings(false)} 
        style={styles.close}></TouchableOpacity>

        <View style={styles.sectionCon}>
                {/* FONTS */}
          <Text style={{fontSize: 12, fontWeight: 400, color: "#14141499"}}>Fonts</Text>
          <View style={styles.fontWrapper}>
            {changeFont.map((item) => {
                return(
            <TouchableOpacity 
            onPress={() => setChange(change === item.id ? null : item.id)}
            key={item.id} 
            style={styles.fontCon}
            >
              <Text style={{fontSize: 32, fontWeight: 700, color: change === item.id ? '#1338BE' : "#0000004D"}}>Aa</Text>
              <Text style={{fontSize: 12, fontWeight: 400, color: change === item.id ? '#1338BE' : "#14141499"}}>{item.font}</Text>
            </TouchableOpacity>
                )
            })}
          </View>
        </View>

                 {/* FONT SIZE */}
        <View style={styles.sectionCon}>
          <Text style={{fontSize: 12, fontWeight: 400, color: "#14141499"}}>Size</Text>
          <View style={styles.sizeWrapper}>
            <Text style={{fontSize: 14, fontWeight: 700, color: "#1338BE"}}>Aa</Text>
            <View style={styles.percentageCon}>
              <View style={styles.percentage}></View>
            </View>
            <Text style={{fontSize: 32, fontWeight: 700, color: "#1338BE"}}>Aa</Text>
          </View>
        </View>

                 {/* BRIGHTNESS */}
        <View style={styles.sectionCon}>
          <Text style={{fontSize: 12, fontWeight: 400, color: "#14141499", marginBottom: 5}}>Brightness</Text>
          <View style={styles.sizeWrapper}>
            <Ionicons name="moon-outline" size={20} color="#1338BE" strokeWidth={40}  />
            <View style={styles.percentageCon}>
              <View style={styles.percentage}></View>
            </View>
            <Ionicons name="sunny-outline" size={33} color="#000000" strokeWidth={40}  />
          </View>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#FFFF',
        width: '100%',
        height: 252,
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    close: {
        position: 'absolute',
        top: 3,
        backgroundColor: '#CFCFCF',
        borderRadius: 8,
        height: 4,
        width: 70
    },
    sectionCon: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%',
        marginTop: 14
    },
    fontWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    fontCon: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    sizeWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    percentageCon: {
        height: 8,
        borderRadius: 18,
        width: '75%',
        backgroundColor: '#D7D7D7',
        marginTop: 7,
    },
    percentage: {
        height: 8,
        borderRadius: 20,
        width: '30%',
        backgroundColor: '#FFD672',
    }
})

export default BookSettings