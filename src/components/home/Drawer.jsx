import React from 'react'
import { Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Drawer = ({setOpenDrawer}) => {
    const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
        <Pressable onPress={() => setOpenDrawer(false)}
         style={styles.closeCon}
         >
           <Ionicons name="close-outline" size={40} color="#1338BE" strokeWidth={1}  />
        </Pressable>

        <View style={styles.linksWrapper}>
            <View
            style={styles.linksCon}
            >
              <Ionicons name="notifications-outline" size={28} color="#1338BE" strokeWidth={1}  />
              <Text style={{fontSize: 18, fontWeight: 400, color: '#1338BE', paddingLeft: 25}}>Notification</Text>
            </View>

            <View style={styles.linksCon}>
              <Ionicons name="calendar-outline" size={28} color="#1338BE" strokeWidth={1}  />
              <Text style={{fontSize: 18, fontWeight: 400, color: '#1338BE', paddingLeft: 25}}>Reading plan</Text>
            </View>

            <Pressable onPress={()=>navigation.navigate('personalJotter')}
            style={styles.linksCon}
            >
              <Ionicons name="reader-outline" size={28} color="#1338BE" strokeWidth={1}  />
              <Text style={{fontSize: 18, fontWeight: 400, color: '#1338BE', paddingLeft: 25}}>Personal jotter </Text>
            </Pressable>

        </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD672',
    paddingTop: StatusBar.currentHeight, 
  },
    wrapper: {
        flex: 1,
        position: 'absolute',
        top: 30,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF6DE',
        paddingHorizontal: 18,
    },
    closeCon: {
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        width: '100%',
        marginTop: 20 
    },
    linksWrapper: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
        marginTop: 20,
    },
    linksCon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        marginBottom: 20
    },
})

export default Drawer