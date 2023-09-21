import React, { useState } from 'react'
import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import CategoryAudio from './CategoryAudio';

const CategoryList = () => {
    const [selectedTab, setSelectedTab] = useState('Tab1');

    const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>  
       <View style={styles.topCon}>
            <Pressable
            onPress={() => navigation.goBack()} 
            style={styles.backCon}
            >
                <Image style={{height: 15, width: 15}} source={require('../../assets/icons/back.png')} />
            </Pressable>
            <Text style={{fontSize: 20, fontWeight: 400, width: '62%'}}>Non-fiction</Text>
        </View>

              {/* TAB */}
        <View style={{alignItems: 'center', justifyContent: 'center', width: '100%', marginVertical: 50}}>
          <View style={styles.tabCon}>
            <TouchableOpacity
             style={ selectedTab === 'Tab1' ? styles.tabA : styles.tabB}
             onPress={() => setSelectedTab('Tab1')}
             >
                <Text style={{fontSize: 13, color: '#000000B2'}}>E-Book</Text>
            </TouchableOpacity>

            <TouchableOpacity 
             style={ selectedTab === 'Tab2' ? styles.tabA : styles.tabB}
             onPress={() => setSelectedTab('Tab2')}
            >
                <Text style={{fontSize: 13, color: '#000000B2'}}>Audio</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flex: 1}}>
          <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.scrollCon}
          >
            {selectedTab === 'Tab1' 
             ?<CategoryAudio />
             :selectedTab === 'Tab2' 
            ?<CategoryAudio selectedTab={selectedTab} />
            :''
             }
          </ScrollView>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: '#FFD672',
    },
    topCon: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
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
        height: 25,
        width: 25,
        borderRadius: 5,
        paddingHorizontal: 18,
    },
    tabCon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '75%',
        height: 35,
        borderRadius: 4,
        backgroundColor: '#FFF6DE',
        paddingHorizontal: 20,
    },
    tabA: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        height: '80%',
        backgroundColor: '#CDCDCD',
        borderRadius: 3,
    },
    tabB: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        height: '80%',
        borderRadius: 3,
    },
    scrollCon: {
        display: 'flex',
        flexGrow: 1,
    }
})





export default CategoryList