import React from 'react'
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Review = () => {
    const navigation = useNavigation();

    const handleButton = () => {
        navigation.navigate('eBook')
    }

  return (
    <View>
        <View style={styles.topCon}>
            <Pressable
            onPress={() => navigation.goBack()} 
            style={styles.backCon}
            >
              <Ionicons name="arrow-back-outline" size={24} color="#1338BE" strokeWidth={1}  />
           </Pressable>
        </View>

        <View style={styles.content}>
          <TouchableOpacity 
          onPress={handleButton}
          style={styles.buttonCon}
          >
              <Text style={{fontSize: 16, fontWeight: 500, color: '#1338BE'}}>Thank you for your review </Text>
          </TouchableOpacity>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        paddingHorizontal: 20,
    },
    topCon: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 60,
        paddingHorizontal: 20,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '85%'
    },
    buttonCon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 101,
        width: '70%',
        backgroundColor: '#FFD672',
        borderRadius: 16,
    }
})

export default Review