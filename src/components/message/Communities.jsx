import React from 'react'
import { Image } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { communities } from '../../data/messageData/CommunitiesData'

const Communities = () => {
  return (
    <View style={styles.wrapper}>
        {communities.map((item) => {
            return(
        <View key={item.id} style={styles.sectionCon}>
            <View style={styles.sectionLeft}>
                <Text style={{fontSize: 16, fontWeight: 500, color: "#1338BE"}}>{item.title}</Text>
                <Text style={{fontSize: 12.64, fontWeight: 400, color: "#7184CB", marginTop: 4}}>{item.desc}</Text>
            </View>

            <View style={styles.sectionRight}>
                 <Image style={{height: 48, width: 48}} source={item.img} />
            </View>
            
        </View>
            )
        })}
       

    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
    },
    sectionCon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFF6DE',
        borderRadius: 16,
        paddingHorizontal: 28,
        marginBottom: 13,
        width: '100%',
        height: 78,
    },
    sectionLeft: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '65%'
    },
    sectionRight: {
        alignItems: 'flex-end',
        justifyContent: 'center'
    }
})

export default Communities